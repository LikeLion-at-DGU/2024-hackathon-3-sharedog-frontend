import React, { useState } from "react";
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
} from "./Styled";
import Header from "./header/Header";
import InputHolder from "../../components/myPageComponent/InputHolder";
import InputDropDown from "../../components/myPageComponent/InputDropDown";
import Select from "../../components/myPageComponent/Select";
import { useNavigate } from "react-router-dom";

const PetEdit = () => {
  const navigate = useNavigate();

  // Editbtn 클릭 핸들러
  const handleInfoClick = () => {
    if (isComplete()) {
      navigate("/petinfo"); // 경로 확인
    }
  };

  const [selectedGender, setSelectedGender] = useState("");
  const [image, setImage] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [petName, setPetName] = useState("");
  const [petAge, setPetAge] = useState("");
  const [petWeight, setPetWeight] = useState("");
  const [petBloodType, setPetBloodType] = useState("");

  const bloodOptions = [
    { label: "DEA 1-", value: "DEA 1-" },
    { label: "DEA 1.1", value: "DEA 1.1" },
    { label: "DEA 1.2", value: "DEA 1.2" },
    { label: "DEA 3", value: "DEA 3" },
    { label: "DEA 4", value: "DEA 4" },
    { label: "DEA 5", value: "DEA 5" },
    { label: "DEA 7", value: "DEA 7" },
  ];

  const handleGenderChange = (newGender) => {
    setSelectedGender(newGender);
  };

  const onChangeImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const imageUrl = URL.createObjectURL(file);
      setUploadedImage(imageUrl);
    }
  };

  const isComplete = () => {
    return (
      petName.trim() !== "" &&
      selectedGender.trim() !== "" &&
      petAge.trim() !== "" &&
      petWeight.trim() !== "" &&
      petBloodType.trim() !== ""
    );
  };

  return (
    <>
      <Header title="반려견 정보 수정하기" />
      <Wrapper>
        <MyInfo>
          <ProfileImg
            style={{
              backgroundImage: uploadedImage ? `url(${uploadedImage})` : "none",
            }}
          >
            {!uploadedImage && <ProfileMyPageSVG />}
          </ProfileImg>
          <InfoBox>멍멍이</InfoBox>
          <Editbtn>
            <PictureImg>
              <PictureMyPageSVG />
            </PictureImg>
            <label htmlFor="imageUpload" style={{ cursor: "pointer" }}>
              프로필 사진 등록하기
            </label>
            <input
              type="file"
              id="imageUpload"
              style={{ display: "none" }}
              onChange={onChangeImage}
            />
          </Editbtn>
        </MyInfo>
        <InPutBox>
          <InputHolder
            title={"반려견 이름"}
            inputtext={"반려견 이름을 입력해 주세요."}
            value={petName}
            onChange={(e) => setPetName(e.target.value)}
          />
          <Select
            title={"반려견 성별"}
            value={selectedGender}
            onChange={handleGenderChange}
          />
          <InputHolder
            title={"반려견 나이"}
            inputtext={"반려견 나이를 입력해 주세요."}
            value={petAge}
            onChange={(e) => setPetAge(e.target.value)}
          />
          <InputHolder
            title={"반려견 몸무게"}
            inputtext={"반려견 몸무게를 입력해 주세요."}
            value={petWeight}
            onChange={(e) => setPetWeight(e.target.value)}
          />
          <InputDropDown
            title={"반려견 혈액형"}
            inputtext={"반려견 혈액형을 선택해 주세요."}
            options={bloodOptions}
            value={petBloodType}
            onChange={(e) => setPetBloodType(e.target.value)}
          />
          <CompleteBtn
            style={{
              borderRadius: "30px",
              background: isComplete()
                ? "var(--Red-Red04, #FF6969)"
                : "rgba(156, 156, 161, 0.5)",
              color: "#fff",
            }}
            disabled={!isComplete()}
            onClick={handleInfoClick}
          >
            완료
          </CompleteBtn>
        </InPutBox>
      </Wrapper>
    </>
  );
};

export default PetEdit;
