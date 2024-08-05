import { Wrapper } from "./Styled";
import Header from "./header/Header";
import React from "react";
import { useEffect, useState } from "react";
import { API } from "../../api"; // API 호출을 위한 모듈 임포트
import BloodPostCard from "../../components/bloodPostCard/BloodPostCard";
import styled from "styled-components";

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  width: 90%;
  margin: 0 auto;
  margin-top: 16px;
  margin-bottom: 5px;
  gap: 9px;
`;

const CommentPost = () => {
  const [posts, setPosts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await API.get("/api/users/commentposts");
      console.log("내 데이터:", response.data);
      setPosts(response.data); // 수정된 부분
    } catch (error) {
      console.log("에러입니당:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header title="댓글 단 글" />
      <Wrapper>
        <ContentWrapper>
          {/* 게시물 카드 목록 */}
          {posts &&
            posts.map((post) => (
              <BloodPostCard
                key={post.id}
                id={post.id}
                image={post.image_1}
                title={post.title}
                content={post.content}
                date={post.created_at}
                commentsCount={post.comments_cnt}
                likes={post.like_num}
                bloodType={post.blood}
                region={post.region}
                writer={post.writer}
              />
            ))}
        </ContentWrapper>
      </Wrapper>
    </>
  );
};

export default CommentPost;
