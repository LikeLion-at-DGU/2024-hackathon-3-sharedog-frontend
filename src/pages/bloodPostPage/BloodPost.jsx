// 긴급헌혈페이지 담당자: 이동건
import React, { useEffect, useState } from 'react';
import {
    Wrapper,
} from './Styled';
import Header from './header/Header';
import dummyBloodPost from "../../data/dummyBloodPost";
import BloodPostCard from '../../components/bloodPostCard/BloodPostCard';
const BloodPost = () => {
    const [posts, setPosts] = useState([]);

  useEffect(() => {
    // 초기에는 더미 데이터를 사용
    setPosts(dummyBloodPost);
    // 실제 API 호출이 필요한 경우, 아래 코드를 사용
    // const fetchPosts = async () => {
    //   try {
    //     const response = await fetch('https://your-api-endpoint.com/posts');
    //     const data = await response.json();
    //     setPosts(data);
    //   } catch (error) {
    //     console.error('Error fetching posts:', error);
    //   }
    // };
    // fetchPosts();
  }, []);
    return (
    <>
    <Header /> 
    {/* 이런식으로 헤더를 각페이지에서 따로 임포트시키는게 나을듯요  */}
    <Wrapper>
        {/* <div>긴급헌혈페이지</div> */}
        {posts.map(post => (
          <BloodPostCard
            key={post.id}
            image={post.image}
            title={post.title}
            content={post.content}
            date={post.created_at}
            commentsCount={post.comments_cnt}
            likes={post.like_num}
            bloodType={post.blood}
            region={post.region}
            writer={post.writer}
          />
        ))}
    </Wrapper>
    </>
    )
};

export default BloodPost;

