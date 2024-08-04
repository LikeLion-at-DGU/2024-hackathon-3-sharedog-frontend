import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Auth = () => {
  const navigate = useNavigate();
  const params = new URL(document.URL).searchParams;
  const code = params.get('code');
  const [accessToken, setAccessToken] = useState('');
  const [jwtToken, setJwtToken] = useState({ access: '', refresh: '' });
  const [loginError, setLoginError] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    if (code) {
      fetchAccessToken(code);
    }
  }, [code]);

  const fetchAccessToken = async (authCode) => {
    const REST_API_KEY = import.meta.env.VITE_REST_API_KEY;
    const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI;
    const CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET;

    try {
      const response = await fetch('https://kauth.kakao.com/oauth/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${authCode}&client_secret=${CLIENT_SECRET}`
      });

      const data = await response.json();

      if (response.ok) {
        setAccessToken(data.access_token);
        localStorage.setItem('kakaoToken', data.access_token);
        console.log('카카오토큰:', data.access_token);
        fetchUserInfo(data.access_token);
        sendTokenToBackend(data.access_token);
      } else {
        console.error('Error fetching access token:', data);
        setLoginError(`Error fetching access token: ${data.error_description}`);
        throw new Error(data.error_description || 'Failed to fetch access token');
      }
    } catch (error) {
      console.error('Error fetching access token:', error);
      setLoginError(`Error fetching access token: ${error.message}`);
    }
  };

  const fetchUserInfo = async (token) => {
    try {
      const response = await fetch('https://kapi.kakao.com/v2/user/me', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      const userInfo = await response.json();
      console.log('User Info:', userInfo);
    } catch (error) {
      console.error('Failed to fetch user info:', error);
      setLoginError(`Failed to fetch user info: ${error.message}`);
    }
  };

  const sendTokenToBackend = async (token) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/accounts/auth/kakao/`, {
        access_token: token,
      });

      const { access, refresh } = response.data;
      localStorage.setItem('access', access);
      localStorage.setItem('refresh', refresh);
      setJwtToken({ access, refresh });

      fetchBackendUserInfo(access); // 백엔드 사용자 정보 호출
      // navigate('/signuppet'); // 로그인 성공 후 리디렉션
    } catch (error) {
      console.error('Error sending token to backend:', error);
      setLoginError(`Error sending token to backend: ${error.message}`);
    }
  };

  const fetchBackendUserInfo = async (accessToken) => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/accounts/protected/`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });

      setUserInfo(response.data);
      console.log('Backend User Info:', response.data);
    } catch (error) {
      console.error('Failed to fetch backend user info:', error);
      setLoginError(`Failed to fetch backend user info: ${error.message}`);
    }
  };

  return (
    <div>
      {code ? <p>인증 코드: {code}</p> : <p>인증 코드가 URL에 없습니다.</p>}
      {accessToken && <p>Access Token: {accessToken}</p>}
      {jwtToken.access && <p>JWT Access Token: {jwtToken.access}</p>}
      {jwtToken.refresh && <p>JWT Refresh Token: {jwtToken.refresh}</p>}
      {loginError && <p style={{ color: 'red' }}>로그인 실패: {loginError}</p>}
      {userInfo && (
        <div>
          <h3>사용자 정보:</h3>
          <p>이름: {userInfo.username}</p>
          <p>이메일: {userInfo.email}</p>
          {/* 추가적인 사용자 정보가 있다면 여기에 표시 */}
        </div>
      )}
    </div>
  );
};

export default Auth;