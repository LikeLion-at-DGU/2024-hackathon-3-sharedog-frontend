import {
    Wrapper,Bg,ContentWrapper,PetTestCard,InfoCard,InfoCardWrapper,Line,
} from './Styled';
import Header from './header/Header';
import React from 'react';
import { API } from '../../api'; // API 호출을 위한 모듈 임포트
import { useEffect, useState } from 'react';
import Home1 from '../../assets/icons/Home1.svg?react';
import Home2 from '../../assets/icons/Home2.svg?react';
import Home3 from '../../assets/icons/Home3.svg?react';
import Slider from './Slider';
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
    return (
        
    <Wrapper>
        <Bg>
            <Header/>
            <PetTestCard/>
        </Bg>
        <ContentWrapper>
            <InfoCardWrapper>
                <InfoCard icon={Home1} text="헌혈기준" />
                <InfoCard icon={Home2} text="주의사항" />
                <InfoCard icon={Home3} text="헌혈 혜택" />
            </InfoCardWrapper>
            <Line/>
            <Slider />
        </ContentWrapper>
    </Wrapper>

);
    
};

export default Home;
    