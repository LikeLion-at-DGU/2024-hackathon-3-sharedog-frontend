import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Modal from 'react-modal';
import styled from "styled-components";
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
  ReservationBtn,
  ModalWrapper,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalText,
  ModalButton
} from "./Styled";
import Header from "../../pages/myPage/header/Header";
import Check2MyPageSVG from "../../assets/icons/check2MyPage.svg?react";
import dummyReservation from "../../data/dummyReservation";
import Arrow from "../../assets/icons/Arrow.svg";
import Complete from "../../assets/icons/Complete.svg";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000; /* 오버레이의 z-index 설정 */
`;

const Map = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const reservation = dummyReservation.find((res) => res.id === parseInt(id));
  const [coordinates, setCoordinates] = useState({
    lat: 37.5665,
    lng: 126.978,
  });
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [overlayIsVisible, setOverlayIsVisible] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src =
      "https://dapi.kakao.com/v2/maps/sdk.js?appkey=e5718ae687c4da0a13de876ff02803a6&libraries=services&autoload=false";
    document.head.appendChild(script);

    script.onload = () => {
      kakao.maps.load(() => {
        if (kakao.maps.services) {
          const geocoder = new kakao.maps.services.Geocoder();

          geocoder.addressSearch(reservation.place, (result, status) => {
            if (status === kakao.maps.services.Status.OK) {
              const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
              setCoordinates({ lat: result[0].y, lng: result[0].x });

              const container = document.getElementById("map");
              const options = {
                center: coords,
                level: 3,
              };
              const map = new kakao.maps.Map(container, options);

              const marker = new kakao.maps.Marker({
                position: coords,
              });
              marker.setMap(map);
            }
          });
        }
      });
    };

    return () => {
      document.head.removeChild(script);
    };
  }, [reservation]);

  const openModal = () => {
    setModalIsOpen(true);
    setOverlayIsVisible(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
    setOverlayIsVisible(false);
  };

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
              <Text2>{reservation.name}</Text2>
            </InfoBox2>
            <InfoBox2>
              <Text1>일시</Text1>
              <Text2>{new Date(reservation.created_at).toLocaleString()}</Text2>
            </InfoBox2>
            <InfoBox2>
              <Text1>장소</Text1>
              <Text2>{reservation.place}</Text2>
            </InfoBox2>
          </InfoBox>
          <Line />
          <InfoCheckText>내원 전 주의사항</InfoCheckText>
        </InfoCheck>
        <InfoCheck>
          <CautionBox>
            <InfoBox2>
              <Check2MyPageSVG />
              <Text2>8시간 금식, 4시간 금수 후 내원해주세요.</Text2>
            </InfoBox2>
            <InfoBox2>
              <Check2MyPageSVG />
              <Text2>헌혈 후 목줄보다는 하네스 사용을 권장드려요.</Text2>
            </InfoBox2>
            <InfoBox2>
              <Check2MyPageSVG />
              <Text2>혈액검사-채혈-안정까지 약 1시간 40분 소요돼요.</Text2>
            </InfoBox2>
          </CautionBox>
          <ReservationBtn onClick={openModal}>헌열 예약하기</ReservationBtn>
        </InfoCheck>
      </Wrapper>

      {overlayIsVisible && (
        <ModalOverlay>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Reservation Completed"
            overlayClassName="overlay"
            style={{
              content: {
                position: 'fixed',
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)',
                border: 'none',
                background: 'none',
                zIndex: 1001, // 모달 컨텐츠가 오버레이보다 위에 오도록 설정
              }
            }}
          >
            <ModalWrapper>
              <ModalHeader> 예약이 완료되었어요!</ModalHeader>
              <ModalBody>
                <img src={Complete} alt="예약 완료" style={{ width: '50px', height: '50px' }} />
              </ModalBody>
              <ModalFooter>
                <ModalButton onClick={() => navigate('/reservationlist')}>헌열 예약 내역<img src={Arrow} alt="예약 내역 보기"/></ModalButton>
              </ModalFooter>
            </ModalWrapper>
          </Modal>
        </ModalOverlay>
      )}
    </>
  );
};

export default Map;
