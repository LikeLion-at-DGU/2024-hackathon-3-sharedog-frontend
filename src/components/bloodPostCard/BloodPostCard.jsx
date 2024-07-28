// 긴급헌혈페이지 작성게시글 보여주는 카드(마이페이지에서도 사용가능)담당자:이동건
import { Wrapper,ContentWrapper, Header,Body, Title, Writer, Content, Footer, Badge,
     Tag, DateText,LikeCount, CommentCount,CommentIcon, ImageWrapper,  FooterIcon, HeartIcon
    
    } from './Styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart as faHeartSolid, } 
    from "@fortawesome/free-solid-svg-icons";
import {faHeart as faHeartRegular,faCommentDots as faCommentDotsRegular } 
from "@fortawesome/free-regular-svg-icons";
import React, { useState } from 'react'; //하트 클릭하면 채워지게 만들려고 

const BloodPostCard= ({ image, title, content, date, commentsCount, likes, bloodType, region, writer })=> {
    
    const [isLiked, setIsLiked] = useState(false);

    const handleLikeToggle = () => {
        setIsLiked(!isLiked);
    };

    return (
        <Wrapper>
            <ContentWrapper>
                <Header> 
                    <Badge>{bloodType}</Badge>
                    <Tag>{region}</Tag>
                    <DateText>{new Date(date).toLocaleDateString()}</DateText>
                </Header>
                
                <Title>{title} <Writer>| {writer}</Writer></Title>
                
                <Body $hasImage={!!image}>
                    {/* 이미지가 있을때는 출력 */}
                    {image && (
                        <ImageWrapper>
                        <img src={image} alt={title} />
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