import { Wrapper, InPutBox, CompleteBtn, BtnBox, AlertBox } from "./Styled";
import Header from "./header/Header";
import InputHolder from "../../components/myPageComponent/InputHolder";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProfileEdit from "../../components/myPageComponent/ProfileEdit";
import { API } from "../../api"; // API import
const MyPageEdit = () => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [profileImageUrl, setProfileImageUrl] = useState(null);
  const [isComplete, setIsComplete] = useState(false);
  const [id, setId] = useState(null); // id 상태 추가

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await API.get("/api/users/myprofile");
        const data = response.data;
        console.log("프로필 데이터:", response.data);
        setNickname(data.nickname);
        setProfileImageUrl(data.profileImage); // assuming profileImage URL is returned
        setId(data.id); // id 값을 상태로 저장
      } catch (error) {
        console.error("에러:", error);
      }
    };
    fetchData();
  }, []);

  const handleImageChange = (file) => {
    setProfileImage(file); // 파일 객체 자체를 상태로 저장
    setProfileImageUrl(URL.createObjectURL(file)); // 미리보기용 URL 설정
  };

  const checkIsComplete = () => {
    return nickname && nickname.trim() !== "";
  };

  const postData = async () => {
    const formData = new FormData();
    formData.append("nickname", nickname);
    if (profileImage) {
      formData.append("profileImage", profileImage);
    }

    try {
      console.log("보내는 데이터:", {
        nickname,
        profileImage,
      });

      const response = await API.put(`/api/users/myprofile/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("서버 응답 데이터:", response.data);
      navigate("/mypagemain");
    } catch (error) {
      console.log("네트워크 오류:", error);
    }
  };

  useEffect(() => {
    setIsComplete(checkIsComplete());
  }, [nickname, profileImage]);

  const handleCompleteClick = () => {
    if (isComplete) {
      postData();
    }
  };

  return (
    <>
      <Header title="프로필 수정" />
      <Wrapper>
        <ProfileEdit
          profileImage={profileImageUrl}
          onImageChange={handleImageChange}
        />
        <InPutBox>
          <InputHolder
            title={"닉네임"}
            inputtext={"닉네임을 입력해 주세요."}
            value={nickname}
            onChange={(e) => {
              setNickname(e.target.value);
            }}
          />
          <BtnBox>
            <CompleteBtn
              style={{
                borderRadius: "30px",
                background: isComplete ? "#FF6969" : "rgba(156, 156, 161, 0.5)",
                color: "#fff",
              }}
              disabled={!isComplete}
              onClick={handleCompleteClick}
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
