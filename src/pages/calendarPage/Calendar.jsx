import React, { useState } from "react";
import Header from './header/Header';
import { useParams } from "react-router-dom";
import dummyReservation from '../../data/dummyReservation';
import styled from "styled-components";
import { Wrapper, Container, Title, Image, TextContent, HosInfo } from "./Styled";

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
            <Title>{hospital.name}</Title>
            <TextContent>{hospital.place}</TextContent>
          </HosInfo>
        </Container>
      </Wrapper>
    </>
  );
}

export default Calendar;