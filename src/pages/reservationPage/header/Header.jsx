import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass as faMagnifyingGlassSolid, } 
    from "@fortawesome/free-solid-svg-icons";
import HeaderWrite from '../../../assets/icons/headerWriteBtn.svg?react'

const Wrapper = styled.div` //헤더 전체 프레임 
    display  :flex ;
    justify-content: center;
    width: 100%;
    height: 10vh;
`;
const HeaderBox = styled.div` //헤더 요소를 감싸는 프레임 
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 88%;
    gap: 22px;
`;
const Search = styled.div`//검색창 디브 
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 7px 18px;
    width:100%;
    min-width: 260px;
    min-height: 33px;
    border-radius: 50px;
    border: 1px solid #FF6969;
    background: rgba(255, 255, 255, 0.80);
`;
const SearchBtn =styled.button` //검색창안에 돋보기 css
    display: flex;
    /* width: 25px;
    height: 25px; */
    font-size: 19px;
    justify-content: center;
    align-items: center;
    color:#FF6969;
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
`;
const SearchIcon = ({ icon }) => ( //돋보기 fontawsome으로 가져옴
    <SearchBtn>
        <FontAwesomeIcon icon={icon} />
    </SearchBtn>
);

const SearchInput=styled.input`
    flex: 1;
    border: none;
    outline: none;
    background: transparent;
    /* padding-left: 10px; */
    color: #9C9CA1;
    font-family: SUIT;
    font-size: 12px;
    font-weight: 500;
    &::placeholder { 
        //그냥 ::placeholder 이거는 그냥css일때 쓰는거고 전역선택자 취급인가 그래서 안된다는듯&을써서 정확히 지정해야 적용된다는듯 
        color: rgba(255, 105, 105, 0.40);
    }
`;

const Header = () => {
    return (
    <Wrapper>
        <HeaderBox>
            <Search>
                <SearchInput placeholder="검색어를 입력하세요." />
                <SearchIcon icon={faMagnifyingGlassSolid}/>
            </Search>
        </HeaderBox>
    </Wrapper>
    );
};

export default Header;
    