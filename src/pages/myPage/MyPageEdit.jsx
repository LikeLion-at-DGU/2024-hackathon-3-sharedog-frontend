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

const MyPageEdit = () => {
  const [nickname, setNickname] = useState("");
  const [phone, setPhone] = useState("");

  const isComplete = nickname !== "" && phone !== "";

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
        <InPutBox>
          <InputHolder
            title={"닉네임"}
            inputtext={"닉네임을 입력해 주세요."}
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
          <InputHolder
            title={"전화번호"}
            inputtext={"전화번호를 입력해 주세요."}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <BtnBox>
            <CompleteBtn
              disabled={!isComplete}
              data-active={isComplete ? "true" : undefined}
            >
              완료
            </CompleteBtn>
          </BtnBox>
        </InPutBox>
      </Wrapper>
    </>
  );
};

export default MyPageEdit;
