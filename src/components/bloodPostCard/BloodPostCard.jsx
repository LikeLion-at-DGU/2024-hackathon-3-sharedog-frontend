// 긴급헌혈페이지 작성게시글 보여주는 카드(마이페이지에서도 사용가능)담당자:이동건
import { Wrapper,ContentWrapper, Header,TagWrapper,Body, Title, Writer, Content, Footer, Badge,
     Tag, DateText,LikeCount, CommentCount,CommentIcon, ImageWrapper,  FooterIcon, HeartIcon
    
    } from './Styled';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart as faHeartSolid, } 
    from "@fortawesome/free-solid-svg-icons";
import {faHeart as faHeartRegular,faCommentDots as faCommentDotsRegular } 
from "@fortawesome/free-regular-svg-icons";

import { NavLink } from 'react-router-dom';//카드 누르면 상세페이지로 이동하려고
import React, { useState } from 'react'; //하트 클릭하면 채워지게 만들려고 
import { API } from '../../api';

//이미지 url포트번호 제거하는 함수 
// const removePortFromURL = (url) => {
//     try {
//         // if (!url || url.includes('None')) {
//         //     console.error('Invalid or missing URL, skipping image display.');
//         //     return null; // 이미지 표시를 건너뛰도록 null 반환
//         // }

//         // 절대 URL로 변환
//         const absoluteUrl = new URL(url, window.location.origin).href;

//         // 절대 URL에서 포트 번호 제거
//         const urlObj = new URL(absoluteUrl);
//         urlObj.port = ''; // 포트 번호 제거
//         return urlObj.href; // 수정된 URL 반환
//     } catch (error) {
//         console.error('Invalid URL:', url, error); // 유효하지 않은 URL 에러 로그
//         return null; // 이미지 표시를 건너뛰도록 null 반환
//     }
// };
//url추가하는 함수 
// const addBaseUrl = (url) => {
//     if (!url) return url;
//     const baseUrl = 'http://52.79.63.140';
//     return url.startsWith('/media') ? `${baseUrl}${url}` : url;
//   };


//   const removePortFromURL = (url) => {
//     if (!url) return url; // url이 없다면 바로 반환
//     const urlObj = new URL(url);
//     urlObj.port = ''; // 포트 번호 제거
//     return urlObj.href; // 수정된 URL 반환
//   };
  
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
            await API.post(`/api/community/posts/${id}/likes`, { isLiked: !isLiked });
        } catch (error) {
            console.error('Error updating like status:', error);
            // 수정됨: 에러 발생 시 상태 복구
            setLikeCount(likeCount); // 상태 복구
            setIsLiked(isLiked); // 상태 복구
        }
    };

    return (
       
        <Wrapper>
             <NavLink to={`/bloodPost/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}> {/* 링크 추가 */}
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
                        <img src={image} alt={title} />
                        {/* {removePortFromURL(image)} */}
                        </ImageWrapper>
                    )}
                    <Content $hasImage={!!image}>{content}</Content>
                </Body>
            </ContentWrapper>
            </NavLink>
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