//긴급헌혈 게시글 상세페이지 담당자: 이동건

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API } from '../../api'; // API 호출을 위한 모듈 임포트
import S from './Styled'
const BloodPostDetail = () => {
  const { id } = useParams(); // URL에서 `id`를 추출
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await API.get(`/api/community/posts/${id}`);
        setPost(response.data);
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
    <Wrapper>
      
    </Wrapper>
  );
};

export default BloodPostDetail;

// <div>
//       <h1>{post.title}</h1>
//       <p>{post.content}</p>
//       <p>작성자: {post.writer}</p>
//       {/* 추가적으로 게시글의 다른 정보를 표시 */}
//     </div>