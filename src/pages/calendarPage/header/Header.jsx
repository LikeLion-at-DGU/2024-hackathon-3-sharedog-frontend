import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass as faMagnifyingGlassSolid } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 10vh;
`;
const HeaderBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    gap: 22px;
`;
const Search = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 7px 18px;
    width: 100%;
    min-width: 260px;
    min-height: 33px;
    border-radius: 50px;
    border: 1px solid #FF6969;
    background: rgba(255, 255, 255, 0.80);
`;
const SearchBtn = styled.button`
    display: flex;
    font-size: 19px;
    justify-content: center;
    align-items: center;
    color: #FF6969;
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
`;
const SearchIcon = ({ icon }) => (
    <SearchBtn>
        <FontAwesomeIcon icon={icon} />
    </SearchBtn>
);

const SearchInput = styled.input`
    flex: 1;
    border: none;
    outline: none;
    background: transparent;
    color: #9C9CA1;
    font-family: SUIT;
    font-size: 12px;
    font-weight: 500;
    &::placeholder {
        color: rgba(255, 105, 105, 0.40);
    }
`;

const Header = ({ onSearchChange }) => {
    return (
        <Wrapper>
            <HeaderBox>
                <Search>
                    <SearchInput
                        placeholder="검색어를 입력하세요."
                        onChange={onSearchChange}
                    />
                    <SearchIcon icon={faMagnifyingGlassSolid} />
                </Search>
            </HeaderBox>
        </Wrapper>
    );
};

export default Header;
