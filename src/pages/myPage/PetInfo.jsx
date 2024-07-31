import { Wrapper } from "./Styled";
import Header from "./header/Header";
import React, { useState } from "react";
// import dummyPetInfo from "../../data/dummyPetInfo";
import PetInfoCard from "../../components/myPageComponent/PetInfoCard";

const PetInfo = () => {
  return (
    <>
      <Wrapper>
        <Header title="반려견 정보" />
        <PetInfoCard></PetInfoCard>
      </Wrapper>
    </>
  );
};

export default PetInfo;
