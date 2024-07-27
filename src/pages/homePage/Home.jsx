import {
    Wrapper,
} from './Styled';
import Header from './header/Header';
import React from 'react';

const Home = () => {
    return (
    <>
    <Header /> 
    {/* 이런식으로 헤더를 각페이지에서 따로 임포트시키는게 나을듯요  */}
    <Wrapper>
        <div>홈화면</div>
    </Wrapper>
    </>

  );
    
};

export default Home;
    