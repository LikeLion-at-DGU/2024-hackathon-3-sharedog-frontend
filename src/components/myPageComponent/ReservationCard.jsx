import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import CompleteMyPageSVG from "../../assets/icons/completeMyPage.svg?react";
import NotCompleteMyPageSVG from "../../assets/icons/notCompleteMyPage.svg?react";

// Styled Components
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  font-family: SUIT, sans-serif;
`;

export const ReservationCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-bottom: 20px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const DateBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 105, 105, 0.08);
  padding: 10px;
  color: #000;
  font-family: SUIT;
  font-size: 12px;
  font-weight: 700;
`;

export const StatusYes = styled.div`
  display: flex;
  width: 90px;
  height: 21px;
  padding: 4px 7px;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  border: 0.5px solid #ff6969;
  background: #ff6969;
  color: #fff;
  font-family: SUIT;
  font-size: 10px;
  font-weight: 600;
`;

export const StatusNot = styled.div`
  display: flex;
  width: 90px;
  height: 21px;
  padding: 4px 7px;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  border: 1px solid #ff6969;
  background: #fff;
  color: #ff6969;
  font-family: SUIT;
  font-size: 10px;
  font-weight: 600;
`;

export const CardBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background: #fff;
  padding: 10px;
  justify-content: space-between;
  flex-direction: column;
`;

export const InfoContainer = styled.div`
  display: flex;
  width: 90%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const PetImg = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 7vw;
  height: 7vw;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 20px;
  background: #fff;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  color: #000;
  font-family: SUIT;
  font-size: 14px;
  font-weight: 700;
`;

export const InfoLabel = styled.div`
  color: #ff6969;
  font-family: SUIT;
  font-size: 12px;
  font-weight: 600;
  margin-right: 5px;
`;

export const InfoValue = styled.div`
  color: #636366;
  font-family: SUIT;
  font-size: 12px;
  font-weight: 500;
`;

export const BtnBox = styled.div`
  display: flex;
  gap: 20px;
  margin: 5px;
`;

export const BloodBtn1 = styled.button`
  width: 100px;
  border-radius: 20px;
  background: #c3c9d0;
  color: #fff;
  text-align: center;
  font-family: SUIT;
  font-size: 12px;
  font-weight: 500;
  padding: 5px 10px;
  border: none;
`;

export const BloodBtn2 = styled.button`
  width: 100px;
  border-radius: 20px;
  background: #ff6969;
  color: #fff;
  text-align: center;
  font-family: SUIT;
  font-size: 12px;
  font-weight: 500;
  padding: 5px 10px;
  border: none;
`;

const StatusButtons = ({ id, handleComplete }) => (
  <BtnBox>
    <BloodBtn1 onClick={() => handleComplete(id, "not")}>헌혈 미완료</BloodBtn1>
    <BloodBtn2 onClick={() => handleComplete(id, "yes")}>헌혈 완료</BloodBtn2>
  </BtnBox>
);

const ReservationCard = ({ reservations = [] }) => {
  const [statuses, setStatuses] = useState(
    reservations.map((reservation) => ({
      id: reservation.id,
      status: reservation.blood === "yes" ? "yes" : "none", // none, yes, not
    }))
  );

  const handleComplete = (id, status) => {
    setStatuses((prevState) =>
      prevState.map((res) => (res.id === id ? { ...res, status } : res))
    );
  };

  const isBeforeCurrentTime = (dateContent, activeTime) => {
    const [year, month, day] = dateContent.split("-");
    const [hours, minutes] = activeTime.split(":");
    const reservationDate = new Date(year, month - 1, day, hours, minutes);
    const now = new Date();
    console.log("Reservation Date:", reservationDate);
    console.log("Current Date:", now);
    return reservationDate < now; // 현재 시간보다 과거의 예약인지 확인
  };

  return (
    <Wrapper>
      {reservations.map((reservation) => {
        const currentStatus = statuses.find(
          (res) => res.id === reservation.id
        )?.status;
        const showButtons = isBeforeCurrentTime(
          reservation.dateContent,
          reservation.activeTime
        );

        console.log("Show Buttons:", showButtons);

        return (
          <ReservationCardContainer key={reservation.id}>
            <DateBox>
              {reservation.dateHead}
              {currentStatus === "yes" && (
                <StatusYes>
                  <CompleteMyPageSVG />
                  헌혈 완료
                </StatusYes>
              )}
              {currentStatus === "not" && (
                <StatusNot>
                  <NotCompleteMyPageSVG />
                  헌혈 미완료
                </StatusNot>
              )}
            </DateBox>
            <CardBox>
              <InfoContainer>
                <PetImg>
                  <img
                    src={reservation.dog.dog_image}
                    alt={`${reservation.dog.dogname} Info`}
                  />
                </PetImg>
                <InfoList>
                  <InfoItem>{reservation.hospital}</InfoItem>
                  <InfoItem>
                    <InfoLabel>이름:</InfoLabel>
                    <InfoValue>{reservation.dog.dogname}</InfoValue>
                  </InfoItem>
                  <InfoItem>
                    <InfoLabel>일시:</InfoLabel>
                    <InfoValue>
                      {reservation.dateContent} {reservation.activeTime}
                    </InfoValue>
                  </InfoItem>
                </InfoList>
              </InfoContainer>
              {showButtons && (
                <StatusButtons
                  id={reservation.id}
                  handleComplete={handleComplete}
                />
              )}
            </CardBox>
          </ReservationCardContainer>
        );
      })}
    </Wrapper>
  );
};

ReservationCard.propTypes = {
  reservations: PropTypes.array,
};

export default ReservationCard;
