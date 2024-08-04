import {
  Wrapper,
  InfoList,
  InfoListItem,
  ItemDetail,
  GoMyPageSVG,
  GoBtn,
} from "./Styled";
import Header2 from "./header/Header2";
import React from "react";
import { useNavigate } from "react-router-dom"; // useNavigate 훅 가져오기
import { useEffect, useState } from "react";
import ProfileMy from "../../components/myPageComponent/ProfileMy";
import { API } from "../../api"; // API 호출을 위한 모듈 임포트

const MyPageMain = () => {
  const [data, setData] = useState({ posts: [], profiles: [] });

  const fetchData = async () => {
    try {
      const response = await API.get("/api/users/myprofile");
      console.log("진우데이터:", response.data);
      setData(response.data);
    } catch (error) {
      console.log("에러입니당:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const navigate = useNavigate(); // useNavigate 훅 초기화

  const handleManageClick = () => {
    navigate("/AccountManage"); // /mypageedit 경로로 이동
  };

  const handlePetClick = () => {
    navigate("/PetInfo"); // /PetEdit 경로로 이동
  };

  const handleReservationClick = () => {
    navigate("/ReservationList"); // /PetEdit 경로로 이동
  };

  const handlePostClick = () => {
    navigate("/MyPost"); // /PetEdit 경로로 이동
  };

  return (
    <>
      <Header2 title="마이페이지" />
      <Wrapper>
        <ProfileMy></ProfileMy>
        <InfoList>
          <InfoListItem>
            내 정보
            <ItemDetail onClick={handleManageClick}>
              계정 관리
              <GoBtn onClick={handleManageClick}>
                <GoMyPageSVG />
              </GoBtn>
            </ItemDetail>
            <ItemDetail onClick={handlePetClick}>
              반려견 정보
              <GoBtn onClick={handlePetClick}>
                <GoMyPageSVG />
              </GoBtn>
            </ItemDetail>
            헌혈 예약
            <ItemDetail onClick={handleReservationClick}>
              헌혈 예약 내역
              <GoBtn onClick={handleReservationClick}>
                <GoMyPageSVG />
              </GoBtn>
            </ItemDetail>
            커뮤니티
            <ItemDetail onClick={handlePostClick}>
              내가 쓴 글
              <GoBtn>
                <GoMyPageSVG />
              </GoBtn>
            </ItemDetail>
            <ItemDetail>
              좋아요 한 글
              <GoBtn>
                <GoMyPageSVG />
              </GoBtn>
            </ItemDetail>
            <ItemDetail>
              댓글 단 글
              <GoBtn>
                <GoMyPageSVG />
              </GoBtn>
            </ItemDetail>
          </InfoListItem>
        </InfoList>
      </Wrapper>
    </>
  );
};

export default MyPageMain;
