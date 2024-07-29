import React, { useState } from 'react';
import styled from 'styled-components';
import PostDropdown from './PostDropDown';
import { API } from '../../api';
import { useNavigate } from 'react-router-dom';
const FormContainer = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  height: 100px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const PostWrite = () => {
    const [region, setRegion] = useState('');
    const [blood, setBloodType] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate(); // 네비게이션 훅 사용

    
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      // 필드 검증: 여기에서만 검증을 수행
    if (!title.trim() || !content.trim() || !region || !blood) {
        alert('모든 필드를 올바르게 입력해주세요.');
        return;
      }
  
      const postData = {
        region,
        blood,
        title,
        content
      };
  
      console.log('보내는 데이터:', postData); // 보낸 데이터 로그
  
      try {
        const response = await API.post('/api/community/posts', postData);
        if (response.status === 201) { // POST 요청 성공 상태 코드 확인
          alert('Post 성공 :)');
          navigate('/'); // 홈페이지로 이동
        } else {
          alert('Post 실패 :(');
          console.log('게시글 등록 실패:', response.data);
        }
      } catch (error) {
        alert('Post 실패 :(');
        console.error('게시글 등록 실패그냥실패:', error.response ? error.response.data : error.message);
      }
    };
  
    return (
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <PostDropdown label="지역" options={["서울", "인천", "경기", "강원", "경상", "충청", "전라", "제주"]} selected={region} setSelected={setRegion} />
          <PostDropdown label="혈액형" options={["DEA 1-", "DEA 1.1", "DEA 1.2", "DEA 3", "DEA 4", "DEA 5", "DEA 7"]} selected={blood} setSelected={setBloodType} />
          <Input placeholder="제목을 입력하세요." value={title} onChange={(e) => setTitle(e.target.value)} />
          <TextArea placeholder="내용을 입력하세요." value={content} onChange={(e) => setContent(e.target.value)} />
          <Button type="submit">게시글 등록</Button>
        </form>
      </FormContainer>
    );
  };
  
  export default PostWrite;