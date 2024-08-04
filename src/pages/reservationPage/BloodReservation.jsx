import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Wrapper, RegionButtonsContainer, RegionButtons, RegionButton, HospitalContainer, HospitalCard, HospitalImage, HospitalInfo, HosPlace, VectorIcon } from './Styled';
import Header from './header/Header';
// import dummyReservation from '../../data/dummyReservation';
import styled from "styled-components";

import {API} from '../../api'; // API 모듈 임포트

const BloodReservation = () => {
  const [selectedRegion, setSelectedRegion] = useState('전체');
  const [searchQuery, setSearchQuery] = useState('');
  const [hospitals, setHospitals] = useState([]);//추가한거

  useEffect(() => {
    const fetchHospitals = async () => {
      try {
        const response = await API.get('/api/hospital/home'); // 엔드포인트에 맞게 수정하세요
        setHospitals(response.data);
        console.log("병원목록:",response.data);
      } catch (error) {
        console.error('병원 데이터를 가져오는 중 오류 발생:', error);
      }
    };

    fetchHospitals();
  }, []);

  const handleRegionClick = (region) => {
    setSelectedRegion(region);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // const filteredHospitals = dummyReservation.filter(hospital =>
  //   (selectedRegion === '전체' || hospital.region === selectedRegion) &&
  //   hospital.name.toLowerCase().includes(searchQuery.toLowerCase())
  // );
  const filteredHospitals = hospitals.filter(hospital =>
    (selectedRegion === '전체' || hospital.region === selectedRegion) &&
    hospital.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const HospitalCard = styled(Link)`
  display: flex;
  align-items: center;
  border-radius: 10px;
  border: 1px solid var(--Color-Gray-Gray01, #EAEAEA);
  background: #FFF;
  padding: 10px;
  margin-bottom: 10px;
  text-decoration: none;
  width: 100%;
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

  return (
    <>
      <Header onSearchChange={handleSearchChange} />
      <Wrapper>
        <RegionButtonsContainer>
          <RegionButtons>
            {['전체', '서울', '경기', '경상', '충청', '전라', '제주'].map(region => (
              <RegionButton
                key={region}
                className={selectedRegion === region ? 'active' : ''}
                onClick={() => handleRegionClick(region)}
              >
                {region}
              </RegionButton>
            ))}
          </RegionButtons>
        </RegionButtonsContainer>
        <HospitalContainer>
          {filteredHospitals.map(hospital => (
            <HospitalCard key={hospital.id} to={`/calendarPage/${hospital.id}`}>
              <HospitalImage src={hospital.image} alt={`${hospital.name}_image`} />
              <HospitalInfo>
                <h1>{hospital.name}</h1>
                <HosPlace>
                  <VectorIcon />
                  <p>{hospital.place}</p>
                </HosPlace>
              </HospitalInfo>
            </HospitalCard>
          ))}
        </HospitalContainer>
      </Wrapper>
    </>
  );
}

export default BloodReservation;
