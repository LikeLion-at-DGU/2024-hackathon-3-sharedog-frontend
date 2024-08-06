import styled from 'styled-components';
import ExclamationSVG from '../../../assets/icons/exclamation.svg?react'

const Wrapper = styled.div`
  display  :flex ;
  justify-content: space-between;
  width: 80%;
  /* height: 10vh; */
  margin-top: 4vh;
  /* border: 1px solid blue; */
  @media (min-height: 800px) {
    margin-top: 6vh;
  }
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
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: gray;
  overflow: hidden; /* 이미지가 div를 넘지 않도록 설정 */
  border-radius: 2px solid red;

img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* 이미지 비율을 유지하면서 꽉 차게 설정 */
}
`;

const Header = ({ profile }) => { //props로 정보받아오는건 나중에 연결 
  const imageUrl = profile?.profile_image.replace(`${import.meta.env.VITE_API_URL}/media/http%3A/`, 'http://');
    return (
      <Wrapper>
        <Profile>
          <ProfileName>
            <Name>{profile?.nickname || '닉네임'}</Name>
            <DogName>| {profile?.dogs[0]?.dogname || '강아지 이름'}</DogName>
          </ProfileName>
          <ProfileInfo>
            <ExclamationSVG/>
            헌혈 가능 여부 테스트를 해보세요!
            </ProfileInfo>
        </Profile>
        <ProfileImg>
        <img src={imageUrl} alt="Profile"/>
        </ProfileImg>
        
      </Wrapper>
    );
  };
  
  export default Header;
  