// 긴급헌혈페이지 담당자: 이동건
import dummyBloodPost from "../../data/dummyBloodPost";
import {
    Wrapper,
} from './Styled';
import Header from './header/Header';
const BloodPost = () => {
    return (
    <>
    <Header /> 
    {/* 이런식으로 헤더를 각페이지에서 따로 임포트시키는게 나을듯요  */}
    <Wrapper>
        <div>긴급헌혈페이지</div>
    </Wrapper>
    </>
    )
};

export default BloodPost;

{/* <div>
    {dummyReservation.map(hospital => (
        <div key={hospital.id} style={{ display: 'flex', alignItems: 'center', border: '1px solid #ccc', borderRadius: '5px', padding: '10px', marginBottom: '10px' }}>
         <img src={hospital.image} alt={`${hospital.name}_image`} style={{ width: '100px', height: '100px', marginRight: '20px' }} />
        <div>
            <h1>{hospital.name}</h1>
            <p>{hospital.place}</p>
        </div>
</div> */}