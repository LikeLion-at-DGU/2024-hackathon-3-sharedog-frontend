//긴급헌혈 게시글 상세페이지 스타일
//BloodPostDetail Styled  담당자: 이동건
import styled from "styled-components";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocationArrow , } 
    from "@fortawesome/free-solid-svg-icons";
import CmtSend from '../../assets/icons/cmtSend.svg?react'
const Wrapper = styled.div`
    display  :flex ;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;
const Body = styled.div`
    display  :flex ;
    flex-direction: column;
    align-items: center;
    width: 88%;
    height: 80vh;
    flex: 1;
    overflow-y: auto;
    gap:23px;
    position: relative;
`;

const Content = styled.div`
  flex: 1;
  overflow-y: auto; // 이 영역만 스크롤 가능
  width: 100%;
  gap:23px;

`;
const Line =styled.div` //게시글이랑 댓글 사이에 선
    display : flex;
    width: 100%;
    height: 1px;
    background: rgba(234, 234, 234, 0.70);
`;

//댓글목록디자인 만들기 

const FooterCmt= styled.div`
    display: flex;
    justify-content: center;
    width: 99%;
    height: 34px;
    border-radius: 20px;
    background: #FFF;
    border: 1px solid #EAEAEA;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.15);
    margin-bottom:10px;

 
`;
const FooterCmtContent=styled.div`
    display: flex;
    width: 90%;
    align-items: center;

`;

const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-size: 14px;
`;


const IconWrapper = styled.div`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
    cursor: pointer;
    color: ${props => (props.$active ? '#FF6969' : '#9C9CA1B2')};
`;


const CommentBox  = () => {
    const [inputValue, setInputValue] = useState('');
  
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };
  
    return (
      <FooterCmt>
        <FooterCmtContent>
          <Input
            type="text"
            placeholder="댓글을 입력하세요."
            value={inputValue}
            onChange={handleInputChange}
          />
          <IconWrapper $active={inputValue.length > 0}>
            <FontAwesomeIcon icon={faLocationArrow} />
          </IconWrapper>
        </FooterCmtContent>
      </FooterCmt>
    );
  };
const detailPageStyles = {
    Line,Wrapper,Body,CommentBox ,Content
};
export default detailPageStyles;