import { Wrapper,} from './Styled';
import React from "react";
import Header from './header/Header';
import dummyReservation from "../../data/dummyReservation";
//임포트할때 default export는중괄호 없이 사용 +경로수정 -이동건

const BloodReservation = () => {
  return (
    <div>
      <input type="text" placeholder="검색어를 입력하세요." style={{ width: '100%', padding: '10px', marginBottom: '20px' }} />
      <div>
        {dummyReservation.map(hospital => (
          <div key={hospital.id} style={{ display: 'flex', alignItems: 'center', border: '1px solid #ccc', borderRadius: '5px', padding: '10px', marginBottom: '10px' }}>
            <img src={hospital.image} alt={`${hospital.name}_image`} style={{ width: '100px', height: '100px', marginRight: '20px' }} />
            <div>
              <h1>{hospital.name}</h1>
              <p>{hospital.place}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BloodReservation;
