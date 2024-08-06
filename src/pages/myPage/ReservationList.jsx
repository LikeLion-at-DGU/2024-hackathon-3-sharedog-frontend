import { Wrapper } from "./Styled";
import Header from "./header/Header";
import React, { useState, useEffect } from "react";
import ReservationCard from "../../components/myPageComponent/ReservationCard";
import { API } from "../../api";

const ReservationList = () => {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await API.get("/api/users/mypage/reservation-check");
        console.log("이미 예약한 것:", response.data);
        setReservations(response.data);
      } catch (error) {
        setError("예약 정보를 가져오는 데 실패했습니다.");
        console.error("Error fetching reservations:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReservations();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Wrapper>
      <Header title="헌혈 예약 내역" />
      <ReservationCard reservations={reservations} />
    </Wrapper>
  );
};

export default ReservationList;
