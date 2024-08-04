import {
  Wrapper,
  Bg,
  ContentWrapper,
  PetTestCard,
  InfoCard,
  InfoCardWrapper,
    
  Line,HomePostTitle,PetSlider
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

    const fetchData = async () =>{
        try{
            const response=await API.get('/api/main');
            console.log('진우데이터:', response.data);
            setData(response.data);
        }catch (error){
            console.log("에러입니당:",error);
        }

    };
    useEffect(()=> {
        fetchData();
    }, []);
    console.log("헤더에 들어갈데이터:",data.profiles[0]);//나중에 지우기
    console.log("슬라이드 데이터:",data.posts);
    return (
        
    <Wrapper>
        <Bg>
            <Header profile={data.profiles[0]} />
            <PetSlider/>
        </Bg>
        <ContentWrapper>
            <InfoCardWrapper>
                <InfoCard icon={Home1} text="헌혈기준" />
                <InfoCard icon={Home2} text="주의사항" />
                <InfoCard icon={Home3} text="헌혈 혜택" />
            </InfoCardWrapper>
            <Line/>
            <HomePostTitle>지역별 긴급헌혈 현황</HomePostTitle>
            <Slider post={data.posts} />
        </ContentWrapper>
    </Wrapper>
  );
};

export default Home;
