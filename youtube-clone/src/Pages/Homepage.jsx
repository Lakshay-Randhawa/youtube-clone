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
      {/* <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card /> */}
      {dummyData.map(({ video }) => {
        const authorAvatar = video.author.avatar[0].url;
        // console.log(video);
        return (
          <VideoCard
            key={video.id}
            authorAvatar={authorAvatar}
            title={video.title}
            thumbnail={video.thumbnails[0].url}
            channelName={video.author.name}
            views={video.stats.viewers}
          />
        );
      })}
    </Container>
  );
};

export default Home;
