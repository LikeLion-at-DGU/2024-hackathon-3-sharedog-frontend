import { Wrapper, InPutBox, CompleteBtn } from "./Styled";
import Header from "./header/Header";
import InputHolder from "../../components/myPageComponent/InputHolder";
import InputDropDown from "../../components/myPageComponent/InputDropDown";
import Select from "../../components/myPageComponent/Select";
import { useNavigate } from "react-router-dom";
import ProfileEdit from "../../components/myPageComponent/ProfileEdit";
import { API } from "../../api";
import React, { useState, useEffect } from "react";

const PetRegister = () => {
  const navigate = useNavigate();

  const [gender, setGender] = useState("");
  const [dogname, setDogname] = useState("");
  const [dog_age, setDogAge] = useState("");
  const [dog_weight, setDogWeight] = useState("");
  const [dog_blood, setDogBlood] = useState("");
  const [isComplete, setIsComplete] = useState(false); // 추가된 부분

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
    setGender(newGender);
  };

  const isCompleteCheck = () => {
    return (
      dogname.trim() !== "" &&
      gender.trim() !== "" &&
      dog_age.trim() !== "" &&
      dog_weight.trim() !== "" &&
      dog_blood.trim() !== ""
    );
  };

  const postData = async () => {
    try {
      const response = await API.post("/api/users/dogprofiles", {
        dogname,
        gender,
        dog_age,
        dog_weight,
        dog_blood,
      });
      console.log("서버 응답 데이터:", response.data);
      // 요청에 사용된 데이터 로그
      console.log("전송한 데이터:", {
        dogname,
        gender,
        dog_age,
        dog_weight,
        dog_blood,
      });
      navigate("/petinfo");
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
    if (isCompleteCheck()) {
      postData();
    }
  };

  return (
    <>
      <Header title="반려견 정보 등록하기" />
      <Wrapper>
        <ProfileEdit />
        <InPutBox>
          <InputHolder
            title={"반려견 이름"}
            inputtext={"반려견 이름을 입력해 주세요."}
            value={dogname}
            onChange={(e) => setDogname(e.target.value)}
          />
          <Select
            title={"반려견 성별"}
            value={gender}
            onChange={handleGenderChange}
          />
          <InputHolder
            title={"반려견 나이"}
            inputtext={"반려견 나이를 입력해 주세요."}
            value={dog_age}
            onChange={(e) => setDogAge(e.target.value)}
          />
          <InputHolder
            title={"반려견 몸무게"}
            inputtext={"반려견 몸무게를 입력해 주세요."}
            value={dog_weight}
            onChange={(e) => setDogWeight(e.target.value)}
          />
          <InputDropDown
            title={"반려견 혈액형"}
            inputtext={"반려견 혈액형을 선택해 주세요."}
            options={bloodOptions}
            value={dog_blood}
            onChange={(e) => setDogBlood(e.target.value)}
          />
          <CompleteBtn
            style={{
              borderRadius: "30px",
              background: isComplete
                ? "var(--Red-Red04, #FF6969)"
                : "rgba(156, 156, 161, 0.5)",
              color: "#fff",
            }}
            disabled={!isComplete}
            onClick={handleCompleteClick}
          >
            완료
          </CompleteBtn>
        </InPutBox>
      </Wrapper>
    </>
  );
};

export default PetRegister;
