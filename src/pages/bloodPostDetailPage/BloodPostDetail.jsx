import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API } from '../../api'; // API 호출을 위한 모듈 임포트
import S from './Styled';
import Header from './header/Header';
import DetailCard from './detailCard/DetailCard'; // DetailCard 컴포넌트 임포트

const BloodPostDetail = () => {
  const { id } = useParams(); // URL에서 `id`를 추출
  const [post, setPost] = useState(null);
  const [calLiked, setCalLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0); // 초기값을 0으로 설정
  const [is_liked, setIsLiked] = useState(false);

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

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await API.get(`/api/community/posts/${id}`);
        console.log("흠:", response.data);
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
            />
            <S.Line />
            {post.comments.map((comment) => (
              <S.Comments key={comment.id} comment={comment} depth={0} />
            ))}
          </S.Content>
        ) : (
          <div>Loading...</div>
        )}
      </S.Body>
      <S.CommentSend key={post.comments.id} comment={post.comments} />
    </S.Wrapper>
  );
};

export default BloodPostDetail;