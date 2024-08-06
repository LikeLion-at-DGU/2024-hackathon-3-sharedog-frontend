import React from "react";
import styled from "styled-components";
import EditMyPageSVG from "../../assets/icons/editMyPage.svg?react";
import { useNavigate } from "react-router-dom";

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
  padding: 15.058px 15.83px;
  border-radius: 32.047px;
  border-style: none;
  background: #eaeaec;
  width: 60px;
  height: 60px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
`;

const ProfileMy = ({ name, profileImage }) => {
  const navigate = useNavigate();
  const imageUrl = profileImage.replace(
    `${import.meta.env.VITE_API_URL}/media/http%3A/`,
    "http://"
  );

  const handleEditClick = () => {
    navigate("/MyPageEdit", {
      state: { profileImage: imageUrl }, // 프로필 이미지를 상태로 전달
    });
  };

  return (
    <Wrapper>
      <ProfileContainer>
        <ProfileImg src={imageUrl} />
        {name}
      </ProfileContainer>
      <EditBtn onClick={handleEditClick}>
        <EditMyPageSVG />
        프로필 수정
      </EditBtn>
    </Wrapper>
  );
};

export default ProfileMy;
