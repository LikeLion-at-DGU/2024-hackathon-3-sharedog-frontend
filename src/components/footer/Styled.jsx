// 푸터 스타일 담당자: 이동건 
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Wrapper = styled.div`// 푸터 프레임 
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 10vh;
    box-shadow: 0px -6px 14px 0px rgba(47, 47, 47, 0.04);
`;

const IconWrapper = styled.div`// 아이콘 프레임 
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    /* border: 2px solid blue; */
`;

const IconBox = styled.div` // 아이콘과 텍스트를 묶는 박스 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

const Icon = styled.svg`// 아이콘 svg
    width: 26px;
    height: 26px;
    margin-bottom: 5px;


`;

const IconText = styled.div`// 아이콘 텍스트 
    font-size: 10px;
    color: rgba(156, 156, 161, 0.70);
    font-family: SUIT;
    font-size: 10px;
    font-weight: 400;
`;

const Path = styled(NavLink)` // NavLink
    text-decoration: none;
    &:visited {
            color: inherit; // 방문한 링크의 텍스트 색상 유지
        }
    &.active ${Icon} path { // 클릭됐을때 아이콘 색상 변경
        fill: #FF6969;
    }

    &.active ${IconText} { // 클릭됐을때 텍스트 색상 변경
        color: #FF6969;
    }

    &:hover ${Icon} path { // 호버됐을때 아이콘 색상 변경 근데 생각해보니 모바일은 호버없음 
        fill: #ffcccc ;
    }

    &:hover ${IconText} { // 호버됐을때 텍스트 색상 변경
        color: #ffcccc;
    }
`;

const FooterIcon = ({ Svg, label, to }) => (
    <Path to={to} activeClassName="active">
        <IconBox>
            <Icon as={Svg} />
            <IconText>{label}</IconText>
        </IconBox>
    </Path>
);

const styles = {
    Wrapper,
    IconWrapper,
    IconBox,
    Icon,
    IconText,
    Path,
    FooterIcon,
};

export default styles;
