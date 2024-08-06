import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // useNavigate 추가
import { API } from '../../api'; // API 호출을 위한 모듈 임포트
import S from './Styled';
import Header from './header/Header';
import DetailCard from './detailCard/DetailCard'; // DetailCard 컴포넌트 임포트
import Logo from '../../assets/images/Logo.png';

const BloodPostDetail = () => {
  const { id } = useParams(); // URL에서 `id`를 추출
  const [post, setPost] = useState(null);
  const [calLiked, setCalLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0); // 초기값을 0으로 설정
  const [is_liked, setIsLiked] = useState(false);
  const navigate = useNavigate(); // navigate 추가

  const handleLikeToggle = async () => {
    try {
      console.log('Post ID:', id); // 추가된 콘솔 로그
      const newLikeCount = calLiked ? likeCount - 1 : likeCount + 1; // 좋아요 상태에 따라 증가 또는 감소
      setLikeCount(newLikeCount); // 좋아요 수를 로컬 상태에 즉시 반영
      setCalLiked(!calLiked); // 좋아요 상태를 토글

      // 서버에 좋아요 상태 업데이트 요청
      await API.post(`/api/community/posts/${id}/likes`, { calLiked: !calLiked });
      
    } catch (error) {
      console.error('Error updating like status:', error);
      setLikeCount(calLiked ? likeCount + 1 : likeCount - 1); // 에러 발생 시 상태 복구
      setCalLiked(!calLiked); // 상태 복구
    }
  };

  const handleAddComment = (newComment) => {
    setPost((prevPost) => ({
      ...prevPost,
      comments: [...prevPost.comments, newComment]
    }));
  };

  const handleDelete = async () => {
    try {
      await API.delete(`/api/community/posts/${id}`);
      navigate('/bloodPost'); // 삭제 후 긴급헌혈목록으로 이동
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await API.get(`/api/community/posts/${id}`);
        console.log("Fetched post data:", response.data); // 응답 데이터 로깅
        setPost(response.data);
        setLikeCount(response.data.like_num); // 초기 좋아요 수 설정
        setCalLiked(response.data.is_liked); // 초기 좋아요 상태 설정
        setIsLiked(response.data.is_liked);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    fetchPost();
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  console.log("kingdog_profile data:", post.kingdog_profile); // 추가된 로그

  return (
    <S.Wrapper>
      <Header title="커뮤니티" />
      <S.Body>
        {post ? (
          <S.Content>
            <DetailCard
              post={post}
              calLiked={calLiked}
              likeCount={likeCount}
              handleLikeToggle={handleLikeToggle}
              is_liked={is_liked}
              handleDelete={handleDelete} // handleDelete 전달
            />
            <S.Line />
            {post.comments.map((comment) => (
              <S.Comments 
                key={comment.id} 
                comment={comment} 
                depth={0} 
                profileImageUrl={comment.kingdog_profile[0]?.dog_image || Logo}
              />
            ))}
          </S.Content>
        ) : (
          <div>Loading...</div>
        )}
      </S.Body>
      <S.CommentSend 
        postId={id} 
        onAddComment={handleAddComment} 
        profileImageUrl={post.kingdog_profile[0]?.dog_image || Logo} 
      />
    </S.Wrapper>
  );
};

export default BloodPostDetail;