import { Wrapper,} from './Styled';
import React from "react";
import Header from './header/Header';
import {dummyReservation} from "../data/dummyReservation";

const BloodReservation = () => {
  return (
    <div>
      <input type="text" placeholder="검색어를 입력하세요." style={{ width: '100%', padding: '10px', marginBottom: '20px' }} />
      <div>
        {dummyReservation.map(dummyReservation => (
          <div key={dummyReservation.id} style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', marginBottom: '10px' }}>
            <h3>{dummyReservationl.name}</h3>
            <p>{dummyReservation.place}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BloodReservation;
  