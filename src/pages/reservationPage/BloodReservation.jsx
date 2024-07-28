import React from 'react';
import { Wrapper, RegionButtonsContainer, RegionButtons, RegionButton, HospitalContainer, HospitalCard, HospitalImage, HospitalInfo } from './Styled';
import Header from './header/Header';
import dummyReservation from '../../data/dummyReservation';

const BloodReservation = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <RegionButtonsContainer>
          <RegionButtons>
            <RegionButton className="active">서울</RegionButton>
            <RegionButton>경기</RegionButton>
            <RegionButton>경상</RegionButton>
            <RegionButton>충청</RegionButton>
            <RegionButton>전라</RegionButton>
            <RegionButton>제주</RegionButton>
          </RegionButtons>
        </RegionButtonsContainer>
        <HospitalContainer>
          {dummyReservation.map(hospital => (
            <HospitalCard key={hospital.id}>
              <HospitalImage src={hospital.image} alt={`${hospital.name}_image`} />
              <HospitalInfo>
                <h1>{hospital.name}</h1>
                <p>{hospital.place}</p>
              </HospitalInfo>
            </HospitalCard>
          ))}
        </HospitalContainer>
      </Wrapper>
    </>
  );
}

export default BloodReservation;
