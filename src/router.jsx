import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Splash from "./pages/splashPage/Splash";
import Login from "./pages/loginPage/Login";
import Home from "./pages/homePage/Home";
import NotFound from "./pages/NotFound/NotFound";
import BloodPost from "./pages/bloodPostPage/BloodPost";
import BloodReservation from "./pages/reservationPage/BloodReservation";
import MyPageMain from "./pages/myPage/MyPageMain";
import MyPageEdit from "./pages/myPage/MyPageEdit";
import AccountManage from "./pages/myPage/AccountManage";
import PostWrite from "./pages/postWritePage/PostWrite";
import SignUp from "./pages/signupPage/SignUp";
import SignUpPet from "./pages/signupPage/SignUpPet";
import SignUpSplash from "./pages/signupSplashPage/SignUpSplash";

import BloodPostDetail from "./pages/bloodPostDetailPage/BloodPostDetail";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Splash /> }, // 스플래시 화면
      { path: "/login", element: <Login /> }, // 로그인 화면
      { path: "/home", element: <Home /> }, // 홈 화면
      { path: "/bloodPost", element: <BloodPost /> }, // 긴급헐혈 화면
      { path: "/bloodPost/:id", element: <BloodPostDetail /> }, //긴급헌혈 상세게시글 들어가기
      { path: "/reservation", element: <BloodReservation /> }, // 헌열예약 화면
      { path: "/mypage", element: <MyPageMain /> }, // 마이페이지 화면
      { path: "/mypageedit", element: <MyPageEdit /> }, // 마이페이지 프로필 수정 화면
      { path: "/accountmanage", element: <AccountManage /> }, // 마이페이지 계정 관리 화면
      { path: "/postwrite", element: <PostWrite /> }, // 긴급헌혈에서 글쓰기 화면
      { path: "/signup", element: <SignUp /> }, //회원가입 화면
      { path: "/signuppet", element: <SignUpPet /> },
      { path: "/signupsplash", element: <SignUpSplash /> },
    ],
    errorElement: <NotFound />, // 일치하는 경로가 없을 때 표시할 컴포넌트
  },
]);

export default router;
