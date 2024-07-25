import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { GlobalStyle } from './GlobalStyle';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

const Wrapper = styled.div`
  min-width: 360px;
  max-width:1024px;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

`;
const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Layout = () => {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === '/' 
        || location.pathname === '/login';

  return (
    <Wrapper>
      {!hideHeaderFooter && <Header />}
      <MainContent>
        <Outlet />
      </MainContent>
      {!hideHeaderFooter && <Footer />}
      
      
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