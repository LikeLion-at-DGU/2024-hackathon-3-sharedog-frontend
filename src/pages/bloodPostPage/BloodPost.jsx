// 긴급헌혈페이지 담당자: 이동건
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
    