//긴급헌혈 상세페이지 게시글내용 카드 컴포넌트 

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular, faCommentDots as faCommentDotsRegular } from "@fortawesome/free-regular-svg-icons";
import D from './Styled'; // 새로 생성한 스타일 파일을 임포트

// const removePortFromURL = (url) => {
//   if (!url) return url; // url이 없다면 바로 반환
//   const urlObj = new URL(url);
//   urlObj.port = ''; // 포트 번호 제거
//   return urlObj.href; // 수정된 URL 반환
// };

const DetailCard = ({ post, isLiked, likeCount, handleLikeToggle }) => {
  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <D.Wrapper>
      <D.ContentWrapper>
        <D.Header>
          <D.TagWrapper>
            <D.Badge>{post.blood}</D.Badge>
            <D.Tag>{post.region}</D.Tag>
          </D.TagWrapper>
          
          <D.DateText>{post.created_at}</D.DateText>
        </D.Header>
        
        <D.Title>{post.title} <D.Writer>| {post.writer}</D.Writer></D.Title>
        
        <D.Body $hasImage={!!post.image_1}>
          {/* 이미지가 있을때는 출력하기 */}
          {post.image_1 && (
            <D.ImageWrapper>
              <img src={post.image_1} alt={post.title} />
            </D.ImageWrapper>
          )}
          {post.image_2 && (
          <D.ImageWrapper>
              <img src={post.image_2} alt={post.title} />
            </D.ImageWrapper>
          )}
          {post.image_2 && (
            <D.ImageWrapper>
              <img src={post.image_3} alt={post.title} />
            </D.ImageWrapper>
            )}
          <D.Content $hasImage={!!post.image_1}>{post.content}</D.Content>
        </D.Body>
      </D.ContentWrapper>
      
      <D.Footer>
        <D.FooterIcon>
          <D.LikeCount>
            {/* 클릭 시 아이콘 변경 */}
            <D.HeartIcon
              icon={isLiked ? faHeartSolid : faHeartRegular}
              onClick={handleLikeToggle} // onClick 핸들러 추가
            />
            {likeCount}
          </D.LikeCount>
          <D.CommentCount>
            <D.CommentIcon icon={faCommentDotsRegular} />    
            {post.comments_cnt} {/*이거 api에 없는듯이항목 */}
          </D.CommentCount>
        </D.FooterIcon>
      </D.Footer>
    </D.Wrapper>
  );
};

export default DetailCard;