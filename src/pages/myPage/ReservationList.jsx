import { Wrapper } from "./Styled";
import Header from "./header/Header";
import React, { useState, useEffect } from "react";
import ReservationCard from "../../components/myPageComponent/ReservationCard";
import axios from "axios";

const ReservationList = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await axios.get("/api/users/mypage/reservation-check");
        console.log("이미예약한거:", response.data);
        setReservations(response.data);
      } catch (error) {
        console.error("Error fetching reservations:", error);
      }
    };

    fetchReservations();
  }, []);

  return (
    <Wrapper>
      <Header title="헌혈 예약 내역" />
      <ReservationCard reservations={reservations} />
    </Wrapper>
  );
};

export default ReservationList;
