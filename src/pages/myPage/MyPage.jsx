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

const MyPage = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <MyInfo>
          <ProfileImg>
            <ProfileMyPageSVG />
          </ProfileImg>
          <InfoBox>황민영</InfoBox>
          <Editbtn>
            <EditMyPageSVG></EditMyPageSVG> {/* EditMyPageSVG 사용 */}
            프로필 수정
          </Editbtn>
        </MyInfo>
        <InfoList>
          <InfoListItem>
            내 정보
            <ItemDetail>
              계정 관리
              <GoBtn>
                <GoMyPageSVG />
              </GoBtn>
            </ItemDetail>
            헌혈 예약
            <ItemDetail>
              헌혈 예약 내역
              <GoBtn>
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

export default MyPage;
