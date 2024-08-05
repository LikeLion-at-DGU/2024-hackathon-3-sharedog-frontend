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

const BloodPostCard = ({ id, image, title, content, date, commentsCount, likes, bloodType, region, writer,is_liked }) => {
    return (
        <Wrapper>
            <NavLink to={`/bloodPost/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}> {/* 링크 추가 */}
                <ContentWrapper>
                    <Header>
                        <TagWrapper>
                        <Tag>{region}</Tag>
                            <Badge>{bloodType}</Badge>
                            
                        </TagWrapper>
                        <DateText>{date}</DateText>
                    </Header>
                    <Title>{title} <Writer>| {writer}</Writer></Title>
                    <Body $hasImage={!!image}>
                        {/* 이미지가 있을때는 출력하기 */}
                        {image && (
                            <ImageWrapper>
                                <img src={image} alt={title} />
                            </ImageWrapper>
                        )}
                        <Content $hasImage={!!image}>{content}</Content>
                    </Body>
                </ContentWrapper>
            </NavLink>
            <Footer>
                <FooterIcon>
                    <LikeCount>
                        {/* 클릭 기능을 제거하고 상태에 따라 아이콘을 렌더링 */}
                        <HeartIcon icon={is_liked ? faHeartSolid : faHeartRegular} />
                        {likes}
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