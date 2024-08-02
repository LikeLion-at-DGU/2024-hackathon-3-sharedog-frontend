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
} from "./Styled";
import Header from "./header/Header";
import InputHolder from "../../components/myPageComponent/InputHolder";
import InputDropDown from "../../components/myPageComponent/InputDropDown";
import Select from "../../components/myPageComponent/Select";
import React, { useState } from "react";

const PetRegister = () => {
  // 선택된 성별을 상태로 관리
  const [selectedGender, setSelectedGender] = useState("");

  // 성별 변경 핸들러
  const handleGenderChange = (newGender) => {
    setSelectedGender(newGender);
  };

  return (
    <>
      <Header title="반려견 정보 등록하기" />
      <Wrapper>
        <MyInfo>
          <ProfileImg>
            <ProfileMyPageSVG />
          </ProfileImg>
          <InfoBox>멍멍이</InfoBox>
          <Editbtn>
            <PictureImg>
              <PictureMyPageSVG />
            </PictureImg>
            프로필 사진 등록하기
          </Editbtn>
        </MyInfo>
        <InPutBox>
          <InputHolder
            title={"반려견 이름"}
            inputtext={"반려견 이름을 입력해 주세요."}
          />
          <Select
            title={"반려견 성별"}
            value={selectedGender}
            onChange={handleGenderChange} // onChange 핸들러 추가
          />
          <InputDropDown
            title={"반려견 나이"}
            inputtext={"반려견 나이를 선택해 주세요."}
          />
          <InputHolder
            title={"반려견 몸무게"}
            inputtext={"반려견 몸무게를 입력해 주세요."}
          />
          <InputDropDown
            title={"반려견 혈액형"}
            inputtext={"반려견 혈액형을 선택해 주세요."}
          />
          <CompleteBtn>완료</CompleteBtn>
        </InPutBox>
      </Wrapper>
    </>
  );
};

export default PetRegister;
