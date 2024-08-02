import {
  MyInfo,
  Wrapper,
  ProfileImg,
  ProfileMyPageSVG,
  InPutBox,
  CompleteBtn,
  Field,
  InputField,
  PictureImg,
  PictureMyPageSVG,
  Editbtn,
} from "./Styled";
import Header from "./header/Header";
import InputHolder from "../../components/myPageComponent/InputHolder";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { API } from '../../api'; 

const SignUp = () => {
  const navigate = useNavigate(); 

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [image, setImage] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);

  const postData = async () => {
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('phone', phone);
      formData.append('email', email);
      if (image) {
        formData.append('profileImage', image);
      }

      const response = await API.post('/api/accounts/profiles', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('서버 응답 데이터:', response.data);

      if (response.data) {
        const { id, name, phone, email, image } = response.data;
        console.log('가입된 회원 정보:', { id, name, phone, email, image });
        navigate("/SignUpPet"); // 회원 가입 완료 후 다음 페이지로 이동
      }
    } catch (error) {
      console.log('네트워크 오류:', error.response ? error.response.data : error.message);
    }
  };

  useEffect(() => {
    if (name && phone && email) {
      setIsComplete(true);
    } else {
      setIsComplete(false);
    }
  }, [name, phone, email]);

  const handleCompleteClick = () => {
    if (isComplete) {
      postData(); 
    }
  };

  const onChangeImage = e => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const imageUrl = URL.createObjectURL(file);
      setUploadedImage(imageUrl); // 임시 URL 설정
    }
  };

  return (
    <>
      <Header title="회원가입" progress={50} />
      <Wrapper>
        <Field>
          <InputField>
            <MyInfo>
              <ProfileImg style={{ backgroundImage: uploadedImage ? `url(${uploadedImage})` : 'none' }}>
                {!uploadedImage && <ProfileMyPageSVG />}
              </ProfileImg>
              <Editbtn>
                <PictureImg>
                  <PictureMyPageSVG />
                </PictureImg>
                <label htmlFor="imageUpload" style={{ cursor: 'pointer' }}>
                  프로필 사진 등록하기
                </label>
                <input
                  type="file"
                  id="imageUpload"
                  style={{ display: 'none' }}
                  onChange={onChangeImage}
                />
              </Editbtn>
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
            </InPutBox>
          </InputField>
          <CompleteBtn
            onClick={handleCompleteClick}
            style={{ backgroundColor: isComplete ? '#FF6969' : 'rgba(156, 156, 161, 0.50)' }}
          >
            완료
          </CompleteBtn>
        </Field>
      </Wrapper>
    </>
  );
};

export default SignUp;
