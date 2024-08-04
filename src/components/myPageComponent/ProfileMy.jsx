import React, { useEffect, useState } from "react";
import styled from "styled-components";
import EditMyPageSVG from "../../assets/icons/editMyPage.svg?react";
import ProfileMyPageSVG from "../../assets/icons/profileMyPage.svg?react";
import { useNavigate } from "react-router-dom";
import { API } from "../../api"; // API import

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
`;

const ProfileMy = () => {
  const [profiles, setProfiles] = useState([]);

  const fetchData = async () => {
    try {
      const response = await API.get("/api/users/myprofile");
      console.log("진우데이터:", response.data);
      setProfiles(response.data); // 데이터 배열로 설정
    } catch (error) {
      console.error("에러입니당:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate("/MyPageEdit");
  };

  return (
    <Wrapper>
      {profiles.map((profile, index) => (
        <ProfileContainer key={index}>
          <ProfileImg>
            <ProfileMyPageSVG />
          </ProfileImg>
          {profile.nickname}
        </ProfileContainer>
      ))}
      <EditBtn onClick={handleEditClick}>
        <EditMyPageSVG /> 프로필 수정
      </EditBtn>
    </Wrapper>
  );
};

export default ProfileMy;
