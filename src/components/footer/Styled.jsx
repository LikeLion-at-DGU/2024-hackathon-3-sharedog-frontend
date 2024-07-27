// 푸터 스타일 담당자: 이동건 
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import HomeIcon  from '../../assets/icons/footerHome.svg?react';
import ReserveIcon  from '../../assets/icons/footerReserve.svg?react';
import MyPageIcon  from '../../assets/icons/footerMyPage.svg?react';
import BloodIcon  from '../../assets/icons/footerBloodPost.svg?react';



const styles = {
    Wrapper: styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 10vh;
        border: 2px solid blue;
    `,
    IconBox: styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 80%;
        border: 2px solid blue;
    `,
    FooterH: styled(HomeIcon)`
        width: 26px;
        height: 26px;
    `,
    FooterR: styled(ReserveIcon)`
        width: 26px;
        height: 26px;
    `,
    FooterM: styled(MyPageIcon)`
        width: 26px;
        height: 26px;
    `,
    FooterB: styled(BloodIcon)`
        width: 26px;
        height: 24px;
    `
};

export default styles;
