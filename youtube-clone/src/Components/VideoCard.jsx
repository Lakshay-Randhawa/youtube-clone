import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import placeholder from "../assets/userPlaceHolder.png";
import { abbreviateNumber } from "js-abbreviation-number";

const Container = styled.div`
  width: ${(props) => props.type !== "sm" && "360px"};
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
  gap: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: ${(props) => (props.type === "sm" ? "120px" : "202px")};
  background-color: #999;
  flex: 1;
`;

const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== "sm" && "16px"};
  gap: 12px;
  flex: 1;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props) => props.type === "sm" && "none"};
`;

const Texts = styled.div``;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 14px;
  font-weight: 800;
  cursor: pointer;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
  :hover {
    text-decoration: underline;
  }
`;

const PublishTime = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;

const Info = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

const InfoWrapper = styled.div`
  display: flex;
  justify-items: space-between;
  width: 100%;
  gap: 10px;
`;

const Card = (props) => {
  const {
    type,
    authorAvatar,
    title,
    thumbnail,
    channelName,
    views,
    id,
    publishedAt,
  } = props;

  return (
    <Link to={`/:${id}`} style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Image type={type} src={thumbnail} alt="Video Image" />
        <Details type={type}>
          <ChannelImage type={type} src={authorAvatar} alt="Channel Image" />
          <Texts>
            <Title>{title}</Title>
            <ChannelName>{channelName}</ChannelName>
            <InfoWrapper>
              <Info>{`${abbreviateNumber(views, 2)} views`}</Info>
              <PublishTime>{publishedAt}</PublishTime>
            </InfoWrapper>
             
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
