import {
  InfoBox,
  MyInfo,
  Wrapper,
  ProfileImg,
  ProfileMyPageSVG,
  InPutBox,
  CompleteBtn,
  PictureImg,
  PictureMyPageSVG,
  Editbtn,
  BtnBox,
} from "./Styled";
import Header from "./header/Header";
import InputHolder from "../../components/myPageComponent/InputHolder";
import React, { useState } from "react";

const PetInfo = () => {
  const handlePetEditClick = () => {
    navigate("/MyPageEdit"); // /mypageedit 경로로 이동
  };

  return (
    <>
      <Header title="프로필 수정" />
      <Wrapper>
        <MyInfo>
          <ProfileImg>
            <ProfileMyPageSVG />
          </ProfileImg>
          <InfoBox>황민영</InfoBox>
          <Editbtn>
            <PictureImg>
              <PictureMyPageSVG />
            </PictureImg>
            프로필 사진 등록하기
          </Editbtn>
        </MyInfo>
      </Wrapper>
    </>
  );
};

export default PetInfo;
