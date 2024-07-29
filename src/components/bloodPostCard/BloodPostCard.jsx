// 긴급헌혈페이지 작성게시글 보여주는 카드(마이페이지에서도 사용가능)담당자:이동건
import { Wrapper,ContentWrapper, Header,TagWrapper,Body, Title, Writer, Content, Footer, Badge,
     Tag, DateText,LikeCount, CommentCount,CommentIcon, ImageWrapper,  FooterIcon, HeartIcon
    
    } from './Styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart as faHeartSolid, } 
    from "@fortawesome/free-solid-svg-icons";
import {faHeart as faHeartRegular,faCommentDots as faCommentDotsRegular } 
from "@fortawesome/free-regular-svg-icons";
import React, { useState } from 'react'; //하트 클릭하면 채워지게 만들려고 
import { API } from '../../api';
//이미지 url포트번호 제거하는 함수 
const removePortFromURL = (url) => {
    if (!url) return url; // url이 없다면 바로 반환
    const urlObj = new URL(url);
    urlObj.port = ''; // 포트 번호 제거
    return urlObj.href; // 수정된 URL 반환
  }

  
const BloodPostCard= ({ id,image, title, content, date, commentsCount, likes, bloodType, region, writer })=> {
    
    const [isLiked, setIsLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(likes); // 수정됨: 현재 게시글의 좋아요 수를 저장
    const handleLikeToggle = async () => {
        try {
            console.log('Post ID:', id); // 추가된 콘솔 로그
            // 수정됨: 좋아요 수 업데이트 로직
            const newLikeCount = isLiked ? likeCount - 1 : likeCount + 1; // 좋아요 상태에 따라 증가 또는 감소
            setLikeCount(newLikeCount); // 좋아요 수를 로컬 상태에 즉시 반영
            setIsLiked(!isLiked); // 좋아요 상태를 토글

            // 수정됨: 서버에 좋아요 상태 업데이트 요청
            await API.post(`/api/community/posts/${id}/like_num`, { isLiked: !isLiked });
        } catch (error) {
            console.error('Error updating like status:', error);
            // 수정됨: 에러 발생 시 상태 복구
            setLikeCount(likeCount); // 상태 복구
            setIsLiked(isLiked); // 상태 복구
        }
    };

    return (
        <Wrapper>
            <ContentWrapper>
                <Header>
                    <TagWrapper>
                        <Badge>{bloodType}</Badge>
                        <Tag>{region}</Tag>
                    </TagWrapper>
                    
                    <DateText>{date}</DateText>
                </Header>
                
                <Title>{title} <Writer>| {writer}</Writer></Title>
                
                <Body $hasImage={!!image}>
                    {/* 이미지가 있을때는 출력하기 */}
                    {image && (
                        <ImageWrapper>
                        <img src={removePortFromURL(image)} alt={title} />
                        </ImageWrapper>
                    )}
                    <Content $hasImage={!!image}>{content}</Content>
                </Body>
            </ContentWrapper>
            <Footer>
                <FooterIcon>
                    <LikeCount>
                         {/* 클릭 시 아이콘 변경 */}
                        <HeartIcon
                            icon={isLiked ? faHeartSolid : faHeartRegular}
                            onClick={handleLikeToggle} // onClick 핸들러 추가
                        />
                        {likeCount}
                    </LikeCount>
                    <CommentCount>
                        <CommentIcon icon={faCommentDotsRegular} />    
                        {commentsCount}
                    </CommentCount>
                </FooterIcon>
                
            </Footer>
        </Wrapper>
    );
    
}

export default BloodPostCard;