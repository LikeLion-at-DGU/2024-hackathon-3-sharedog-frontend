import {
  Wrapper,
  InPut,
  CompleteBtn,
  CautionSVG,
  CautionBox,
  CautionTitle,
  CautionField,
  Field,
  InputField,
} from "./Styled";
import Header from "./header/Header";
import InputHolder from "../../components/myPageComponent/InputHolder";
import InputDropDown from "../../components/myPageComponent/InputDropDown";
import Select from "../../components/myPageComponent/Select";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../../api";

const SignUpPet = () => {
  const navigate = useNavigate();

  const [dogname, setDogname] = useState("");
  const [gender, setGender] = useState("");
  const [dog_age, setDog_Age] = useState("");
  const [dog_weight, setDogWeight] = useState("");
  const [dog_blood, setDogBlood] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  const bloodOptions = [
    { label: "DEA 1-", value: "DEA 1-" },
    { label: "DEA 1.1", value: "DEA 1.1" },
    { label: "DEA 1.2", value: "DEA 1.2" },
    { label: "DEA 3", value: "DEA 3" },
    { label: "DEA 4", value: "DEA 4" },
    { label: "DEA 5", value: "DEA 5" },
    { label: "DEA 7", value: "DEA 7" },
  ];

  const postData = async () => {
    try {
      const response = await API.post("/api/accounts/dogprofiles", {
        dogname,
        gender,
        dog_age,
        dog_weight,
        dog_blood,
      });
      console.log("서버 응답 데이터:", response.data);
    } catch (error) {
      console.log("네트워크 오류:", error);
    }
  };

  useEffect(() => {
    if (dogname && gender && dog_age && dog_weight && dog_blood) {
      setIsComplete(true);
    } else {
      setIsComplete(false);
    }
  }, [dogname, gender, dog_age, dog_weight, dog_blood]);

  const handleCompleteClick = () => {
    if (isComplete) {
      postData();
      navigate("/signupsplash");
    }
  };

  return (
    <>
      <Header title="회원가입" progress={100} /> {/* Progress 100% */}
      <Wrapper>
        <Field>
          <InputField>
            <CautionBox>
              <CautionField>
                <CautionSVG />
                <CautionTitle>
                  <h1>대표로 등록할 반려견 정보를 입력해주세요.</h1>
                  <p>
                    나중에 마이페이지에서 추가로 반려견 정보를 등록할 수 있어요!
                  </p>
                </CautionTitle>
              </CautionField>
            </CautionBox>
            <InPut>
              <InputHolder
                title={"반려견 이름"}
                inputtext={"반려견 이름을 입력해 주세요."}
                value={dogname}
                onChange={(e) => setDogname(e.target.value)}
                alerttext={"*필수 입력"}
              />
              <Select
                title={"반려견 성별"}
                $isSelected={true}
                value={gender}
                onChange={(value) => setGender(value)}
                alerttext={"*필수 선택"}
              />
              <InputHolder
                title={"반려견 나이"}
                inputtext={"반려견 나이를 입력해 주세요."}
                value={dog_age}
                onChange={(e) => setDog_Age(e.target.value)}
                alerttext={"*필수 입력 | 숫자만 입력 가능합니다."}
              />
              <InputHolder
                title={"반려견 몸무게"}
                inputtext={"반려견 몸무게를 입력해 주세요."}
                value={dog_weight}
                onChange={(e) => setDogWeight(e.target.value)}
                alerttext={"*필수 입력 | 숫자만 입력 가능합니다."}
              />
              <InputDropDown
                title={"반려견 혈액형"}
                inputtext={"반려견 혈액형을 선택해 주세요."}
                value={dog_blood}
                options={bloodOptions}
                onChange={(e) => setDogBlood(e.target.value)}
                alerttext={"*필수 선택"}
              />
            </InPut>
          </InputField>
          <CompleteBtn
            onClick={handleCompleteClick}
            style={{
              backgroundColor: isComplete
                ? "#FF6969"
                : "rgba(156, 156, 161, 0.50)",
            }}
          >
            완료
          </CompleteBtn>
        </Field>
      </Wrapper>
    </>
  );
};

export default SignUpPet;
