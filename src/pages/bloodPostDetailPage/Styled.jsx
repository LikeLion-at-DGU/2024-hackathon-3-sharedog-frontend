//긴급헌혈 게시글 상세페이지 스타일
//BloodPostDetail Styled  담당자: 이동건
import styled from "styled-components";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocationArrow , } 
    from "@fortawesome/free-solid-svg-icons";
// import CmtSend from '../../assets/icons/cmtSend.svg?react'
const Wrapper = styled.div`
    display  :flex ;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;
const Body = styled.div`
  margin-top: 10px;
    display  :flex ;
    flex-direction: column;
    align-items: center;
    width: 88%;
    /* height: 80vh; */
    height: 80vh; /* 80vh에서 FooterCmt 높이를 제외 */
    flex: 1;
    overflow-y: auto;
    padding-top:8vh;
    padding-bottom: 10vh; /* FooterCmt 높이만큼 padding 추가 */
   
    
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
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

//댓글목록디자인-------------------------------------------- 
const CmtDepth = styled.div`//대댓글에서만 적용되는 스타일디브
  margin-left: ${props => props.$depth * 5}vw;
  width: calc(100% - ${props => props.$depth * 5}vw);
  margin-top:  ${props => props.$depth * 10}px;
`;
const CmtWrapper =styled.div` //댓글 하나 전체를  감싸는 디브 
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;

`;
const CmtProfile = styled.div`//댓글프로필 
    display: flex;
    width: 37px;
    height: 37px;
    flex-shrink: 0;
    overflow: hidden;
    border-radius: 40px;
    background-color: gray;
  /* margin-top: 12px; */
    img {
      width: 100%;
      height: 100%;
      object-fit: cover; //이미지 비율안깨지게함 
    }
`;
const CmtContent =styled.div` //댓글내용 디브 
  display: flex;
  width: 100%;
  min-height: 46px;
  border-radius: 10px;
  border: 1px solid var(--Color-Gray-Gray01, #EAEAEA);
  background: #FFF;
`;
const Comments  = ({comment, depth = 0 }) => {
  
  return (
    <CmtDepth $depth={depth}>
      <CmtWrapper>
        <CmtProfile>
          <img src={comment.profileImageUrl} alt={comment.writer} />
        </CmtProfile>
        <CmtContent>
          {comment.content}
        </CmtContent>
      </CmtWrapper>
      {comment.recomments && comment.recomments.length > 0 && (
        comment.recomments.map((recomment) => (
          <Comments key={recomment.id} comment={recomment} depth={depth + 1} />
        ))
      )}
    </CmtDepth>
  );
};
// ----------------------------------------------------------
//댓글작성하는 푸터 디자인 -----------------------------------

const Color = styled.div`//댓글달때 배경색
  background-color: #FAFAFC;
  box-shadow: 0px 4px 14px 0px rgba(47, 47, 47, 0.04); /* 새로운 그림자 효과 추가 */
  display: flex;
  align-items: center;
  width: 100%;
  height: 10vh;
  position:fixed;
    bottom: 10vh;  // 푸터바로위에 위치하려고 푸터높이만큼 높임 
    left: 0;
    right: 0;
    z-index: 999;
`;
const FooterCmt= styled.div`
    display: flex;
    justify-content: center;
    width: 88%;//position:fixed;설정을 해놔서 부모 요소영향을 안받음 
    height: 34px;
    margin: 0 auto;
    border-radius: 20px;
    background: #FFF;
    border: 1px solid #EAEAEA;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.15);
    margin-bottom:20px;

    
  //댓글 다는 푸터 하단에 고정시키기 
    position:fixed;
    /* bottom: 10vh;  // 푸터바로위에 위치하려고 푸터높이만큼 높임  */
    bottom: 10vh;  // 푸터 위에 적절한 위치로 설정
    left: 0;
    right: 0;
    z-index: 1000;  
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



const CommentSend  = () => {
    const [inputValue, setInputValue] = useState('');
  
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };
  
    return (
      <Color>
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
      </Color>
    );
  };
// -----------------------------------

const detailPageStyles = {
    Line,Wrapper,Body,CommentSend ,Content,Comments,
};
export default detailPageStyles;