import React from 'react';
import styled from 'styled-components';
import BackBtnSVG from "../../../assets/icons/backMyPage.svg?react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import dummyReservation from "../../../data/dummyReservation";
import  VectorIcon  from '../../../assets/icons/Vector.svg?react';

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 10vh;
`;

const HeaderBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 88%;
    margin: 0 auto;
`;

const Search = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
    box-sizing: border-box;
    width: 80%;
    min-width: 260px;
    min-height: 33px;
    border-radius: 50px;
    border: 1px solid #FF6969;
    background: rgba(255, 255, 255, 0.80);
    position: relative; /* Enable positioning for child elements */
`;

const HosPlace = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 9px;
  color: var(--Red-Red04, #FF6969);
  font-family: SUIT;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const BackBtn = styled.button`
    display: flex;
    font-size: 19px;
    justify-content: center;
    align-items: center;
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
`;

const Header = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    const { id } = useParams();
    const hospital = dummyReservation.find((hospital) => hospital.id === parseInt(id));

    return (
        <Wrapper>
            <HeaderBox>
              <BackBtn onClick={goBack}>
                  <BackBtnSVG />
              </BackBtn>
              <Search>
                <HosPlace>
                  <VectorIcon />
                  <p>{hospital.name}</p>
                </HosPlace>
              </Search>
              <div></div>
            </HeaderBox>
        </Wrapper>
    );
};

export default Header;
