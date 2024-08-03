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
import { useNavigate } from "react-router-dom";
import ProfileEdit from "../../components/myPageComponent/ProfileEdit";

const MyPageEdit = () => {
  const navigate = useNavigate();

  // Editbtn 클릭 핸들러
  const handleInfoClick = () => {
    if (isComplete()) {
      navigate("/mypagemain"); // 경로 확인
    }
  };

  const [nickname, setNickname] = useState("");
  const [phone, setPhone] = useState("");
  // const [uploadedImage, setUploadedImage] = useState(null);
  // const [image, setImage] = useState(null);

  const isComplete = () => nickname !== "" && phone !== "";

  // const onChangeImage = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     setImage(file);
  //     const imageUrl = URL.createObjectURL(file);
  //     setUploadedImage(imageUrl);
  //   }
  // };

  return (
    <>
      <Header title="프로필 수정" />
      <Wrapper>
        <ProfileEdit></ProfileEdit>
        {/* <MyInfo>
          <ProfileImg
            style={{
              backgroundImage: uploadedImage ? `url(${uploadedImage})` : "none",
            }}
          >
            {!uploadedImage && <ProfileMyPageSVG />}
          </ProfileImg>
          <InfoBox>루피</InfoBox>
          <Editbtn>
            <PictureImg>
              <PictureMyPageSVG />
            </PictureImg>
            <label htmlFor="imageUpload" style={{ cursor: "pointer" }}>
              프로필 사진 등록하기
            </label>
            <input
              type="file"
              id="imageUpload"
              style={{ display: "none" }}
              onChange={onChangeImage}
            />
          </Editbtn>
        </MyInfo> */}
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
              onClick={handleInfoClick}
              disabled={!isComplete()} // `isComplete`를 함수로 호출
              data-active={isComplete() ? "true" : undefined}
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
