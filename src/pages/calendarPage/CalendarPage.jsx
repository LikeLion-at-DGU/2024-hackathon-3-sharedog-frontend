import React, { useState, useEffect } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Header from './header/Header';
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Wrapper, Container, Title, Image, TextContent, HosInfo, HosName, HosDetail, HosPhone, NextBtn, Week, Time, TimeSelect, TimeContainer, Am, AmText, Pm, PmText, TimeButton, Color } from "./Styled";
import VectorIcon from '../../assets/icons/Vector.svg?react';
import PhoneIcon from '../../assets/icons/Phone.svg?react';
import moment from 'moment';
import LeftSVG from "../../assets/icons/Left.svg?react";
import RightSVG from "../../assets/icons/Right.svg?react";
import { API } from '../../api';

const CalendarContainer = styled.div`
  margin-top: 2vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .react-calendar {
    width: 100%;
    border-radius: 14.576px;
    border: 1px solid var(--Color-Gray-Gray01, #EAEAEA);
    background: #FFF;
    padding: 15px;
  }

  /* 년-월 */
  .react-calendar__navigation__label > span {
    color: var(--Gray-Black, #333333);
    font-family: SUIT;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  /* 년-월 영역 클릭 비활성화 */
  .react-calendar__navigation {
    pointer-events: none;
  }

  /* 요일 */
  .react-calendar__month-view__weekdays__weekday {
    color: #333333;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .react-calendar__month-view__days__day--weekend {
    color: #FF6969;
    font-weight: bold;
    width: 44px;
    height: 44px;
    text-align: center;
  }

  .react-calendar__month-view__weekdays__weekday--weekend abbr {
    color: #5C80FF; /* 토요일의 글자색 */
  }

  .react-calendar__month-view__weekdays__weekday--weekend:last-of-type abbr {
    color: #FF6969; /* 일요일의 글자색 */
  }

  /* 이번 달 일자 */
  .react-calendar__tile {
    color: #333333;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
  }

  /* 저번 달 & 다음 달 일자 */
  .react-calendar__month-view__days__day--neighboringMonth {
    color: #333333;
    font-weight: bold;
    width: 44px;
    height: 44px;
  }

  /* 오늘 날짜 */
  .react-calendar__tile--now {
    background-color: #FFFFFF;
    color: #333333;
    font-weight: bold;
    border-radius: 50px;
  }

  /* 선택된 날짜의 배경색 변경 */
  .react-calendar__tile--active {
    background-color: #FF6969;
    color: #FFFFFF;
    border-radius: 50%;
    font-family: SUIT;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .react-calendar__tile--hasActive {
    background: #FF6969;
  }

  .react-calendar__tile--active:enabled:hover, .react-calendar__tile--active:enabled:focus {
    background: #FF6969;
  }

  .react-calendar__navigation__arrow {
    background: none !important; /* 기본 배경색 제거 */
    border: none; /* 기본 테두리 제거 */
    cursor: pointer; /* 커서 변경 */
    pointer-events: auto; /* 화살표 버튼은 클릭 가능하게 설정 */
  }

  .react-calendar__navigation__arrow:hover {
    background: none !important; /* 호버 시 배경색 제거 */
  }

  .react-calendar__navigation__arrow:active {
    background: none !important; /* 클릭 시 배경색 제거 */
  }

  .react-calendar__tile--holiday {
    color: #FF6969;
  }

  .react-calendar__tile--holiday.react-calendar__tile--active {
    color: #FFF; /* 클릭 시 공휴일 날짜의 글자 색상 설정 */
  }

  /* 일정 있는 날 표시 점 */
  .dot {
    height: 8px;
    width: 8px;
    background-color: #FF6969;
    border-radius: 50%;
    text-align: center;
    margin-top: 3px;
  }
`;

const CalendarPage = () => {
  const { id } = useParams(); 
  const navigate = useNavigate(); 
  const [selectedDate, setSelectedDate] = useState(new Date()); 
  const [activeTime, setActiveTime] = useState(null); 
  const [hospital, setHospital] = useState(null); 

  useEffect(() => {
    const fetchHospital = async () => {
      try {
        const response = await API.get(`/api/hospital/home/${id}`);
        setHospital(response.data);
        console.log("병원 정보:", response.data);
      } catch (error) {
        console.error('병원 데이터를 가져오는 중 오류 발생:', error);
      }
    };

    fetchHospital();
  }, [id]);

  const handleDateChange = newDate => {
    setSelectedDate(newDate);
  };

  const mark = [moment().format('YYYY-MM-DD')]; 

  const holidays = [
    '2024-01-01',
    '2024-01-22',
    '2024-03-01',
    '2024-05-01',
    '2024-08-15',
    '2024-10-03',
    '2024-10-09',
    '2024-12-25',
  ];

  const postData = async () => {
    console.log("전송할 데이터:", {
      selectedDate: moment(selectedDate).format('YYYY-MM-DD'),
      activeTime
    });
  
    try {
      const response = await API.post(`/api/hospital/home/${id}/reservation`, {
        selectedDate: moment(selectedDate).format('YYYY-MM-DD'),
        activeTime
      });
      console.log(response.data);
      navigate(`/map/${id}?date=${moment(selectedDate).format('YYYY-MM-DD')}&time=${activeTime}`);
    } catch (error) {
      const errorMessage = error.response ? error.response.data : error.message;
      console.error("오류 상세:", errorMessage);
    }
  };

  const isButtonDisabled = !selectedDate || !activeTime;

  return (
    <>
      <Header/>
      <Wrapper>
        <Container>
          {hospital ? (
            <>
              <Image src={hospital.image} alt={hospital.name} />
              <HosInfo>
                <HosName>
                  <Title>{hospital.name}</Title>
                </HosName>
                <HosDetail>
                  <TextContent><VectorIcon /> {hospital.place}</TextContent>
                  <HosPhone><PhoneIcon /> {hospital.tel_num}</HosPhone>
                </HosDetail>
              </HosInfo>
            </>
          ) : (
            <p>Loading...</p>
          )}
          <Week>헌혈 희망 요일</Week>
          <CalendarContainer>
            <Calendar 
              onChange={handleDateChange} 
              value={selectedDate}
              formatDay={(local, date) => moment(date).format("D")}
              nextLabel={<RightSVG/>} 
              prevLabel={<LeftSVG/>} 
              next2Label={null}
              prev2Label={null}
              tileContent={({ date }) => {
                const isMarked = mark.includes(moment(date).format('YYYY-MM-DD'));
                return (
                  <div className="flex justify-center items-center absoluteDiv">
                    {isMarked && <div className="dot" />}
                  </div>
                );
              }}
              minDate={moment().toDate()}
              maxDate={moment().add(2, 'months').endOf('month').toDate()}
              tileClassName={({ date, view }) => {
                if (view === 'month' && holidays.includes(moment(date).format('YYYY-MM-DD'))) {
                  return 'react-calendar__tile--holiday';
                }
                if (moment(date).isSame(selectedDate, 'day')) {
                  return 'react-calendar__tile--active';
                }
                return null;
              }}
            />
          </CalendarContainer>
          <TimeSelect>
            <Time>헌혈 희망 시간</Time>
            <TimeContainer>
              <Am>
                <AmText>오전</AmText>
                <TimeButton 
                  active={activeTime === '오전 10시'} 
                  onClick={() => setActiveTime('오전 10시')}>
                  10:00
                </TimeButton>
              </Am>
              <Pm>
                <PmText>오후</PmText>
                <TimeButton 
                  active={activeTime === '오후 13시'} 
                  onClick={() => setActiveTime('오후 13시')}>
                  13:00
                </TimeButton>
                <TimeButton 
                  active={activeTime === '오후 15시'} 
                  onClick={() => setActiveTime('오후 15시')}>
                  15:00
                </TimeButton>
              </Pm>
            </TimeContainer>
          </TimeSelect>
          <Color>
            <NextBtn disabled={isButtonDisabled} onClick={() => !isButtonDisabled && postData()}>
              다음
            </NextBtn>
          </Color>
        </Container>
      </Wrapper>
    </>
  );
}

export default CalendarPage;
