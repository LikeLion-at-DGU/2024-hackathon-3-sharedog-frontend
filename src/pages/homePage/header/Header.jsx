import styled from 'styled-components';
import ExclamationSVG from '../../../assets/icons/exclamation.svg?react'
const Wrapper = styled.div`
  display  :flex ;
  justify-content: space-between;
  width: 85%;
  /* height: 10vh; */
  margin-top: 4vh;
  /* border: 1px solid blue; */
`;

const Profile = styled.div`
  display  :flex ;
  flex-direction: column;
  justify-content: space-between;
  /* border: 1px solid red; */

`;
const ProfileName =styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-top: 20px;
`;
const Name =styled.div`
  display: flex;
  color: #FFF;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.10);
  font-family: SUIT;
  font-size: 24px;
  font-weight: 700;
`;
const DogName =styled.div`
  color: #FFF;
  font-family: SUIT;
  font-size: 12px;
  font-weight: 700;
`;
const ProfileInfo = styled.div`
  display: flex;
  align-items: center;
  gap:6px;
  padding: 4px 8px;
  border-radius: 30px;
  border: 1px solid #FFF;
  color: #FFF;
  text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.20);
  font-family: SUIT;
  font-size: 12px;
  font-weight: 600;
  line-height: 100%;
`;
const ProfileImg = styled.div` //이미지 
  display  :flex ;
  width: 84px;
  height: 84px;
  border-radius: 50%;
  background-color: gray;

`;

const Header = () => { //props로 정보받아오는건 나중에 연결 
    return (
      <Wrapper>
        <Profile>
          <ProfileName>
            <Name>황민영</Name>
            <DogName>| 루피</DogName>
          </ProfileName>
          <ProfileInfo>
            <ExclamationSVG/>
            헌혈 가능 여부 인증이 필요해요!
            </ProfileInfo>
        </Profile>
        <ProfileImg></ProfileImg>
        
      </Wrapper>
    );
  };
  
  export default Header;
  