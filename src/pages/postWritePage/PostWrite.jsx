import React, { useState, useEffect } from "react";
import {
  FormContainer,
  Input,
  TextArea,
  Wrapper,
  DropDownBox,
  Line,
  Text,
  ImgBox,
  ImgPlusBtn,
  PictureMyPageSVG,
  PostBtn,
} from "./Styled";
import Header from "../../pages/myPage/header/Header";
import PostDropdown from "./PostDropDown";
import { API } from "../../api";
import { useNavigate } from "react-router-dom";

const PostWrite = () => {
  const [region, setRegion] = useState("");
  const [blood, setBloodType] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [uploadedImages, setUploadedImages] = useState([]); // 여러 이미지를 저장하기 위한 상태
  const [images, setImages] = useState([]);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false); // 버튼 활성화 상태
  const navigate = useNavigate(); // 네비게이션 훅 사용

  useEffect(() => {
    // 제목과 내용이 모두 입력되었는지 확인
    if (title.trim() && content.trim()) {
      setIsButtonEnabled(true);
    } else {
      setIsButtonEnabled(false);
    }
  }, [title, content]);

  const onChangeImage = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + uploadedImages.length > 3) {
      alert("이미지는 최대 3장까지 업로드할 수 있습니다.");
      return;
    }
    const newImages = files.map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));
    setImages((prevImages) => [...prevImages, ...files]);
    setUploadedImages((prevImages) => [...prevImages, ...newImages]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // 필드 검증
    if (!title.trim() || !content.trim() || !region || !blood) {
      alert("모든 필드를 올바르게 입력해주세요.");
      return;
    }

    const postData = {
      region,
      blood,
      title,
      content,
      // 이미지 추가
      // image: images,  // 필요시 추가
    };

    console.log("보내는 데이터:", postData); // 보낸 데이터 로그

    try {
      const response = await API.post("/api/community/posts", postData);
      if (response.status === 201) {
        // POST 요청 성공 상태 코드 확인
        alert("Post 성공 :)");
        navigate("/"); // 홈페이지로 이동
      } else {
        alert("Post 실패 :(");
        console.log("게시글 등록 실패:", response.data);
      }
    } catch (error) {
      alert("Post 실패 :(");
      console.error(
        "게시글 등록 실패:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <>
      <Wrapper>
        <Header title={"게시글 작성"} />
        <form onSubmit={handleSubmit}>
          <DropDownBox>
            <PostDropdown
              label="지역"
              options={[
                "서울",
                "인천",
                "경기",
                "강원",
                "경상",
                "충청",
                "전라",
                "제주",
              ]}
              selected={region}
              setSelected={setRegion}
            />
            <PostDropdown
              label="혈액형"
              options={[
                "DEA 1-",
                "DEA 1.1",
                "DEA 1.2",
                "DEA 3",
                "DEA 4",
                "DEA 5",
                "DEA 7",
              ]}
              selected={blood}
              setSelected={setBloodType}
            />
          </DropDownBox>
          <Line />
          <FormContainer>
            <Text>제목</Text>
            <Input
              placeholder="제목을 입력하세요."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              // input 포커스 스타일 수정
              style={{ borderColor: title ? "#000000" : "initial" }}
            />

            <Text>내용</Text>
            <TextArea
              placeholder="내용을 입력하세요."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              // textarea 포커스 스타일 수정
              style={{ borderColor: content ? "#000000" : "initial" }}
            />
          </FormContainer>
          <Text>이미지</Text>
          <ImgBox>
            이미지 파일 (JPG, PNG, GIF)을 최대 3개를 첨부할 수 있어요.
            <div style={{ display: "flex" }}>
              {uploadedImages.map((image, index) => (
                <ImgPlusBtn
                  key={index}
                  style={{ backgroundImage: `url(${image.url})` }}
                />
              ))}
              {uploadedImages.length < 3 && (
                <ImgPlusBtn>
                  <PictureMyPageSVG />
                  <label htmlFor="imageUpload" style={{ cursor: "pointer" }}>
                    첨부하기
                  </label>
                  <input
                    type="file"
                    id="imageUpload"
                    style={{ display: "none" }}
                    onChange={onChangeImage}
                    multiple
                  />
                </ImgPlusBtn>
              )}
            </div>
          </ImgBox>
          <PostBtn
            type="submit"
            disabled={!isButtonEnabled}
            style={{
              backgroundColor: isButtonEnabled
                ? "rgba(255, 105, 105, 1)" // rgba 색상으로 설정
                : "rgba(128, 128, 128, 0.5)", // 비활성화된 버튼 색상도 rgba로 설정
            }}
          >
            등록
          </PostBtn>
        </form>
      </Wrapper>
    </>
  );
};

export default PostWrite;
