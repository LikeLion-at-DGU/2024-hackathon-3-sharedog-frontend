import {
  MyInfo,
  Wrapper,
  ProfileImg,
  ProfileMyPageSVG,
  InPutBox,
  CompleteBtn,
} from "./Styled";
import Header from "./header/Header";
import InputHolder from "../../components/myPageComponent/InputHolder";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate 훅 가져오기
import { API } from '../../api'; 

const SignUp = () => {
  const navigate = useNavigate(); // useNavigate 훅 초기화

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  const postData = async () => {
    try {
      const response = await API.post('/api/accounts/profiles', {
        name, 
        phone,
        email
      });
      alert('Post 성공 :)');
      console.log('서버 응답 데이터:', response.data); // 서버 응답 데이터 콘솔에 찍기
    } catch (error) {
      alert('Post 실패 :(');
      console.log('네트워크 오류:', error); // 네트워크 오류 콘솔에 찍기
    }
  };

  useEffect(() => {
    // 모든 필드가 채워졌는지 확인
    if (name && phone && email) {
      setIsComplete(true);
    } else {
      setIsComplete(false);
    }
  }, [name, phone, email]);

  const handleCompleteClick = () => {
    if (isComplete) {
      postData(); // 데이터 전송
      navigate("/SignUpPet"); // /SignUpPet 경로로 이동
    }
  };

  return (
    <>
      <Header title="회원가입" />
      <Wrapper>
        <MyInfo>
          <ProfileImg>
            <ProfileMyPageSVG />
          </ProfileImg>
        </MyInfo>
        <InPutBox>
          <InputHolder
            title={"견주님 성함"}
            inputtext={"견주님 성함을 입력해주세요"}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <InputHolder
            title={"전화번호"}
            inputtext={"전화번호를 입력해주세요"}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          /> 
          <InputHolder
            title={"이메일"}
            inputtext={"이메일 주소를 입력해주세요"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <CompleteBtn
            onClick={handleCompleteClick}
            style={{ backgroundColor: isComplete ? '#FF6969' : 'rgba(156, 156, 161, 0.50)' }}
          >
            완료
          </CompleteBtn>
        </InPutBox>
      </Wrapper>
    </>
  );
};

export default SignUp;
