import {
  Editbtn,
  InfoBox,
  MyInfo,
  Wrapper,
  EditMyPageSVG,
  ProfileImg,
  ProfileMyPageSVG,
  InfoList,
  InfoListItem,
  ItemDetail,
  GoMyPageSVG,
  GoBtn,
} from "./Styled";
import Header from "./header/Header";
import React from "react";
import { useNavigate } from "react-router-dom"; // useNavigate 훅 가져오기
import ProfileMy from "../../components/myPageComponent/ProfileMy";

const MyPageMain = () => {
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

  return (
    <>
      <Header title="마이페이지" />
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
            <ItemDetail>
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
