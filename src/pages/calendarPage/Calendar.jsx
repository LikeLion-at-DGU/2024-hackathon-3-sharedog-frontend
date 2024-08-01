import React, { useState } from "react";
import Header from "./header/Header";
import { useParams } from "react-router-dom";
import dummyReservation from "../../data/dummyReservation";
import styled from "styled-components";
import { Wrapper } from "../reservationPage/Styled";

const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-top: 20px;
`;

const TextContent = styled.p`
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 10px;
`;

function Calendar() {
  const { id } = useParams();
  const hospital = dummyReservation.find(
    (hospital) => hospital.id === parseInt(id)
  );
  return (
    <>
      <Header />
      <Wrapper>
        <Container>
          <Title>{hospital.name}</Title>
          <Image src={hospital.image} alt={hospital.name} />
          <TextContent>{hospital.place}</TextContent>
        </Container>
      </Wrapper>
    </>
  );
}

export default Calendar;
