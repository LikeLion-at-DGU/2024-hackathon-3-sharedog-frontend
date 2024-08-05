import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import styled from 'styled-components';

// styled-components를 이용한 스타일 정의
const SampleSlider = styled.div`
  width: 100%;
  margin: 0 auto; /* 슬라이더를 가운데로 정렬 */
  position: relative;

  .swiper-pagination {

    position: absolute;
    bottom: 3px; /* 페이지네이션 점(dot)을 슬라이더 아래로 이동 */
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;

  }
.swiper-pagination-bullet{
  background-color: #FF6969;
}
  .swiper-button-prev{
    left: 0px;

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
  
  .swiper-button-next {
  
    right:0px;
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

const Slide = styled.div`//슬라이드 카드 바깥 디자인 
  width: 100%;
  border-radius: 10px;
  border: 1px solid var(--Color-Gray-Gray01, #EAEAEA);
  background: #FFF;
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
  height: 90px; /* 슬라이더 높이 설정 */
  padding: 10px;
`;
const ContentBox=styled.div` //카드 태그랑 내용감싸는부분 
  display: flex;
  flex-direction: column;
  gap:5px;
  width: 70%;
  height: 100%;
`;
const TagBox=styled.div` //혈액형,지역태그 감싸는 박스 
  display: flex;
  gap:2px;//태그사이거리 
`;
const Tag=styled.div` //혈액형,지역태그 
  display: flex;
  width: 30px;
  height: 14px;
  /* padding: 3.011px 8.76px; */
  justify-content: center;
  align-items: center;
  border-radius: 8.213px;
  font-family: SUIT;
  font-size: 7px;
  font-weight: 500;
  background:  #FF6969;
`;
const ContentTitle=styled.div` //혈액형,지역태그 
  display: flex;
  align-items: center;
  width: 100%;
  color: var(--Gray-Gray03, #3A3A3C);
  font-family: SUIT;
  font-size: 12px;
  font-weight: 700;
`;
const ContentText=styled.div` //혈액형,지역태그 
  display: flex;
  align-items:center;
  color: #000;

font-family: SUIT;
font-size: 10px;
font-weight: 500;
line-height: 15px;
`;
const SlideImg=styled.img`
  width: 25%;
  border-radius: 6px;
  background: ${props => `url(${props.imgurl}) lightgray 50% / cover no-repeat`};
`;

const Slider = ({ post }) => {

  return (
    <SampleSlider>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop={true}
        slidesPerView={1.5}// 슬라이드가 중간에 정렬되고 양옆이 반씩 보이도록 설정
        centeredSlides={true} // 가운데 정렬
        spaceBetween={20}
        pagination={{
          clickable: true,
      }}
        navigation={true}
      >
        {post.map((slide) => (
          <SwiperSlide key={slide.id}>
          <Slide>
            <ContentBox>
              <TagBox>
                <Tag>{slide.blood}</Tag>
                <Tag>{slide.region}</Tag>
              </TagBox>
              <ContentTitle>{slide.title}</ContentTitle>
              <ContentText>{slide.content}</ContentText>
            </ContentBox>
            <SlideImg imgurl={slide.imgurl} image_1/>
            
          </Slide>
        </SwiperSlide>
        ))}
      </Swiper>
    </SampleSlider>
  );
};


export default Slider;
