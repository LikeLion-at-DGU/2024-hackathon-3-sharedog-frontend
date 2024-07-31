//긴급헌혈 게시글 상세페이지 스타일
//BloodPostDetail Styled  담당자: 이동건
import styled from "styled-components";

const Wrapper = styled.div`
    display  :flex ;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 80vh;
    flex: 1;
    overflow-y: auto;
    gap:23px;
`;
const Line =styled.div` //게시글이랑 댓글 사이에 선 
    width: 88%;
    height: 1px;
    background: rgba(234, 234, 234, 0.70);
`;

//댓글목록디자인 만들기 

const FooterCmt= style.div`
    
`;
const detailPageStyles = {
    Line,Wrapper,
};
export default detailPageStyles;