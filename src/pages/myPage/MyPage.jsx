import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 10vh;
`;
const MyPage = () => {
  return (
    <Wrapper>
      <div>마이페이지입니다.</div>
    </Wrapper>
  );
};

export default MyPage;
