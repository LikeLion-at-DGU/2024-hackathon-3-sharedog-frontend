// 긴급헌혈페이지 스타일 담당자: 이동건
import styled from 'styled-components';


export const Wrapper = styled.div`
    display  :flex ;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    gap:20px;
    width: 100%;
    height: 80vh;
    /* font-size: 20px;
    font-family: SUIT;//폰트사용 예시 
    font-weight: 800; */
    /* margin-top: 60px; */
    flex: 1;
    overflow-y: auto;//가운데 내용만 스크롤되게 하는 코드 
`;

// export const Filter = () => (
//     <div>필터</div>
// );

export const DropdownWrapper=styled.div`
    display: flex;
    width: 88%;
    justify-content: flex-start;
    gap:10px;
`;