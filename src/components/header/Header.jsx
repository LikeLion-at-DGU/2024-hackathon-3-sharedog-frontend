import styled from 'styled-components';

const Wrapper = styled.div`
  display  :flex ;
  justify-content: center;
  width: 100%;
  height: 10vh;
`;
const Header = () => {
    return (
      <Wrapper>
        <div>헤더 여기서 작업</div>
      </Wrapper>
    );
  };
  
  export default Header;
  