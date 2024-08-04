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

 /* 토요일과 일요일에 대한 스타일을 설정합니다 */
/* 첫 번째 .react-calendar__month-view__weekdays__weekday--weekend 요소 (토요일) 글자색 변경 */
/* 첫 번째 .react-calendar__month-view__weekdays__weekday--weekend 요소 (토요일) 글자색 변경 */
.react-calendar__month-view__weekdays__weekday--weekend abbr {
    color: #5C80FF; /* 토요일의 글자색 */
}

/* 두 번째 .react-calendar__month-view__weekdays__weekday--weekend 요소 (일요일) 글자색 변경 */
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
  const { id } = useParams(); // URL에서 병원 ID를 가져옵니다.
  const navigate = useNavigate(); // 페이지 이동을 관리하는 훅입니다.
  const [selectedDate, setSelectedDate] = useState(new Date()); // 선택된 날짜를 저장합니다.
  const [activeTime, setActiveTime] = useState(null); // 선택된 시간을 저장합니다.
  const [hospital, setHospital] = useState(null); // 병원 정보를 저장할 상태를 추가합니다.

  useEffect(() => {
    const fetchHospital = async () => {
      try {
        const response = await API.get(`/api/hospital/home/${id}`); // 병원 상세 정보를 가져오는 API 호출
        setHospital(response.data);
        console.log("병원 정보:", response.data);
      } catch (error) {
        console.error('병원 데이터를 가져오는 중 오류 발생:', error);
      }
    };

    fetchHospital();
  }, [id]);

  // 날짜가 변경될 때 호출되는 함수
  const handleDateChange = newDate => {
    setSelectedDate(newDate);
  };

  // 월 변경 처리 함수
  const handleMonthChange = () => {
    // 여기에 월 변경 시 필요한 로직을 작성하세요.
    console.log("월이 변경되었습니다.");
  };

  // 마크된 날짜들 정의 (예시로 현재 날짜만 표시)
  const mark = [moment().format('YYYY-MM-DD')]; // 현재 날짜를 마크된 날짜로 설정합니다.

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

  // 달력에 필요한 값을 설정
  const value = selectedDate;

  const getMinDate = () => {
    const now = moment();
    return now.startOf('month').toDate(); // 현재 달의 시작 날짜
  };

  const getMaxDate = () => {
    const now = moment();
    return now.add(2, 'months').endOf('month').toDate(); // 현재 달부터 두 달 후의 마지막 날짜
  };

  const postData = async () => {
    console.log("Sending data:", {
      selectedDate: moment(selectedDate).format('YYYY-MM-DD'),
      activeTime
    });

    try {
      const response = await API.post(`/api/hospital/home/${id}/reservation`, {
        selectedDate: moment(selectedDate).format('YYYY-MM-DD'),
        activeTime
      });
      alert('성공');
      console.log(response.data);
      navigate('/reservation'); // 성공 후 다음 페이지로 이동
    } catch (error) {
      const errorMessage = error.response ? error.response.data : error.message;
      console.error("Error details:", errorMessage);
      alert(`오류 발생: ${errorMessage}`);
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
                  <HosPhone><PhoneIcon /> {hospital.phone}</HosPhone>
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
              onDrillDown={handleMonthChange}
              value={value}
              formatDay={(local, date) => moment(date).format("D")}
              nextLabel={<RightSVG/>}  // 실제 아이콘으로 대체 가능
              prevLabel={<LeftSVG/>} // 실제 아이콘으로 대체 가능
              next2Label={null}
              prev2Label={null}
              tileContent={({ date, view }) => {
                const html = [];
                if (mark.includes(moment(date).format('YYYY-MM-DD'))) {
                  html.push(<div key={moment(date).format('YYYY-MM-DD')} className="dot"></div>);
                }
                return (
                  <div className="flex justify-center items-center absoluteDiv">
                    {html}
                  </div>
                );
              }}
              minDate={getMinDate()}
              maxDate={getMaxDate()}
              tileClassName={({ date, view }) => {
                if (view === 'month') {
                  const now = moment();
                  const month = moment(date).month();
                  const startMonth = now.month();
                  const endMonth = now.add(2, 'months').month();
                  
                  if (holidays.includes(moment(date).format('YYYY-MM-DD'))) {
                    return 'react-calendar__tile--holiday';
                  }

                  const isSelected = moment(date).isSame(selectedDate, 'day');
                  if (isSelected) {
                    return 'react-calendar__tile--active';
                  }

                  return (month < startMonth || month > endMonth) ? 'hide-month' : null;
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
                  active={activeTime === '10:00'} 
                  onClick={() => setActiveTime('10:00')}>
                  10:00
                </TimeButton>
              </Am>
              <Pm>
                <PmText>오후</PmText>
                <TimeButton 
                  active={activeTime === '13:00'} 
                  onClick={() => setActiveTime('13:00')}>
                  13:00
                </TimeButton>
                <TimeButton 
                  active={activeTime === '15:00'} 
                  onClick={() => setActiveTime('15:00')}>
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