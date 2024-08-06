// APP 담당자: 이동건 
import Header from './pages/homePage/header/Header';
import Footer from './components/footer/Footer';
import { GlobalStyle } from './GlobalStyle';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

const Wrapper = styled.div`
  min-width: 360px;
  max-width:600px;

  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  overflow: hidden;//스크롤설정
  /* background-color: #FAFAFC; */
`;
const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  overflow-y: auto; //스크롤설정
`;
const FooterWrapper = styled.div` //스크롤설정 
  flex-shrink: 0; /* Footer가 줄어들지 않도록 고정 */
`;
const Layout = () => {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === '/' 
        || location.pathname === '/login' || location.pathname === '/signupsplash' 
        || location.pathname === '/signup' || location.pathname === '/SignUpPet'
        || location.pathname === '/testFirst' || location.pathname === '/testSecond'
        || location.pathname === '/testThird' || location.pathname === '/testFourth'
        || location.pathname === '/testFifth' || location.pathname === '/testSixth'
        || location.pathname === '/Result1' || location.pathname === '/Result2';
        || location.pathname === '/testFifth' || location.pathname === '/testSixth'
        || location.pathname === '/auth/kakao/callback' ;

  return (
    <Wrapper>
      {/* {!hideHeaderFooter && <Header />} */}
      <MainContent>
        <Outlet />
      </MainContent>
      {!hideHeaderFooter && ( //스크롤설정
        <FooterWrapper>
        <Footer />
      </FooterWrapper>
      )}
      
      
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