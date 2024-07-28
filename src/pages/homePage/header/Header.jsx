import styled from 'styled-components';

const Wrapper = styled.div`
  display  :flex ;
  justify-content: center;
  width: 100%;
  height: 10vh;

  position: fixed; //헤더가 고정되게하는 코드 
  top: 0;
  z-index: 1;
`;
const Header = () => {
    return (
      <Wrapper>
        <div>헤더 여기서 작업</div>
      </Wrapper>
    );
  };
  
  export default Header;
  