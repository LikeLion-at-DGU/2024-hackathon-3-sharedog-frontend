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
  margin-top:  ${props => props.$depth * 18}px;
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
  flex-direction: column;
  align-items: flex-start;
  padding: 9px 15px;
  width: 100%;
  min-height: 46px;
  border-radius: 10px;
  border: 1px solid var(--Color-Gray-Gray01, #EAEAEA);
  background: #FFF;
  gap:6px;

  color: #000;
  font-family: SUIT;
  font-size: 12px;;
  font-weight: 500;
`;
const ProfileInfoBox=styled.div`//댓글에 이름,시간,답글쓰기버튼 감싸는디브
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
const ProfileInfo=styled.div`
  display: flex;
  gap: 6px;
  color: #000;

  font-family: SUIT;
  font-size: 10px;
  font-weight: 500;
  div{//2시간전 이런 시간 
    color: #ADADAD;
  }
`;//이름,시간

const CmtReSendBtn=styled.button`
  background: none; /* 배경 투명 */
  border: none; /* 테두리 없음 */ 
  color: #ADADAD;
  font-family: SUIT;
  font-size: 10px;
  font-weight: 500;

  cursor: pointer; /* 커서를 포인터로 변경 */
  padding: 0; /* 기본 패딩 제거 */
  margin: 0; /* 기본 마진 제거 */
  outline: none; /* 포커스 시 나타나는 윤곽선 제거 */
`;//답글달기 버튼 
const Comments  = ({comment, depth = 0 }) => {
  
  return (
    <CmtDepth $depth={depth}>
      <CmtWrapper>
        <CmtProfile>
          <img src={comment.profileImageUrl} alt={comment.writer} />
        </CmtProfile>
        <CmtContent>
          <ProfileInfoBox>
            <ProfileInfo>{comment.writer} <div>{comment.created_at}</div></ProfileInfo>
            <CmtReSendBtn>답글달기</CmtReSendBtn> {/*답글달기함수추가해야됨*/}
          </ProfileInfoBox>
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
  height: 9vh;
  position:fixed;
    bottom: 10vh;  // 푸터바로위에 위치하려고 푸터높이만큼 높임 
    left: 0;
    right: 0;
    z-index: 999;
`;
const FooterCmt= styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 88%;//position:fixed;설정을 해놔서 부모 요소영향을 안받음 
    min-width: 316px;
    max-width: 520px;//fixed하면 그위에 설정했던게 다날라가서 이거도 해야됨 
    height: 34px;
    margin: 0 auto;
    border-radius: 20px;
    background: #FFF;
    border: 1px solid #EAEAEA;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.15);
    margin-bottom:15px;
    gap:9px;
    
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
    width: 80%;
    align-items: center;
`;

const Input = styled.input`
  width: 100%;
  display: flex;

  border: none;
  outline: none;
  font-size: 12px;
  color: #000000;
  /* text-align: center; */
  font-family: SUIT;
  font-weight: 500;
  &::placeholder { 
        //그냥 ::placeholder 이거는 그냥css일때 쓰는거고 전역선택자 취급인가 그래서 안된다는듯&을써서 정확히 지정해야 적용된다는듯 
        color: #9C9CA1;
    }
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
const SendProfile = styled.div`//댓글프로필 
    display: flex;
    width: 23px;
    height: 23px;
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


const CommentSend  = ({comment}) => {
    const [inputValue, setInputValue] = useState('');
  
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };
  
    return (
      <Color>
      <FooterCmt>
        <SendProfile>
          <img src={comment.profileImageUrl} alt={comment.writer} />
        </SendProfile>
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