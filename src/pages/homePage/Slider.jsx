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
    bottom: 10px; /* 페이지네이션 점(dot)을 슬라이더 아래로 이동 */
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: blue;
    width: 40px; /* 버튼 크기 키우기 */
    height: 40px; /* 버튼 크기 키우기 */
    &:after {
      font-size: 20px; /* 아이콘 크기 키우기 */
    }
  }
`;

const Slide = styled.div`
  width: 100%;
  background-color: ${(props) => props.bgColor};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  height: 200px; /* 슬라이더 높이 설정 */
`;

const Slider = () => {
  const slides = [
    { id: 1, bgColor: 'red' },
    { id: 2, bgColor: 'blue' },
    { id: 3, bgColor: 'green' },
    { id: 4, bgColor: 'pink' },
  ]; // 슬라이드에 표시할 숫자와 색상

  return (
    <SampleSlider>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop={true}
        slidesPerView={1.5} // 슬라이드가 중간에 정렬되고 양옆이 반씩 보이도록 설정
        centeredSlides={true} // 가운데 정렬
        spaceBetween={20}
        autoplay={{
          delay: 2000,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Slide bgColor={slide.bgColor}>sample{slide.id}</Slide>
          </SwiperSlide>
        ))}
      </Swiper>
    </SampleSlider>
  );
};


export default Slider;
