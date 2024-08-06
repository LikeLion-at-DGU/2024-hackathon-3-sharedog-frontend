import React, { useState, useEffect } from "react";
import {
  Wrapper,
  InPutBox,
  CompleteBtn,
  RadioGroup,
  RadioLabel,
  RadioButton,
  RadioBox,
  AlertText,
} from "./Styled";
import Header from "./header/Header";
import InputHolder from "../../components/myPageComponent/InputHolder";
import InputDropDown from "../../components/myPageComponent/InputDropDown";
import Select from "../../components/myPageComponent/Select";
import { useNavigate, useParams } from "react-router-dom";
import ProfilePet from "../../components/myPageComponent/ProfilePet";
import { API } from "../../api";

const PetEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // URL 파라미터에서 id 가져오기

  const [gender, setGender] = useState("");
  const [dogname, setDogname] = useState("");
  const [dog_age, setDogAge] = useState("");
  const [dog_weight, setDogWeight] = useState("");
  const [dog_blood, setDogBlood] = useState("");
  const [dog_image, setDogImage] = useState(null);
  const [dog_image_url, setDogImageUrl] = useState(null); // 미리보기용 이미지 URL
  const [kingdog, setKingdog] = useState(false); // kingdog을 boolean으로 설정
  const [isComplete, setIsComplete] = useState(false);
  const [dogUnique, setDogUnique] = useState(false); // dog_unique 상태 추가

  useEffect(() => {
    // id를 사용하여 서버에서 반려견 정보를 가져와서 상태를 업데이트
    const fetchData = async () => {
      try {
        const response = await API.get(`/api/users/dogprofiles/${id}`);
        const data = response.data;
        setDogname(data.dogname);
        setGender(data.gender);
        setDogAge(data.dog_age);
        setDogWeight(data.dog_weight);
        setDogBlood(data.dog_blood);
        setKingdog(data.kingdog);
        setDogImageUrl(data.dog_image); // 서버에서 받은 이미지 URL 설정
        setDogUnique(data.dog_unique); // dog_unique 상태 업데이트
      } catch (error) {
        console.error("데이터 가져오기 오류:", error);
      }
    };
    fetchData();
  }, [id]);

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

  const handleImageChange = (file) => {
    setDogImage(file); // 파일 객체 자체를 상태로 저장
    setDogImageUrl(URL.createObjectURL(file)); // 미리보기용 URL 설정
  };

  const handleKingdogChange = (e) => {
    setKingdog(e.target.value === "Yes");
  };

  const isNumeric = (value) => {
    return !isNaN(value) && value !== null && value !== "";
  };

  const isCompleteCheck = () => {
    return (
      dogname.trim() !== "" && // dogname이 빈 문자열이 아닌지 확인
      gender.trim() !== "" && // gender가 빈 문자열이 아닌지 확인
      (!dog_age || isNumeric(dog_age)) && // dog_age가 비어있거나 숫자인지 확인
      (!dog_weight || isNumeric(dog_weight)) && // dog_weight가 비어있거나 숫자인지 확인
      dog_blood.trim() !== "" && // dog_blood가 빈 문자열이 아닌지 확인
      typeof kingdog === "boolean" // kingdog가 불리언인지 확인
    );
  };

  const postData = async () => {
    const formData = new FormData();
    formData.append("dogname", dogname);
    formData.append("gender", gender);
    formData.append("dog_age", dog_age);
    formData.append("dog_weight", dog_weight);
    formData.append("dog_blood", dog_blood);
    formData.append("kingdog", kingdog);
    if (dog_image) {
      formData.append("dog_image", dog_image);
    }

    try {
      const response = await API.put(
        // PUT 요청으로 변경
        `/api/users/dogprofiles/${id}`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      console.log("서버 응답 데이터:", response.data);
      console.log("전송한 데이터:", {
        dogname,
        gender,
        dog_age,
        dog_weight,
        dog_blood,
        kingdog,
        dog_image,
      });
      navigate("/petinfo");
    } catch (error) {
      console.log("네트워크 오류:", error);
    }
  };

  useEffect(() => {
    setIsComplete(isCompleteCheck());
  }, [dogname, gender, dog_age, dog_weight, dog_blood, kingdog, dog_image]);

  const handleCompleteClick = () => {
    if (isComplete) {
      postData();
    }
  };

  return (
    <>
      <Header title="반려견 정보 수정하기" />
      <Wrapper>
        <ProfilePet
          dog_image={dog_image_url}
          onImageChange={handleImageChange}
        />
        <InPutBox>
          <RadioGroup>
            대표 프로필 지정
            <AlertText>
              {
                "*필수 선택 | 등록된 강아지가 1마리일 경우 자동으로 대표 프로필로 등록되며 해제가 불가합니다."
              }
            </AlertText>
            <RadioBox>
              <RadioLabel>
                <RadioButton
                  name="profile"
                  value="Yes"
                  checked={kingdog === true}
                  onChange={handleKingdogChange}
                  disabled={dogUnique} // dogUnique가 true이면 비활성화
                />
                지정할래요
              </RadioLabel>
              <RadioLabel>
                <RadioButton
                  name="profile"
                  value="No"
                  checked={kingdog === false}
                  onChange={handleKingdogChange}
                  disabled={dogUnique} // dogUnique가 true이면 비활성화
                />
                괜찮아요
              </RadioLabel>
            </RadioBox>
          </RadioGroup>
          <InputHolder
            title={"반려견 이름"}
            inputtext={"반려견 이름을 입력해 주세요."}
            value={dogname}
            onChange={(e) => setDogname(e.target.value)}
            alerttext={"*필수 입력"}
          />
          <Select
            title={"반려견 성별"}
            value={gender}
            onChange={handleGenderChange}
            alerttext={"*필수 선택"}
          />
          <InputHolder
            title={"반려견 나이"}
            inputtext={"반려견 나이를 입력해 주세요."}
            value={dog_age}
            alerttext={"*필수 입력 | 숫자만 입력 가능합니다."}
            onChange={(e) => setDogAge(e.target.value.replace(/[^0-9]/g, ""))}
          />
          <InputHolder
            title={"반려견 몸무게"}
            inputtext={"반려견 몸무게를 입력해 주세요."}
            value={dog_weight}
            alerttext={"*필수 입력 | 숫자만 입력 가능합니다."}
            onChange={(e) =>
              setDogWeight(e.target.value.replace(/[^0-9]/g, ""))
            }
          />
          <InputDropDown
            title={"반려견 혈액형"}
            inputtext={"반려견 혈액형을 선택해 주세요."}
            options={bloodOptions}
            value={dog_blood}
            onChange={(e) => setDogBlood(e.target.value)}
            alerttext={"*필수 선택"}
          />
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
        </InPutBox>
      </Wrapper>
    </>
  );
};

export default PetEdit;
