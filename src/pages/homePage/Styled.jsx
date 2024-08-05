import styled from 'styled-components';
import BgImg from '../../assets/images/HomeBG.svg';
import PetIcon from '../../assets/icons/PetIcon.svg?react';
import GoTest from '../../assets/icons/goTest.svg?react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react'; // 슬라이드 코드
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 90vh;
    font-size: 20px;
    font-family: SUIT, sans-serif; // 폰트사용 예시 
    font-weight: 800;
`;

export const Bg = styled.div`
    background: url(${BgImg}) no-repeat;
    background-size: cover;
    background-position: bottom center;
    width: 100%;
    height: 30vh; // 화면의 40% 높이
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    @media (min-height: 800px) {
    height: 35vh; /* 화면 높이가 1024px 이상일 때의 높이 */
    /* margin-bottom: 10px; */
  }
`;

export const ContentWrapper = styled.div`
    display: flex;
    width: 90%;
    /* margin-top: 115px; */
    margin-top: 20%;
    /* gap: 20px; */
    flex-direction: column;

    @media (min-height: 800px) {
        margin-top: 27%;
    
    }
`;

const OverlapContent = styled.div`
    width: 100%;
    height: 19vh;
    background-color: white;
    padding: 30px;
    border-radius: 20px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1); // 그림자 효과
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0; // 헌혈견검사 카드 높이 내리는코드 
    @media (min-height: 800px) {
        margin: 4vh 0;
        height: 23vh;
    }
`;

const PetTest = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`;

const PetContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (min-height: 800px) {
        height: 130px;
    }

`;

const TestText = styled.div`
    display: flex;
    color: #3A3A3C;
    font-family: SUIT;
    font-size: 17px;
    font-weight: 700;
    line-height: 30px;
`;

const TestBtn = styled(Link)`
    display: flex;
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
    text-decoration: none;
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

export const PetTestCard = () => (
    <OverlapContent>
        <PetTest>
            <PetContent>
                <TestText>우리집 강아지는<br />헌혈견이 될 수 있을까?</TestText>
                <TestBtn to="https://smore.im/quiz/VzwYgfXd0X?tm=a39f8a80">테스트 바로 가기 <GoTest /></TestBtn>
            </PetContent>
            <PetIcon />
        </PetTest>
    </OverlapContent>
);
//------------홈 강아지테스트부분 슬라이드 ---------------------------
const SampleSlider = styled.div`
    width: 90%;
    margin: 10px auto; /* 슬라이더를 가운데로 정렬 */
    position: relative;

    .swiper-pagination {
        position: absolute;
        bottom: 12px; /* 페이지네이션 점(dot)을 슬라이더 아래로 이동 */
        left: 0;
        width: 100%;
        display: flex;
        justify-content: center;
        @media (min-height: 800px) {
        margin: 5vh 0;
    }
    }
    .swiper-pagination-bullet {
        background-color: #FF6969;
    }
    .swiper-button-prev{
        display: none;
    }
    .swiper-button-next {
        /* right:-5px; */
        color: #FF6969;
        width: 33px; /* 버튼 크기 키우기 */
        height: 33px; /* 버튼 크기 키우기 */
        border-radius: 78.571px;
        border: 0.786px solid var(--Red-Red01, rgba(255, 105, 105, 0.40));
        background: #FFF;
        box-shadow: 0px 0px 10px 0px rgba(255, 36, 74, 0.10);
        &:after {
            font-size: 15px; /* 아이콘 크기 키우기 */
        }
    }
`;

export const PetSlider = () => {
    const slides = [1, 2, 3]; // 슬라이드를 생성하기 위한 임의의 배열

    return (
        <SampleSlider>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                loop={true}
                slidesPerView={1} // 슬라이드가 중간에 정렬되고 양옆이 반씩 보이도록 설정
                centeredSlides={true} // 가운데 정렬
                spaceBetween={20}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
            >
                {slides.map((_, index) => ( // `slide`가 사용되지 않으므로 `_`로 대체
                    <SwiperSlide key={index}>
                        <PetTestCard /> {/* PetTestCard 사용 */}
                    </SwiperSlide>
                ))}
            </Swiper>
        </SampleSlider>
    );
};
//------------홈 강아지테스트부분 슬라이드 ---------------------------

// InfoCard 관련 스타일 및 컴포넌트
const InfoWrapper = styled.div`
    display: flex;
    width: 28vw;
    height: 88px;
    padding: 9px 26px;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    border: 1px solid var(--Color-Gray-Gray01, #EAEAEA);
    background: #FFF;
    margin-right: 5px;
    margin-left: 5px;
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 11px;
    align-items: center;
`;

const InfoText = styled.div`
    display: flex;
    color: var(--Gray-Gray03, #3A3A3C);
    text-align: center;
    font-family: SUIT;
    font-size: 12px;
    font-weight: 600;
`;

export const InfoCardWrapper = styled.div`
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

export const Line = styled.div`
    margin:20px 0;
    display: flex;
    width: 100%;
    height: 1px;
    background: rgba(234, 234, 234, 0.70);
`;

export const HomePostTitle = styled.div`
    display: flex;
    color: var(--Gray-Gray03, #3A3A3C);
    font-family: SUIT;
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 2vh;
`;
export const HomeFullBtn = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    color: rgba(156, 156, 161, 0.70);
    text-align: center;
    font-family: SUIT;
    font-size: 10px;
    font-weight: 600;
    line-height: 100%; /* 10px */
    letter-spacing: 0.01px;
    margin-bottom: 2vh;
    cursor: pointer; /* 마우스 커서를 포인터로 변경 */
`;

//지역 필터 ------------------------------------
const FilterWrapper = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 15px;
    @media (max-width: 470px) {
        overflow-x: auto;
    white-space: nowrap;
        width: 100%;
        justify-content: space-between;
    }

`;

const FilterButton = styled.button`
    background-color: ${({ active }) => (active ? '#FF6969' : '#FFF')};
    color: ${({ active }) => (active ? '#FFF' : '#3A3A3C')};
    border: 1px solid #EAEAEA;
    border-radius: 20px;
    padding: 5px 10px;
    cursor: pointer;
    font-family: SUIT;
    font-size: 12px;
    font-weight: 600;
`;

export const HomeFilter = ({ regions, activeRegion, onRegionChange }) => (
    <FilterWrapper>
        {regions.map((region) => (
            <FilterButton
                key={region}
                active={activeRegion === region}
                onClick={() => onRegionChange(region)}
            >
                {region}
            </FilterButton>
        ))}
    </FilterWrapper>
);