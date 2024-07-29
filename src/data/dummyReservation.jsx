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
  }, 
  {
    "id": 4,
    "name": "일산동물의료원",
    "region": "경기",
    "place": "경기 고양시 일산서구 대화로 407",
    "created_at": "2024-07-29T16:21:08.354438",
    "updated_at": "2024-07-29T16:21:08.354438",
    "image": null
},
{
    "id": 5,
    "name": "24시 더휴 동물의료센터",
    "region": "경상",
    "place": "부산 동래구 온천장로 20 신화타워아파트 상가 1층",
    "created_at": "2024-07-29T16:21:08.681353",
    "updated_at": "2024-07-29T16:21:08.681353",
    "image": null
},
{
  "id": 6,
  "name": "다솜 동물 메디컬센터",
  "region": "경상",
  "place": "부산 남구 수영로13번길 3",
  "created_at": "2024-07-29T16:21:08.681353",
  "updated_at": "2024-07-29T16:21:08.681353",
  "image": null
},
{
  "id": 7,
  "name": "충남대학교 동물병원",
  "region": "충청",
  "place": "대전 유성구 대학로 99",
  "created_at": "2024-07-29T16:21:08.681353",
  "updated_at": "2024-07-29T16:21:08.681353",
  "image": null
},
{
  "id": 8,
  "name": "광주 동물 메디컬센터",
  "region": "전라",
  "place": "광주 광산구 북문대로420번길 206",
  "created_at": "2024-07-29T16:21:08.681353",
  "updated_at": "2024-07-29T16:21:08.681353",
  "image": null
},
{
  "id": 9,
  "name": "제주대학교 아라캠퍼스 부설 동물병원",
  "region": "제주",
  "place": "제주 제주시 제주대학로 102 동물병원",
  "created_at": "2024-07-29T16:21:08.681353",
  "updated_at": "2024-07-29T16:21:08.681353",
  "image": null
}
];

export default dummyReservation;
  //마찬가지로 다른파일에서 사용할거면 export설정