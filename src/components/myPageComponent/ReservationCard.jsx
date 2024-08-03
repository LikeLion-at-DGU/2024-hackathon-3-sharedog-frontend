import React, { useState } from "react";
import styled from "styled-components";
import CompleteMyPageSVG from "../../assets/icons/completeMyPage.svg?react";
import NotCompleteMyPageSVG from "../../assets/icons/notCompleteMyPage.svg?react";
import dummyReservationMy from "../../data/dummyReservationMy";

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
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const StatusYes = styled.div`
  display: flex;
  width: 90px;
  height: 21px;
  padding: 4px 7px 5px 6px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  gap: 10px;
  border-radius: 30px;
  border: 0.5px solid var(--Red-Red04, #ff6969);
  background: var(--Red-Red04, #ff6969);
  color: #fff;
  font-family: SUIT;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const StatusNot = styled.div`
  display: flex;
  width: 90px;
  height: 21px;
  padding: 4px 7px 5px 6px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  gap: 10px;
  border-radius: 30px;
  border: 1px solid var(--Red-Red04, #ff6969);
  background: #fff;
  color: var(--Red-Red04, #ff6969);
  font-family: SUIT;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const CardBox = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  padding: 10px;
  justify-content: space-between;
  flex-direction: column;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const PetImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 20px;
  background: var(--Gray-White, #fff);
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
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 22.4px */
`;

export const InfoLabel = styled.div`
  color: var(--Red-Red04, #ff6969);
  font-family: SUIT;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-right: 5px;
`;

export const InfoValue = styled.div`
  color: var(--Gray-Gray02, #636366);
  font-family: SUIT;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
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
  font-style: normal;
  font-weight: 500;
  line-height: 160%; /* 19.2px */
  letter-spacing: -0.24px;
  padding: 5px 10px;
  border-style: none;
`;

export const BloodBtn2 = styled.button`
  width: 100px;
  border-radius: 20px;
  background: var(--Red-Red04, #ff6969);
  color: #fff;
  text-align: center;
  font-family: SUIT;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%; /* 19.2px */
  letter-spacing: -0.24px;
  padding: 5px 10px;
  border-style: none;
`;

const ReservationCard = () => {
  const [statuses, setStatuses] = useState(
    dummyReservationMy.map((reservation) => ({
      id: reservation.id,
      completed: reservation.blood === "yes",
      status: reservation.blood === "yes" ? "yes" : "none", // none, yes, not
    }))
  );

  const handleComplete = (id, status) => {
    setStatuses((prevState) =>
      prevState.map((res) => (res.id === id ? { ...res, status } : res))
    );
  };

  return (
    <Wrapper>
      {dummyReservationMy.map((reservation) => {
        const currentStatus = statuses.find(
          (res) => res.id === reservation.id
        ).status;

        return (
          <ReservationCardContainer key={reservation.id}>
            <DateBox>
              {reservation.date}
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
                    src={reservation.image}
                    alt={`${reservation.name} Info`}
                  />
                </PetImg>
                <InfoList>
                  <InfoItem>{reservation.hospital}</InfoItem>
                  <InfoItem>
                    <InfoLabel>이름:</InfoLabel>
                    <InfoValue>{reservation.name}</InfoValue>
                  </InfoItem>
                  <InfoItem>
                    <InfoLabel>일시:</InfoLabel>
                    <InfoValue>{reservation.date}</InfoValue>
                  </InfoItem>
                </InfoList>
              </InfoContainer>
              {reservation.schedule === "over" && currentStatus === "none" && (
                <BtnBox>
                  <BloodBtn1
                    onClick={() => handleComplete(reservation.id, "not")}
                  >
                    헌혈 미완료
                  </BloodBtn1>
                  <BloodBtn2
                    onClick={() => handleComplete(reservation.id, "yes")}
                  >
                    헌혈 완료
                  </BloodBtn2>
                </BtnBox>
              )}
            </CardBox>
          </ReservationCardContainer>
        );
      })}
    </Wrapper>
  );
};

export default ReservationCard;
