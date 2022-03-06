import React from 'react';
import styled from 'styled-components';

const StyledVideo = styled.video`
  width: 100%;
`;

interface VideoProps {
  videoSrcURL: string;
  videoTitle: string;
}

const Video = ({ videoSrcURL, videoTitle }: VideoProps) => (
  <StyledVideo src={videoSrcURL} title={videoTitle} controls>
    <source src={videoSrcURL} type="video/mp4" />
  </StyledVideo>
);
export default Video;
