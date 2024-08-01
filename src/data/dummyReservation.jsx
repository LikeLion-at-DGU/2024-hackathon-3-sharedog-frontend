import kuHos from '../assets/images/KuHos.jpg';
import adeHos from '../assets/images/AdeHos.jpg';
import seoulHos from '../assets/images/SeoulHos.jpg';

const dummyReservation =[
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
    "name": "로뎀나무 동물의료센터",
    "region": "경기",
    "place": "경기 양주시 고읍로 166",
    "created_at": "2024-07-29T16:21:08.354438",
    "updated_at": "2024-07-29T16:21:08.354438",
    "image": null
  },
  {
    "id": 6,
    "name": "24시 동탄 이음 동물의료센터",
    "region": "경기",
    "place": "경기 화성시 동탄대로6길 15 2층 이음동물의료센터",
    "created_at": "2024-07-29T16:21:08.354438",
    "updated_at": "2024-07-29T16:21:08.354438",
    "image": null
  },
  {
    "id": 7,
    "name": "24시 더휴 동물의료센터",
    "region": "경상",
    "place": "부산 동래구 온천장로 20 신화타워아파트 상가 1층",
    "created_at": "2024-07-29T16:21:08.354438",
    "updated_at": "2024-07-29T16:21:08.354438",
    "image": null
  },
  {
    "id": 8,
    "name": "다솜 동물 메디컬센터",
    "region": "경상",
    "place": "부산 남구 수영로13번길 3",
    "created_at": "2024-07-29T16:21:08.354438",
    "updated_at": "2024-07-29T16:21:08.354438",
    "image": null
  },
  {
    "id": 9,
    "name": "시지 W 동물의료센터",
    "region": "경상",
    "place": "대구 수성구 달구벌대로 3223 1층, 시지 W 동물의료센터",
    "created_at": "2024-07-29T16:21:08.354438",
    "updated_at": "2024-07-29T16:21:08.354438",
    "image": null
  },
  {
    "id": 10,
    "name": "탑스 동물 메디컬센터",
    "region": "경상",
    "place": "대구 달서구 월배로 166 탑스빌딩 1, 2층",
    "created_at": "2024-07-29T16:21:08.354438",
    "updated_at": "2024-07-29T16:21:08.354438",
    "image": null
  },
  {
    "id": 11,
    "name": "대구 24시 바른 동물 의료센터",
    "region": "경상",
    "place": "대구 달서구 와룡로 142 2층",
    "created_at": "2024-07-29T16:21:08.354438",
    "updated_at": "2024-07-29T16:21:08.354438",
    "image": null
  },
  {
    "id": 12,
    "name": "24시 범어 동물 의료센터",
    "region": "경상",
    "place": "대구 수성구 달구벌대로 2354",
    "created_at": "2024-07-29T16:21:08.354438",
    "updated_at": "2024-07-29T16:21:08.354438",
    "image": null
  },
  {
    "id": 13,
    "name": "울산 에스 동물 메디컬센터",
    "region": "경상",
    "place": "울산 남구 삼산로 160",
    "created_at": "2024-07-29T16:21:08.354438",
    "updated_at": "2024-07-29T16:21:08.354438",
    "image": null
  },
  {
    "id": 14,
    "name": "울산 원헬스 동물병원",
    "region": "경상",
    "place": "울산 남구 북부순환도로 23 경민빌딩 1층 원헬스동물의료센터",
    "created_at": "2024-07-29T16:21:08.354438",
    "updated_at": "2024-07-29T16:21:08.354438",
    "image": null
  },
  {
    "id": 15,
    "name": "24시 포항 이음 동물 의료센터",
    "region": "경상",
    "place": "경북 포항시 남구 효성로93번길 4 가동 1층",
    "created_at": "2024-07-29T16:21:08.354438",
    "updated_at": "2024-07-29T16:21:08.354438",
    "image": null
  },
  {
    "id": 16,
    "name": "천안 24시 스카이 동물 메디컬센터",
    "region": "충청",
    "place": "충남 천안시 서북구 동서대로 165 프라지움 11차 2층",
    "created_at": "2024-07-29T16:21:08.354438",
    "updated_at": "2024-07-29T16:21:08.354438",
    "image": null
  },
  {
    "id": 17,
    "name": "충남대학교 동물병원",
    "region": "충청",
    "place": "대전 유성구 대학로 99",
    "created_at": "2024-07-29T16:21:08.354438",
    "updated_at": "2024-07-29T16:21:08.354438",
    "image": null
  },
  {
    "id": 18,
    "name": "고려 동물 메디컬센터",
    "region": "충청",
    "place": "충북 청주시 서원구 사직대로 246 24시 청주 고려동물메디컬센터",
    "created_at": "2024-07-29T16:21:08.354438",
    "updated_at": "2024-07-29T16:21:08.354438",
    "image": null
  },
  {
    "id": 19,
    "name": "24시 청주 이음 동물 의료센터",
    "region": "충청",
    "place": "충북 청주시 흥덕구 2순환로 1112 2층 이음동물의료센터",
    "created_at": "2024-07-29T16:21:08.354438",
    "updated_at": "2024-07-29T16:21:08.354438",
    "image": null
  },
  {
    "id": 20,
    "name": "광주 동물 메디컬센터",
    "region": "전라",
    "place": "광주 광산구 북문대로420번길 206",
    "created_at": "2024-07-29T16:21:08.354438",
    "updated_at": "2024-07-29T16:21:08.354438",
    "image": null
  },
  {
    "id": 21,
    "name": "제주대학교 아라캠퍼스 부설 동물병원",
    "region": "제주",
    "place": "제주 제주시 제주대학로 102 동물병원",
    "created_at": "2024-07-29T16:21:08.354438",
    "updated_at": "2024-07-29T16:21:08.354438",
    "image": null
  }
];

export default dummyReservation;
  //마찬가지로 다른파일에서 사용할거면 export설정