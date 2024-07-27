import kuHos from '../assets/images/KuHos.jpg';
import adeHos from '../assets/images/AdeHos.jpg';
import seoulHos from '../assets/images/SeoulHos.jpg';

const dummyReservation =[
  //여기 콘스트로 선언해줘야 사용가능함 -이동건
  {
      "id": 1,
      "name": "KU 아임도그너 헌혈센터",
      "region": "서울",
      "place": "서울 광진구 능동로 120 건국대학교 부속 동물병원 2층",
      "created_at": "2024-07-26T12:09:08.354438",
      "updated_at": "2024-07-26T12:09:08.354438",
      "image": kuHos
  },
  {
      "id": 2,
      "name": "서울대학교 관악캠퍼스 수의대 부속 동물병원",
      "region": "서울",
      "place": "서울 관악구 관악로 1",
      "created_at": "2024-07-27T00:51:30.681353",
      "updated_at": "2024-07-27T00:51:30.681353",
      "image": seoulHos
  },
  {
    "id": 3,
    "name": "에이드 동물병원",
    "region": "서울",
    "place": "서울 강남구 논현로 813 1F, B1F",
    "created_at": "2024-07-27T01:38:30.681353",
    "updated_at": "2024-07-27T01:38:30.681353",
    "image": adeHos
  }
];

export default dummyReservation;
  //마찬가지로 다른파일에서 사용할거면 export설정