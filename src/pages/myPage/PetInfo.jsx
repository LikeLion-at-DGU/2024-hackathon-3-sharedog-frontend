import { Wrapper } from "./Styled";
import Header from "./header/Header";
import React, { useState } from "react";
// import dummyPetInfo from "../../data/dummyPetInfo";
import PetInfoCard from "../../components/myPageComponent/PetInfoCard";
import { useNavigate } from "react-router-dom"; // useNavigate 훅 가져오기
import { PlusBtn } from "./Styled";

const PetInfo = () => {
  const navigate = useNavigate(); // useNavigate 훅 초기화

  // Editbtn 클릭 핸들러
  const handleRegisterClick = () => {
    navigate("/PetRegister"); // petedit 경로로 이동
  };
  return (
    <>
      <Wrapper>
        <Header title="반려견 정보" />
        <PetInfoCard></PetInfoCard>
        <PlusBtn onClick={handleRegisterClick}>등록하기</PlusBtn>
      </Wrapper>
    </>
  );
};

export default PetInfo;
