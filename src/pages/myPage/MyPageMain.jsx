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
  const [profile, setProfile] = useState({ nickname: "", profile_image: "" });

  const fetchData = async () => {
    try {
      const response = await API.get("/api/users/myprofile");
      console.log("gydms데이터:", response.data);
      const profileData = response.data[0]; // 데이터 배열에서 첫 번째 요소를 사용
      setProfile(profileData);
    } catch (error) {
      console.log("에러:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const navigate = useNavigate(); // useNavigate 훅 초기화

  const handleManageClick = () => {
    navigate("/AccountManage"); // /AccountManage 경로로 이동
  };

  const handlePetClick = () => {
    navigate("/PetInfo"); // /PetInfo 경로로 이동
  };

  const handleReservationClick = () => {
    navigate("/ReservationList"); // /ReservationList 경로로 이동
  };

  const handlePostClick = () => {
    navigate("/MyPost"); // /MyPost 경로로 이동
  };

  const handleCommentClick = () => {
    navigate("/CommentPost"); // /CommentPost 경로로 이동
  };

  const handleLikeClick = () => {
    navigate("/LikePost"); // /LikePost 경로로 이동
  };

  // 프로필 이미지 URL 수정
  const profileImage = profile.profile_image || "";

  return (
    <>
      <Header2 title="마이페이지" />
      <Wrapper>
        <ProfileMy name={profile.nickname} profileImage={profileImage} />
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
              <GoBtn onClick={handlePostClick}>
                <GoMyPageSVG />
              </GoBtn>
            </ItemDetail>
            <ItemDetail onClick={handleLikeClick}>
              좋아요 한 글
              <GoBtn onClick={handleLikeClick}>
                <GoMyPageSVG />
              </GoBtn>
            </ItemDetail>
            <ItemDetail onClick={handleCommentClick}>
              댓글 단 글
              <GoBtn onClick={handleCommentClick}>
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
