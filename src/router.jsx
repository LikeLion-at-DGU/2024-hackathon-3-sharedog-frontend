// Router.jsx

import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Splash from './pages/splashPage/Splash';
import Login from './pages/loginPage/Login';
import Home from './pages/homePage/Home';
import NotFound from './pages/NotFound/NotFound';
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
        // 메인페이지
        { path: '/', element: <Splash /> }, // 스플래시 화면
        { path: '/login', element: <Login /> }, // 로그인 화면
        { path: '/home', element: <Home /> }, // 홈 화면
        ],
        errorElement: <NotFound />,
    },
]);

export default router;