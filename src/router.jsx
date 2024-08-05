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
import PetInfo from "./pages/myPage/PetInfo";
import PetEdit from "./pages/myPage/PetEdit";
import PetRegister from "./pages/myPage/PetRegister";
import AccountManage from "./pages/myPage/AccountManage";
import ReservationList from "./pages/myPage/ReservationList";
import PostWrite from "./pages/postWritePage/PostWrite";
import SignUp from "./pages/signupPage/SignUp";
import SignUpPet from "./pages/signupPage/SignUpPet";
import SignUpSplash from "./pages/signupSplashPage/SignUpSplash";
import BloodPostDetail from "./pages/bloodPostDetailPage/BloodPostDetail";
import CalendarPage from "./pages/calendarPage/CalendarPage";
import MapPage from "./pages/mapPage/Map";
import StandardPage from "./pages/explainPage/Standard";
import MyPost from "./pages/myPage/MyPost";

import TestFirst from "./pages/testPage/TestFirst";
import CommentPost from "./pages/myPage/CommentPost";
import LikePost from "./pages/myPage/LikePost";
import TestSecond from "./pages/testPage/TestSecond";
// import TestThird from "./pages/testPage/TestThird";
// import TestFourth from "./pages/testPage/TestFourth";
// import TestFifth from "./pages/testPage/TestFifth";
// import TestSixth from "./pages/testPage/TestSixth";
// import TestFinal from "./pages/testPage/TestFinal";

import Auth from "./pages/loginPage/Auth";
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
      { path: "/mypagemain", element: <MyPageMain /> }, // 마이페이지 화면
      { path: "/mypageedit", element: <MyPageEdit /> }, // 마이페이지 프로필 수정 화면
      { path: "/petinfo", element: <PetInfo /> }, // 반려견 프로필 수정 화면
      { path: "/petedit", element: <PetEdit /> }, // 반려견 프로필 수정 화면
      { path: "/petregister", element: <PetRegister /> }, // 반려견 프로필 수정 화면
      { path: "/accountmanage", element: <AccountManage /> }, // 마이페이지 계정 관리 화면
      { path: "/reservationlist", element: <ReservationList /> }, // 마이페이지 헌혈 예약 내역 화면
      { path: "/postwrite", element: <PostWrite /> }, // 긴급헌혈에서 글쓰기 화면
      { path: "/signup", element: <SignUp /> }, //회원가입 화면
      { path: "/signuppet", element: <SignUpPet /> }, //회원가입 반려견 정보 화면
      { path: "/signupsplash", element: <SignUpSplash /> }, //회원가입 완료 화면
      { path: "/calendarPage/:id", element: <CalendarPage /> }, //달력 화면
      { path: "/map/:id", element: <MapPage /> }, //지도 화면
      { path: "/standard", element: <StandardPage /> }, //헌혈 기준 화면
      { path: "/auth/kakao/callback", element: <Auth /> },
      { path: "/mypost", element: <MyPost /> }, //내가 쓴 글 화면
      { path: "/commentpost", element: <CommentPost /> }, //내가 댓글 단 글 화면
      { path: "/likepost", element: <LikePost /> }, //내가 좋아요 한 글 화면
      { path: "/testFirst", element: <TestFirst /> }, //테스트 1번째 페이지
      { path: "/testSecond", element: <TestSecond /> }, //테스트 2번째 페이지
      // { path: "/testThird", element: <TestThird /> }, //테스트 3번째 페이지
      // { path: "/testFourth", element: <TestFourth /> }, //테스트 4번째 페이지
      // { path: "/testFifith", element: <TestFifth /> }, //테스트 5번째 페이지
      // { path: "/testSixth", element: <TestSixth /> }, //테스트 6번째 페이지
      // { path: "/testFinal", element: <TestFinal /> } //테스트 마지막 페이지
      { path: "/PetEdit/:id", element: <PetEdit /> } /* 경로 추가 */,
    ],
    errorElement: <NotFound />, // 일치하는 경로가 없을 때 표시할 컴포넌트
  },
]);

export default router;
