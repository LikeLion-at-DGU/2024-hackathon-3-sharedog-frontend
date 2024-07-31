import styled from "styled-components";
import CheckMyPageSVG from "../../assets/icons/checkMyPage.svg?react"; // SVG 파일 가져오기
import Check2MyPageSVG from "../../assets/icons/check2MyPage.svg?react"; // SVG 파일 가져오기

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 25vh;
  font-size: 20px;
  font-family: SUIT, sans-serif;
  font-weight: 800;
  flex-direction: column;
  margin: 3px;
`;

export const PetInfoBox = styled.div`
  width: 80%;
  height: 25vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid var(--Color-Gray-Gray01, #eaeaea);
  background: #fff;
`;

export const MainProfileBox = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 7px;
`;

export const MainProfile = styled.div`
  display: flex;
  padding: 2px 6px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 30px;
  border: 0.5px solid var(--Red-Red04, #ff6969);
  background: #fff;

  color: var(--Red-Red04, #ff6969);
  font-family: SUIT;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const PetImg = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-radius: 194.199px;
  background: var(--Gray-White, #fff);
`;

export const NameBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 9px;
  align-self: stretch;
`;

const PetInfoCard = () => {
  return (
    <Wrapper>
      <PetInfoBox>
        <MainProfileBox>
          <CheckMyPageSVG />
          <MainProfile>대표 프로필</MainProfile>
        </MainProfileBox>
      </PetInfoBox>
    </Wrapper>
  );
};

export default PetInfoCard;
export { CheckMyPageSVG, Check2MyPageSVG };
