import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
// import moment from 'moment'; // 모먼트 사용할 때 필요
import Header from './header/Header';
import { useParams } from 'react-router-dom';
import dummyReservation from '../../data/dummyReservation';
import styled from 'styled-components';
import { Wrapper, Container, Title, Image, TextContent, HosInfo, HosName, HosDetail, HosPhone, NextBtn, Week, Time } from './Styled';
import VectorIcon from '../../assets/icons/Vector.svg?react';
import PhoneIcon from '../../assets/icons/Phone.svg?react';
import { useNavigate } from 'react-router-dom';

const CalendarContainer = styled.div`
  margin: 20px 0;
`;

function CalendarPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [value, onChange] = useState(new Date());
  // hospital 데이터가 존재하는지 확인
  const hospital = dummyReservation.find((hospital) => hospital.id === parseInt(id));
  if (!hospital) {
    console.error('Invalid hospital id');
    return <div>Invalid hospital id</div>;
  }

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <>
      <Header />
      <Wrapper>
        <Container>
          <Image src={hospital.image} alt={hospital.name} />
          <HosInfo>
            <HosName>
              <Title>{hospital.name}</Title>
            </HosName>
            <HosDetail>
              <TextContent>
                <VectorIcon /> {hospital.place}
              </TextContent>
              <HosPhone>
                <PhoneIcon /> {hospital.phone}
              </HosPhone>
            </HosDetail>
          </HosInfo>
          <Week>헌혈 희망 요일</Week>
          <CalendarContainer>
            <Calendar onChange={onChange} value={value}/>
            {/* <div className="text-gray-500 mt-4">
              {moment(value).format("YYYY년 MM월 DD일")} 
            </div> */} 
          </CalendarContainer>
          <Time>헌혈 희망 시간</Time>

          <NextBtn onClick={() => navigate('/next-page')}>다음</NextBtn>
        </Container>
      </Wrapper>
    </>
  );
}

export default CalendarPage;
