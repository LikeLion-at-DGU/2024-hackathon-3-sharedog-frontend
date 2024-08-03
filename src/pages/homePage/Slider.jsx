import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import styled from 'styled-components';

// styled-components를 이용한 스타일 정의
const SampleSlider = styled.div`
  width: 90%;
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
  .swiper-button-prev,
  .swiper-button-next {

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

const Slide = styled.div`
  width: 100%;
  border-radius: 10px;
  border: 1px solid var(--Color-Gray-Gray01, #EAEAEA);
  background: #FFF;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  height: 90px; /* 슬라이더 높이 설정 */
`;

const Slider = () => {
  const slides = [
    { id: 1},
    { id: 2},
    { id: 3 },
    { id: 4 },
  ]; // 슬라이드에 표시할 숫자와 색상

  return (
    <SampleSlider>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop={true}
        slidesPerView={1.5} // 슬라이드가 중간에 정렬되고 양옆이 반씩 보이도록 설정
        centeredSlides={true} // 가운데 정렬
        spaceBetween={20}
        // autoplay={{
        //   delay: 2000,
        // }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Slide >sample{slide.id}</Slide>
          </SwiperSlide>
        ))}
      </Swiper>
    </SampleSlider>
  );
};


export default Slider;
