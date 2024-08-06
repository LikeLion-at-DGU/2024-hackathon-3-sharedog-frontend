import { Wrap, Box, Logo, Slogan } from "./Styled"; // 스타일 컴포넌트 임포트
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../../api"; // API 호출을 위한 axios 임포트

const SignUpSplash = () => {
  const navigate = useNavigate(); // 페이지 이동을 위한 useNavigate 훅 사용

  // 프로필 상태를 정의 (초기값은 nickname 빈 문자열)
  const [profile, setProfile] = useState({ nickname: "" });

  // API에서 데이터 가져오기
  const fetchData = async () => {
    try {
      const response = await API.get("/api/users/myprofile");
      console.log("되나데이터:", response.data);
      const profileData = response.data[0]; // 배열의 첫 번째 요소를 사용
      setProfile(profileData); // 가져온 데이터로 프로필 상태 업데이트
    } catch (error) {
      console.log("에러:", error);
    }
  };

  // 컴포넌트가 마운트될 때 fetchData 호출
  useEffect(() => {
    fetchData();
  }, []);

  // 2초 후에 홈 페이지로 이동
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 2000); // 2초 후에 /home으로 이동
    return () => clearTimeout(timer); // 컴포넌트가 언마운트될 때 타이머 정리
  }, [navigate]);

  return (
    <Wrap>
      <Box>
        <Slogan>
          <p>{profile.nickname}</p>님,
          <br />
          <br />
          회원가입을 축하드립니다!
        </Slogan>
        <br />
        <Logo />
      </Box>
    </Wrap>
  );
};

export default SignUpSplash;
