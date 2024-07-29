// 긴급헌혈페이지 담당자: 이동건
import React, { useEffect, useState } from 'react';
import {
    Wrapper,DropdownWrapper
} from './Styled';
import Header from './header/Header';
// import dummyBloodPost from "../../data/dummyBloodPost";
import BloodPostCard from '../../components/bloodPostCard/BloodPostCard';
import Dropdown from './DropDown';
import {API} from '../../api'
const regions = ["전체", "서울", "인천", "경기", "강원", "경상", "충청", "전라", "제주"];
const bloodTypes = ["전체", "DEA 1-", "DEA 1.1", "DEA 1.2", "DEA 3", "DEA 4", "DEA 5", "DEA 7"];

const BloodPost = () => {
    const [posts, setPosts] = useState([]);

 
    // 초기에는 더미 데이터를 사용
    // setPosts(dummyBloodPost);
    // 실제 API 호출이 필요한 경우, 아래 코드를 사용
    const fetchPosts = async () => {
      try {
        const response = await API.get('/api/community/posts');
        console.log(response.data);
        
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    useEffect(() => {
      fetchPosts();
  }, []);
    return (
    <>
    <Header /> 
    {/* 이런식으로 헤더를 각페이지에서 따로 임포트시키는게 나을듯요  */}
    <Wrapper>
      <DropdownWrapper>
        <Dropdown label="지역" options={regions} />
        <Dropdown label="혈액형" options={bloodTypes} />
      </DropdownWrapper>
      
      {/* <div>긴급헌혈페이지</div> */}
      {posts && posts.map(post => (
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

