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
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProfileEdit from "../../components/myPageComponent/ProfileEdit";
import { API } from "../../api"; // API import

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

  const isComplete = () => nickname !== "" && phone !== "";

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

  return (
    <>
      <Header title="프로필 수정" />
      <Wrapper>
        <ProfileEdit></ProfileEdit>
        <InPutBox>
          <InputHolder
            title={"닉네임"}
            inputtext={"닉네임을 입력해 주세요."}
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
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
