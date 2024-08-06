import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular, faCommentDots as faCommentDotsRegular } from "@fortawesome/free-regular-svg-icons";
import D from './Styled'; // 새로 생성한 스타일 파일을 임포트
import DelSVG from '../../../assets/icons/delete.svg?react';

const DetailCard = ({ post, calLiked, likeCount, is_liked, handleLikeToggle, handleDelete }) => { // handleDelete 추가
  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <D.Wrapper>
      <D.ContentWrapper>
        <D.Header>
          <D.TagWrapper>
            <D.Tag>{post.region}</D.Tag>
            <D.Badge>{post.blood}</D.Badge>
          </D.TagWrapper>
          <D.DateText>{post.created_at}
            {post.is_owner && <DelSVG onClick={handleDelete} />} {/* is_owner가 true이면 DelSVG 표시 */}
          </D.DateText>
        </D.Header>
        <D.Title>{post.title} <D.Writer>| {post.writer}</D.Writer></D.Title>
        <D.Body $hasImage={!!post.image_1}>
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
          {post.image_3 && (
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
            <D.HeartIcon
              icon={calLiked ? faHeartSolid : faHeartRegular}
              onClick={handleLikeToggle} // onClick 핸들러 추가
            />
            {likeCount}
          </D.LikeCount>
          <D.CommentCount>
            <D.CommentIcon icon={faCommentDotsRegular} />
            {post.comments_cnt}
          </D.CommentCount>
        </D.FooterIcon>
      </D.Footer>
    </D.Wrapper>
  );
};

export default DetailCard;