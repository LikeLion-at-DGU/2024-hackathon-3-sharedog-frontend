import styled from 'styled-components';
import BgImg from '../../assets/images/HomeBG.svg'
import PetIcon from '../../assets/icons/PetIcon.svg?react'
import GoTest from '../../assets/icons/goTest.svg?react'

import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
    display  :flex ;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 90vh;
    font-size: 20px;
    font-family: SUIT, sans-serif;//폰트사용 예시 
    font-weight: 800;
    
`;

export const Bg = styled.div`//배경 이미지 
    background: url(${BgImg}) no-repeat ;
    background-size: cover;
    background-position: bottom center;
    width: 100%; 
    height:30vh; // 화면의 40% 높이
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    /* padding: 20px; */
    position: relative; 
`;

export const ContentWrapper=styled.div`
    display: flex;
    width: 90%;
    margin-top: 115px;
    /* border: solid 1px green; */
    gap:20px;
    flex-direction: column;
`;
//강아지테스트 카드 컴포넌트 ------------------------------------------
const OverlapContent = styled.div`//배경이미지와 겹치는 헌혈견테스트 부분 
    position: absolute;
    top: 65%; // 배경 이미지와 겹치는 부분의 위치 조정
    width: 90%;
    height: 172px;
    background-color: white;
    padding: 30px;
    border-radius: 20px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1); // 그림자 효과
`;
const PetTest = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`;
const PetContent= styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const TestText= styled.div`
    display: flex;
    color: #3A3A3C;
    font-family: SUIT;
    font-size: 17px;
    font-weight: 700;
    line-height: 30px;
`;
const TestBtn=styled(Link)` //얘는 export하면뭐 오류뜨네 
    display: flex;
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
    text-decoration: none;
    
    display: flex;
    justify-content: center;
    align-items: center;
    width: 121px;
    height: 28px;
    gap: 10px;
    border-radius: 10px;
    background: var(--Red-Red02, rgba(255, 105, 105, 0.60));
    color: #FFF;
    text-align: center;
    font-family: SUIT;
    font-size: 12px;
    font-weight: 600;
`;


export const PetTestCard = () => ( //헌혈견 강아지 카드 
    <OverlapContent>
            <PetTest>
                <PetContent>
                    <TestText>우리집강아지는<br/>헌혈견이 될 수 있을까?</TestText>
                    <TestBtn to="https://smore.im/quiz/VzwYgfXd0X?tm=a39f8a80" >테스트 바로 가기 <GoTest/></TestBtn>
                </PetContent>
                <PetIcon/>
            </PetTest>
    </OverlapContent>
);
//--------------------------------------------------
const InfoWrapper= styled.div`
    display: flex;
    width: 28vw;
    height: 100px;
    padding: 9px 26px;
    justify-content: center;
    align-items: center;

    border-radius: 12px;
    border: 1px solid var(--Color-Gray-Gray01, #EAEAEA);
    background: #FFF;
    margin-right: 5px;
    margin-left: 5px;
`;
const Info= styled.div`
    display: flex;
    flex-direction: column;
    gap:11px;
    align-items: center;

`;
const InfoText= styled.div`

    display: flex;
    color: var(--Gray-Gray03, #3A3A3C);
    text-align: center;
    font-family: SUIT;
    font-size: 12px;
    font-weight: 600;
`;
export const InfoCardWrapper=styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`;
export const InfoCard = ({ icon: Icon, text }) => (
    <InfoWrapper>
        <Info>
            <Icon />
            <InfoText>{text}</InfoText>
        </Info>
    </InfoWrapper>
);

export const Line =styled.div`
display: flex;
width: 100%;
height: 1px;
background: rgba(234, 234, 234, 0.70);
`;

//지역별 긴급헌혈 현황 파트 ----------------------

export const BloodPostCard= ({ id,image, title, content, date, commentsCount, likes, bloodType, region, writer })=> {

    return (
       
        <Wrapper>
             <NavLink to={`/bloodPost/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}> {/* 링크 추가 */}
            <ContentWrapper>
                <Header>
                    <TagWrapper>
                        <Badge>{bloodType}</Badge>
                        <Tag>{region}</Tag>
                    </TagWrapper>
                    
                    <DateText>{date}</DateText>
                </Header>
                
                <Title>{title} <Writer>| {writer}</Writer></Title>
                
                <Body $hasImage={!!image}>
                    {/* 이미지가 있을때는 출력하기 */}
                    {image && (
                        <ImageWrapper>
                        <img src={image} alt={title} />
                        {/* {removePortFromURL(image)} */}
                        </ImageWrapper>
                    )}
                    <Content $hasImage={!!image}>{content}</Content>
                </Body>
            </ContentWrapper>
            </NavLink>
            <Footer>
                <FooterIcon>
                    <LikeCount>
                         {/* 클릭 시 아이콘 변경 */}
                        <HeartIcon
                            icon={isLiked ? faHeartSolid : faHeartRegular}
                            onClick={handleLikeToggle} // onClick 핸들러 추가
                        />
                        {likeCount}
                        
                    </LikeCount>
                    <CommentCount>
                        <CommentIcon icon={faCommentDotsRegular} />    
                        {commentsCount}
                    </CommentCount>
                </FooterIcon>
                
            </Footer>
            
        </Wrapper>
  
    );
};