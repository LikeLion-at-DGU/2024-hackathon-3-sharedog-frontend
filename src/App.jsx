import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { GlobalStyle } from './GlobalStyle';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  min-width: 360px;
  max-width:1024px;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

`;

const Layout = () => {
  return (
    <Wrapper>
      <Header />
      <Outlet />
      <Footer />
    </Wrapper>
  );
};

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout />
    </>
  );
}

export default App;