/*global kakao*/

import React, { useEffect } from "react";
import {
  InfoBox,
  InfoCheck,
  InfoCheckText,
  MapBox,
  Wrapper,
  Text1,
  Text2,
  InfoBox2,
  Line,
  CautionBox,
} from "./Styled";
import Header from "../../pages/myPage/header/Header";

const Map = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src =
      "https://dapi.kakao.com/v2/maps/sdk.js?appkey=e5718ae687c4da0a13de876ff02803a6&autoload=false";
    document.head.appendChild(script);

    script.onload = () => {
      kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new kakao.maps.LatLng(37.5665, 126.978), // 기본 중심 좌표 (서울)
          level: 3, // 지도 확대 레벨
        };
        const map = new kakao.maps.Map(container, options);

        // 추가 기능: 지도 마커 추가 예시
        const markerPosition = new kakao.maps.LatLng(37.5665, 126.978);
        const marker = new kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(map);
      });
    };
  }, []);

  return (
    <>
      <Header title={"예약 정보 확인"} />
      <Wrapper>
        <MapBox id="map"></MapBox>
        <InfoCheck>
          <InfoCheckText>예약자 정보 확인</InfoCheckText>
          <InfoBox>
            <InfoBox2>
              <Text1>이름</Text1>
              <Text2>루피</Text2>
            </InfoBox2>
            <InfoBox2>
              <Text1>일시</Text1>
              <Text2>8월 6일 화요일 오전 10시</Text2>
            </InfoBox2>
            <InfoBox2>
              <Text1>장소</Text1>
              <Text2>KU 아임도그너 헌혈센터</Text2>
            </InfoBox2>
          </InfoBox>
          <Line />
          <InfoCheckText>내원 전 주의사항</InfoCheckText>
        </InfoCheck>
        <InfoCheck>
          <CautionBox></CautionBox>
        </InfoCheck>
      </Wrapper>
    </>
  );
};

export default Map;
