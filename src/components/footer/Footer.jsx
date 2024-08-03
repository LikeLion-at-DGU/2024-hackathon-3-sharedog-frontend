// 푸터 담당자: 이동건

import S from "./Styled";
import { useLocation } from "react-router-dom";
import HomeIcon from "../../assets/icons/footerHome.svg?react";
import ReserveIcon from "../../assets/icons/footerReserve.svg?react";
import MyPageIcon from "../../assets/icons/footerMyPage.svg?react";
import BloodIcon from "../../assets/icons/footerBloodPost.svg?react";
import FillHome from "../../assets/icons/fillHome.svg?react";
import FillReserve from "../../assets/icons/fillReserve.svg?react";
import FillMyPage from "../../assets/icons/fillMyPage.svg?react";
import FillBlood from "../../assets/icons/fillBloodPost.svg?react";
const Footer = () => {
  const location = useLocation();

  return (
    <S.Wrapper>
      <S.IconWrapper>
        <S.FooterIcon
          Svg={location.pathname === "/home" ? FillHome : HomeIcon}
          label="홈"
          to="/home"
        />
        <S.FooterIcon
          Svg={location.pathname === "/reservation" ? FillReserve : ReserveIcon}
          label="헌혈예약"
          to="/reservation"
        />
        <S.FooterIcon
          Svg={location.pathname === "/bloodPost" ? FillBlood : BloodIcon}
          label="긴급헌혈"
          to="/bloodPost"
        />
        <S.FooterIcon
          Svg={location.pathname === "/mypagemain" ? FillMyPage : MyPageIcon}
          label="마이페이지"
          to="/mypagemain"
        />
      </S.IconWrapper>
    </S.Wrapper>
  );
};

export default Footer;
