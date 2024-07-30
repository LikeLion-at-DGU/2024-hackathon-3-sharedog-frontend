import {
  InfoBox,
  MyInfo,
  Wrapper,
  ProfileImg,
  ProfileMyPageSVG,
  InPutBox,
  CompleteBtn,
} from "./Styled";
import Header from "./header/Header";
import InputHolder from "../../components/myPage/InputHolder";
import InputDropDown from "../../components/myPage/InputDropDown";
import Select from "../../components/myPage/Select";
import React from "react";

const SignUpPet = () => {
  return (
    <>
      <Header title="프로필 수정" />
      <Wrapper>
        <MyInfo>
          <ProfileImg>
            <ProfileMyPageSVG />
          </ProfileImg>
          <InfoBox>황민영</InfoBox>
        </MyInfo>
        <InPutBox>
          <InputHolder
            title={"전화번호"}
            inputtext={"전화번호를 입력해 주세요."}
          />
          <InputHolder
            title={"반려견 이름"}
            inputtext={"반려견 이름을 입력해 주세요."}
          />
          <Select title={"반려견 성별"} $isSelected={true} />
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

export default SignUpPet;
