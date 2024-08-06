import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`// 푸터 프레임 
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 15vh;
    background-color: #FAFAFC;
    /* box-shadow: 0px -6px 14px 0px rgba(47, 47, 47, 0.04); */
`;

const FooterButton = styled.div`
  display: flex;
  width: 88%;
  padding: 16px 0px;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  color: #FAFAFC;
  background: ${({ btnColor }) => btnColor || 'rgba(156, 156, 161, 0.50)'};
  cursor: pointer;
  font-family: SUIT;
  font-style: normal;
  font-weight: 700;
`;

const testFooter = ({buttonText, btnColor, onClick}) => {  
  return (
    <Wrapper>
      <FooterButton btnColor={btnColor} onClick={onClick}>
        {buttonText}
      </FooterButton>
    </Wrapper>
  );
};

export default testFooter;