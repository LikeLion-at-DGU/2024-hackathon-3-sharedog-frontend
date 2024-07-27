// 푸터 담당자: 이동건 

import S from './Styled';
import HomeIcon  from '../../assets/icons/footerHome.svg?react';
import ReserveIcon  from '../../assets/icons/footerReserve.svg?react';
import MyPageIcon  from '../../assets/icons/footerMyPage.svg?react';
import BloodIcon  from '../../assets/icons/footerBloodPost.svg?react';

const Footer = () => {
  return (
    <S.Wrapper>
        <S.IconWrapper>
            <S.FooterIcon Svg={HomeIcon} label="홈" to="/home" />
            <S.FooterIcon Svg={ReserveIcon} label="헌혈예약" to="/reservation" />
            <S.FooterIcon Svg={BloodIcon} label="긴급헌혈" to="/bloodPost" />
            <S.FooterIcon Svg={MyPageIcon} label="마이페이지" to="/mypage" />
        </S.IconWrapper>
    </S.Wrapper>
);
};
  
  export default Footer;