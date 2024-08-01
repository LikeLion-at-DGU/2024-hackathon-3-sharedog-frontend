// 긴급헌혈페이지 헤더  담당자: 이동건
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass as faMagnifyingGlassSolid, } 
    from "@fortawesome/free-solid-svg-icons";
import HeaderWrite from '../../../assets/icons/headerWriteBtn.svg?react'
import React, { useEffect, useState } from 'react';
import { useNavigate, } from 'react-router-dom'; // React Router의 useNavigate 훅 추가

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
const SearchIcon = ({ icon,onClick }) => ( //돋보기 fontawsome으로 가져옴
    <SearchBtn onClick={onClick}>
        <FontAwesomeIcon icon={icon} />
    </SearchBtn>
);
const WriteBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;

    svg {
        width: 33px;
        height: 33px;
    }
`;

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

const Header = ({ onSearch }) => {

    const navigate = useNavigate(); // useNavigate 훅 초기화

    const [searchText, setSearchText] = useState("");//검색기능 

    const handleNavigateToPostWrite = () => {
        navigate('/postwrite'); // 글쓰기 페이지 경로
    };

    //검색어 함수
    const handleSearchChange = (e) => {
        setSearchText(e.target.value);
      };
    const handleSearchClick = () => { // 검색 버튼 클릭 시 검색어 상태 업데이트
        onSearch(searchText);
      };
    return (
    <Wrapper>
        <HeaderBox>
            <Search>
                <SearchInput placeholder="검색어를 입력하세요." 
                value={searchText}
                onChange={handleSearchChange}/>
                <SearchIcon icon={faMagnifyingGlassSolid} onClick={handleSearchClick}/>
            </Search>
            <WriteBtn onClick={handleNavigateToPostWrite}>
                <HeaderWrite/>
            </WriteBtn>
        </HeaderBox>
    </Wrapper>
    );
};

export default Header;
    