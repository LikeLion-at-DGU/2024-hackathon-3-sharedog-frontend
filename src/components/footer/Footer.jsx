import styled from 'styled-components';

const Wrapper = styled.div`
  display  :flex ;
  justify-content: center;
  width: 100%;
  height: 10vh; //높이 유지해주세요!!
`;

const Footer = () => {
    return (
      <Wrapper>
        <div>푸터 여기서 작업</div>
      </Wrapper>
    );
  };
  
  export default Footer;