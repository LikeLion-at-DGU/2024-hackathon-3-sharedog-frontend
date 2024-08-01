//DetailCard Styled 

import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Wrapper = styled.div`
    width: 100%;
    /* height: 80vh;
    flex: 1;
    overflow-y: auto; */
`;
//88%
const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    display: flex;
    width: 90%;
    margin: 0 auto;
    margin-top: 16px;
    margin-bottom: 5px;
    gap: 9px;
`;

// Header: 카드 상단에 배지와 태그를 포함하는 영역
const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* margin-bottom: 8px; */
`;

const TagWrapper = styled.div` //피종류 지역 묶은거 
    display: flex;
    gap: 4px;
`;

// Badge: 혈액형 배지
const Badge = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ff6b6b;
    color: white;
    /* padding: 4px 13px; */
    width: 41px;
    height: 19px;
    border-radius: 12px;

    font-family: 'SUIT', sans-serif;
    font-weight: 500;
    font-size: 8px;
`;

// Tag: 지역 태그
const Tag = styled.div`
    display: flex;
    width: 32px;
    height: 19px;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    font-family: 'SUIT', sans-serif;
    font-weight: 500;
    font-size: 8px;
    border: 0.397px solid #FF6969;
    background: #FFF;
    color: #FF6969;
`;

// DateText: 작성일 표시
const DateText = styled.div`
 font-size: 10px;
 font-family: 'SUIT', sans-serif;
 font-weight: 500;
  color: #868e96;
`;

// Title: 게시글 제목
const Title = styled.h3`
  font-family: 'SUIT', sans-serif;
  font-weight: 700;
  /* margin: 8px 0; */
  font-size: 12px;
  font-weight: 700;
  display: flex;
  justify-content: flex-start;
  gap: 10px;
`;

// Writer: 작성자 이름
const Writer = styled.div`
  font-family: 'SUIT', sans-serif;
  font-weight: 500;
  display: flex;
  font-size: 10px;
  color: #868e96;
  flex-shrink: 0;
`;

//Body: 이미지랑 내용들어가는곳 
const Body = styled.div`
  display: flex;
  flex-direction: column;
  //이미지 있을때랑 없을때 배열다르게 
  align-items: ${props => (props.hasImage ? 'space-between' : 'center')};
  justify-content: center;
  gap:10px;
  /* margin-bottom: 8px; */
`;

// ImageWrapper: 이미지가 있을 경우 감싸는 래퍼
const ImageWrapper = styled.div`
    display: flex;
    /* width: 40%;
    min-height: 52px; */
    width: 181px;
    height: 111px;
    flex-shrink: 0;
    overflow: hidden;
    border-radius: 8px;
    
  /* margin-top: 12px; */
    img {
        width: 100%;
        height: 100%;
        object-fit: cover; //이미지 크기는 84 52로고정이고 비율안깨지게함 
    }
`;

// Content: 게시글 내용
const Content = styled.p`
    display: flex;
    //이미지 없을때는 100%로
    width: ${props => (props.hasImage ? '70%' : '100%')};
    /* height: 52px; */
    overflow: hidden;

    font-family: 'SUIT', sans-serif;
    font-weight: 500;
    font-size: 10px;
    color: #000;
    line-height: 15px; /* 150% */
    margin: 4px 0 12px;
`;

// Footer: 카드 하단에 좋아요 수, 댓글 수, 작성일을 포함하는 영역
const Footer = styled.div`
    font-family: 'SUIT', sans-serif;
    font-weight: 500;
    display: flex;
    width: 100%;
    height: 27px;
    align-items: center;

    /* margin-top: 12px; */
    border-radius: 0px 0px 8px 8px;
    background: rgba(255, 105, 105, 0.08);
`;

const FooterIcon = styled.div`
    display: flex;
    width: 90%;
    margin: 0 auto;
    gap: 9px;
`;

// LikeCount: 좋아요 수 표시
const LikeCount = styled.div`
    display: flex;
    align-items: center;
    color: #9C9CA1;
    font-size: 8px;
    gap:5px;
`;

const HeartBtn = styled.button` // 좋아요 버튼만들기 
    display: flex;
    font-size: 13px;
    justify-content: center;
    align-items: center;
    color:#FF6969;
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
`;

const HeartIcon = ({ icon, onClick }) => ( //하트아이콘 버튼 
    <HeartBtn onClick={onClick}>
        <FontAwesomeIcon icon={icon} />
    </HeartBtn>
);

// CommentCount: 댓글 수 표시
const CommentCount = styled.div`
    display: flex;
    align-items: center;
    color: #9C9CA1B2;
    font-size: 8px;
    gap:5px;
`;

const CommentBtn = styled.button` // 댓글 버튼기능만들기 
    display: flex;
    font-size: 15px;
    justify-content: center;
    align-items: center;
    color:#3e3e42b1;
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
`;

const CommentIcon = ({ icon, onClick }) => ( //댓글아이콘 버튼 
    <CommentBtn onClick={onClick}>
        <FontAwesomeIcon icon={icon} />
    </CommentBtn>
);

const detailCardStyles = {
    Wrapper,
    ContentWrapper,
    Header,
    TagWrapper,
    Badge,
    Tag,
    DateText,
    Title,
    Writer,
    Body,
    ImageWrapper,
    Content,
    Footer,
    FooterIcon,
    LikeCount,
    HeartBtn,
    HeartIcon,
    CommentCount,
    CommentBtn,
    CommentIcon
};

export default detailCardStyles;