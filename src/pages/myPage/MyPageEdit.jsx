import { Wrapper, InPutBox, CompleteBtn, BtnBox } from "./Styled";
import Header from "./header/Header";
import InputHolder from "../../components/myPageComponent/InputHolder";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProfileEdit from "../../components/myPageComponent/ProfileEdit";
import { API } from "../../api";

const MyPageEdit = () => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [profileImageUrl, setProfileImageUrl] = useState(null);
  const [isComplete, setIsComplete] = useState(false);
  const [id, setId] = useState(""); // 유저 ID 상태 추가

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await API.get("/api/users/myprofile/${id}");
        const data = response.data;
        console.log("프로필 데이터:", data);
        setNickname(data.nickname);
        setProfileImageUrl(data.profile_image);
        setId(data.id);
      } catch (error) {
        console.error("에러:", error);
      }
    };
    fetchData();
  }, []);

  const handleImageChange = (file) => {
    setProfileImage(file);
    setProfileImageUrl(URL.createObjectURL(file));
  };

  const checkIsComplete = () => {
    return nickname && nickname.trim() !== "";
  };

  const postData = async () => {
    const formData = new FormData();
    formData.append("nickname", nickname);
    if (profileImage) {
      formData.append("profile_image", profileImage);
    }

    try {
      console.log("보내는 데이터:", {
        nickname,
        profileImage,
      });

      const response = await API.post(`/api/users/myprofile`, formData, {
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
