import React, { useState } from 'react';
import { Wrapper, RegionButtonsContainer, RegionButtons, RegionButton, HospitalContainer, HospitalCard, HospitalImage, HospitalInfo, HosPlace, VectorIcon } from './Styled';
import Header from './header/Header';
import dummyReservation from '../../data/dummyReservation';

const BloodReservation = () => {
  const [selectedRegion, setSelectedRegion] = useState('서울');

  const handleRegionClick = (region) => {
    setSelectedRegion(region);
  };

  const filteredHospitals = dummyReservation.filter(hospital => hospital.region === selectedRegion);

  return (
    <>
      <Header />
      <Wrapper>
        <RegionButtonsContainer>
          <RegionButtons>
            {['서울', '경기', '경상', '충청', '전라', '제주'].map(region => (
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
            <HospitalCard key={hospital.id}>
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
