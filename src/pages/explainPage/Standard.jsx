//헌혈혜택 페이지 이동건
import React from "react";
import styled from "styled-components";
import CImg from "../../assets/images/homestandard.png";
import Back from "../../assets/icons/backMyPage.svg?react";
import { useNavigate } from "react-router-dom";

const Standard = () => {
    return (
        <>
            <Header />
            <Wrapper>
                <StyledImage src={CImg} alt="Caution" />
            </Wrapper>
        </>
    );
};

export default Standard;

const Wrapper = styled.div`
    margin-top: 10vh;
    display: flex;
    justify-content: center;
    width: 100%;
`;

const StyledImage = styled.img`
    width: 90%;
    height: auto;
    overflow-y: auto;
`;

const BackBtn = styled.button`
  display: flex;
  font-size: 19px;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
`;

const Header = () => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };
    
    return (
        <HeaderBox>
            <HeaderWrapper>
                <BackBtn onClick={goBack}><Back /></BackBtn>
                <HeaderContent>헌혈기준</HeaderContent>
                <div></div>
            </HeaderWrapper>
        </HeaderBox>
    );
};

const HeaderBox = styled.div`
    min-width: 360px;
    max-width: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 10vh;
    position: fixed;
    top: 0; /* 화면 상단에 고정 */
    background-color: #FAFAFC;
    z-index: 1; /* 다른 요소들보다 위에 배치 */
`;

const HeaderWrapper = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    align-items: center;
`;

const HeaderContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    color: #000;
    text-align: center;
    font-family: SUIT;
    font-size: 16px;
    font-weight: 600;
    line-height: 30px; /* 187.5% */
`;