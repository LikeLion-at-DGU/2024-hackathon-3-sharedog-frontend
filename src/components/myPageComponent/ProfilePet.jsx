import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import EditMyPageSVG from "../../assets/icons/editMyPage.svg?react";
import ProfileMyPageSVG from "../../assets/icons/profileMyPage.svg?react";
import PictureMyPageSVG from "../../assets/icons/pictureMyPage.svg?react";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  font-size: 20px;
  font-family: SUIT, sans-serif;
  font-weight: 800;
  padding-top: 10px;
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 16vh;
  border-radius: 10px 10px 0px 0px;
  border: solid 1px rgba(234, 234, 234, 0.8);
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  color: var(--Grayscale-Gray700, #222b39);
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%;
  letter-spacing: -0.36px;
`;

export const EditBtn = styled.button`
  display: flex;
  width: 80%;
  height: 6vh;
  margin-bottom: 20px;
  border-radius: 0px 0px 10px 10px;
  border: solid 1px rgba(234, 234, 234, 0.8);
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 0px 0px 12px 12px;
  background: rgba(255, 105, 105, 0.15);
  color: var(--Red-Red04, #ff6969);
  font-family: SUIT;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.24px;
`;

export const ProfileImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  padding: 15.058px 15.83px;
  border-radius: 50%;
  flex-shrink: 0;
  background: #eaeaec;
  background-image: ${({ imageUrl }) =>
    imageUrl ? `url(${imageUrl})` : "none"};
  background-size: cover;
  background-position: center;
  overflow: hidden;
`;

export const PictureImg = styled.div`
  width: 20px;
  height: 15px;
  flex-shrink: 0;
`;

const ProfilePet = ({ dog_image, onImageChange }) => {
  const [uploadedImage, setUploadedImage] = useState(dog_image); // props로 받은 이미지 설정

  const onChangeImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUploadedImage(imageUrl);
      onImageChange(file); // 부모 컴포넌트로 파일 전달
    }
  };

  useEffect(() => {
    setUploadedImage(dog_image);
  }, [dog_image]);

  return (
    <Wrapper>
      <ProfileContainer>
        <ProfileImg imageUrl={uploadedImage}>
          {!uploadedImage && <ProfileMyPageSVG />}
        </ProfileImg>
      </ProfileContainer>
      <EditBtn>
        <PictureMyPageSVG />
        <label htmlFor="imageUpload" style={{ cursor: "pointer" }}>
          프로필 사진 수정하기
        </label>
        <input
          type="file"
          id="imageUpload"
          style={{ display: "none" }}
          onChange={onChangeImage}
          accept="image/*"
        />
      </EditBtn>
    </Wrapper>
  );
};

export default ProfilePet;
export { EditMyPageSVG, ProfileMyPageSVG, PictureMyPageSVG };
