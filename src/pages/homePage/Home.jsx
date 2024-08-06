import {
  Wrapper,
  Bg,
  ContentWrapper,
  InfoCard,
  InfoCardWrapper,
  Line,
  HomePostTitle,
  PetSlider,
  HomeFullBtn,
  HomeFilter,
  HomeWrapper,
} from "./Styled";
import Header from "./header/Header";
import React from "react";
import { API } from "../../api"; // API 호출을 위한 모듈 임포트
import { useEffect, useState } from "react";
import Home1 from "../../assets/icons/Home1.svg?react";
import Home2 from "../../assets/icons/Home2.svg?react";
import Home3 from "../../assets/icons/Home3.svg?react";
import Slider from "./Slider";
import { useNavigate } from "react-router-dom"; // useNavigate 훅 가져오기

const Home = () => {
  const [data, setData] = useState({ posts: [], profiles: [] });
  const [activeRegion, setActiveRegion] = useState('서울');
  const regions = ["서울", "인천", "경기", "강원", "경상", "충청","전라","제주"];
  const navigate = useNavigate();

  const fetchData = async (region = '') => {
    try {
      const url = region ? `/api/main/region/${region}/` : '/api/main/';
      const response = await API.get(url);
      console.log('진우데이터:', response.data);
      setData(response.data);
    } catch (error) {
      console.log("에러입니당:", error);
    }
  };

  useEffect(() => {
    fetchData(activeRegion);
  }, []);

  const handleRegionChange = (region) => {
    setActiveRegion(region);
    fetchData(region);
  };

  const handleFullBtnClick = () => {
    navigate("/bloodPost");
  };

  const handleInfoCardClick = (path) => {
    navigate(path);
  };

  console.log("헤더에 들어갈데이터:", data.profiles[0]); //나중에 지우기
  console.log("슬라이드 데이터:", data.posts);
  console.log("이미지 :", data.posts.image_1);

  return (
    <Wrapper>
      <Bg>
        <Header profile={data.profiles[0]} />
        <PetSlider />
      </Bg>
      <ContentWrapper>
        <InfoCardWrapper>
          <InfoCard icon={Home1} text="헌혈기준" onClick={() => handleInfoCardClick('/standard')} />
          <InfoCard icon={Home2} text="주의사항" onClick={() => handleInfoCardClick('/cautions')} />
          <InfoCard icon={Home3} text="헌혈 혜택" onClick={() => handleInfoCardClick('/benefits')}/>
        </InfoCardWrapper>
        <Line />
        <HomePostTitle>지역별 긴급헌혈 현황</HomePostTitle>
        <HomeFilter 
          regions={regions} 
          activeRegion={activeRegion} 
          onRegionChange={handleRegionChange} 
        />
        <HomeWrapper>
          <HomeFullBtn onClick={handleFullBtnClick}>전체보기</HomeFullBtn>
        </HomeWrapper>
        <Slider post={data.posts} />
      </ContentWrapper>
    </Wrapper>
  );
};

export default Home;