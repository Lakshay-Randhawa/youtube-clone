import React from "react";
import styled from "styled-components";
import VideoCard from "../Components/VideoCard";
import { useFetchVideos } from "../Hooks/useFetchVideos";
import videos from "../assets/FetchVideosDummy";
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Home = () => {
  const dummyData = videos.contents;

  return (
    <Container>
      {dummyData.map(({ video }, index) => {
        const authorAvatar = video.author.avatar[0].url;
        return (
          <VideoCard
            key={index}
            id={video.videoId}
            authorAvatar={authorAvatar}
            title={video.title}
            thumbnail={video.thumbnails[0].url}
            channelName={video.author.title}
            publishedAt={video.publishedTimeText}
            views={video.stats.views | video.stats.viewers}
          />
        );
      })}
    </Container>
  );
};

export default Home;
