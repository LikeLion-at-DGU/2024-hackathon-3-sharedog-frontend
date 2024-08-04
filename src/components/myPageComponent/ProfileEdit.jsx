// Styled.js 파일에서
import styled, { css } from "styled-components";
import EditMyPageSVG from "../../assets/icons/editMyPage.svg?react"; // SVG 파일 가져오기
import ProfileMyPageSVG from "../../assets/icons/profileMyPage.svg?react"; // SVG 파일 가져오기
import PictureMyPageSVG from "../../assets/icons/pictureMyPage.svg?react"; // SVG 파일 가져오기
import { useNavigate } from "react-router-dom"; // useNavigate 훅 가져오기
import React, { useState } from "react";

export const Wrapper = styled.div`
  display: flex;
  align-items: center; /* 수평 중앙 정렬 */
  flex-direction: column; /* 요소들을 수직 정렬 */
  width: 100%;
  font-size: 20px;
  font-family: SUIT, sans-serif;
  font-weight: 800;
  padding-top: 10px; /* 상단 여백 추가 */
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
  line-height: 160%; /* 28.8px */
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
  width: 70px; /* 고정된 크기로 설정 */
  height: 70px; /* 고정된 크기로 설정 */
  padding: 15.058px 15.83px;
  border-radius: 50%;
  flex-shrink: 0;
  background: #eaeaec;

  background-image: ${({ imageUrl }) =>
    imageUrl ? `url(${imageUrl})` : "none"};
  background-size: cover;
  background-position: center;
  overflow: hidden; /* 이미지가 요소의 경계를 넘어가지 않도록 */
`;

export const PictureImg = styled.div`
  width: 20px;
  height: 15px;
  flex-shrink: 0;
`;

const ProfileMy = () => {
  const navigate = useNavigate(); // useNavigate 훅 초기화

  const [uploadedImage, setUploadedImage] = useState(null);
  const [image, setImage] = useState(null);

  const onChangeImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const imageUrl = URL.createObjectURL(file);
      setUploadedImage(imageUrl);
    }
  };
  return (
    <>
      <Wrapper>
        <ProfileContainer>
          <ProfileImg
            style={{
              backgroundImage: uploadedImage ? `url(${uploadedImage})` : "none",
            }}
          >
            {!uploadedImage && <ProfileMyPageSVG />}
          </ProfileImg>
          황민영
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
          />
        </EditBtn>
      </Wrapper>
    </>
  );
};

export default ProfileMy;
export { EditMyPageSVG, ProfileMyPageSVG, PictureMyPageSVG };
