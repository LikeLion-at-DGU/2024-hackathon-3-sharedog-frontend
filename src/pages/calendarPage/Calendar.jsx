import React, { useState } from "react";

import Header from './header/Header';
import { useParams } from "react-router-dom";
import dummyReservation from '../../data/dummyReservation';
import styled from "styled-components";
import { Wrapper, Container, Title, Image, TextContent, HosInfo, HosName, HosDetail, HosPhone, NextBtn, Week, Time } from "./Styled";
import  VectorIcon  from '../../assets/icons/Vector.svg?react';
import PhoneIcon from '../../assets/icons/Phone.svg?react';

function Calendar() {
  const { id } = useParams();
  const hospital = dummyReservation.find((hospital) => hospital.id === parseInt(id));
  return (
    <>
      <Header/>
      <Wrapper>
        <Container>
          <Image src={hospital.image} alt={hospital.name} />
          <HosInfo>
            <HosName>
              <Title>{hospital.name}</Title>
            </HosName>
            <HosDetail>
              <TextContent><VectorIcon /> {hospital.place}</TextContent>
              <HosPhone><PhoneIcon /> {hospital.phone}</HosPhone>
            </HosDetail>
          </HosInfo>
          <Week>헌혈 희망 요일</Week>
          <Time>
            헌혈 희망 시간
          </Time>

          <NextBtn>다음</NextBtn>
        </Container>
      </Wrapper>
    </>
  );
}

export default Calendar;

