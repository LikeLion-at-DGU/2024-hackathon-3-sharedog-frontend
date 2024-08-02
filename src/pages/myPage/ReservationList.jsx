import { Wrapper } from "./Styled";
import Header from "./header/Header";
import React, { useState } from "react";
// import dummyPetInfo from "../../data/dummyPetInfo";
import PetInfoCard from "../../components/myPageComponent/PetInfoCard";
import { useNavigate } from "react-router-dom"; // useNavigate 훅 가져오기
import ReservationCard from "../../components/myPageComponent/ReservationCard";

const ReservationList = () => {
  const navigate = useNavigate(); // useNavigate 훅 초기화

  return (
    <>
      <Wrapper>
        <Header title="헌혈 예약 내역" />
        <ReservationCard></ReservationCard>
      </Wrapper>
    </>
  );
};

export default ReservationList;
