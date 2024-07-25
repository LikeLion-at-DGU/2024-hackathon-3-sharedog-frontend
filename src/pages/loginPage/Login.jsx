import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/home'); // 버튼 클릭 시 홈 페이지로 이동
  };

    return (
    <>
        <div>로그인 화면</div>
        <button onClick={handleLogin} >홈으로 이동</button>
    </>
    
    
    )
};

export default Login;

