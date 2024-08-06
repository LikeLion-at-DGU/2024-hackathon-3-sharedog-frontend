import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import Modal from 'react-modal';
import styled from "styled-components";
import { API } from '../../api';
import moment from 'moment';
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
  z-index: 1000;
`;

const Map = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation(); // useLocation 훅을 사용하여 쿼리 파라미터를 읽습니다.
  const [reservation, setReservation] = useState(null);
  const [coordinates, setCoordinates] = useState({ lat: 37.5665, lng: 126.978 });
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [overlayIsVisible, setOverlayIsVisible] = useState(false);

  // URL 쿼리 파라미터에서 날짜와 시간을 읽어옵니다.
  const query = new URLSearchParams(location.search);
  const selectedDate = query.get('date'); // 'date' 파라미터
  const activeTime = query.get('time'); // 'time' 파라미터

  // 예약 정보를 API로부터 가져오는 useEffect
  useEffect(() => {
    const fetchReservation = async () => {
      try {
        const response = await API.get(`/api/hospital/home/${id}`);
        setReservation(response.data);
      } catch (error) {
        console.error('예약 데이터를 가져오는 중 오류 발생:', error);
      }
    };

    fetchReservation();
  }, [id]);

  // 예약 정보가 업데이트될 때 지도 로드 및 표시
  useEffect(() => {
    if (reservation) {
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
    }
  }, [reservation]);

  const openModal = () => {
    setModalIsOpen(true);
    setOverlayIsVisible(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
    setOverlayIsVisible(false);
  };

  if (!reservation) {
    return <p>로딩 중...</p>; // 예약 정보가 로딩 중일 때 표시할 내용
  }

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
              <Text2>{selectedDate} {activeTime}</Text2>
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
          <ReservationBtn onClick={openModal}>헌혈 예약하기</ReservationBtn>
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
                <ModalButton onClick={() => navigate('/reservationlist')}>헌혈 예약 내역<img src={Arrow} alt="예약 내역 보기"/></ModalButton>
              </ModalFooter>
            </ModalWrapper>
          </Modal>
        </ModalOverlay>
      )}
    </>
  );
};

export default Map;
