import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Wrapper, RegionButtonsContainer, RegionButtons, RegionButton, HospitalContainer, HospitalCard, HospitalImage, HospitalInfo, HosPlace, VectorIcon } from './Styled';
import Header from './header/Header';
import dummyReservation from '../../data/dummyReservation';
import styled from "styled-components";

const BloodReservation = () => {
  const [selectedRegion, setSelectedRegion] = useState('전체');
  const [searchQuery, setSearchQuery] = useState('');

  const handleRegionClick = (region) => {
    setSelectedRegion(region);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredHospitals = dummyReservation.filter(hospital =>
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
            <HospitalCard key={hospital.id} to={`/calendar/${hospital.id}`}>
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
