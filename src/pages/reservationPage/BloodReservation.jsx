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
        {dummyReservation.map(dummyReservation => (
          <div key={dummyReservation.id} style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', marginBottom: '10px' }}>
            <h3>{dummyReservation.name}</h3>
            {/* dummyReservationl이라고 오타 되어있어서 실행안된듯 */}
            <p>{dummyReservation.place}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BloodReservation;
  