import React from "react";
import styled from "styled-components";
import VideoCard from "../Components/VideoCard";
import { useFetchFeed } from "../Hooks/useFetchFeed";
import dummyVideos from "../assets/FetchVideosDummy";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Home = () => {
  const dummyData = dummyVideos.contents;
  const { videos, isLoading } = useFetchFeed();

  console.log({ videos, isLoading });

  return (
    <Container>
      {!isLoading ? (
        videos.map(({ video }, index) => {
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
        })
      ) : (
        <h1>Loading...</h1>
      )}
    </Container>
  );
};

export default Home;
