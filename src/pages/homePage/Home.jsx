import {
    Wrapper,Bg,OverlapContent,ContentWrapper
} from './Styled';
import Header from './header/Header';
import React from 'react';
import { API } from '../../api'; // API 호출을 위한 모듈 임포트
import { useEffect, useState } from 'react';
const Home = () => {
    const [data, setData] = useState();

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
            <OverlapContent>
                겹치는 부분 
            </OverlapContent>
        </Bg>
        <ContentWrapper>
            홈화면
        </ContentWrapper>
    </Wrapper>

  );
    
};

export default Home;
    