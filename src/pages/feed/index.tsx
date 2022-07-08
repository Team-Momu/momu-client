import { NextPage } from 'next';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import styled from 'styled-components';

import FeedList from 'components/feed/FeedList';
import MainFeed from 'components/feed/MainFeed';

const Feed: NextPage = () => {
  return (
    <>
      <MainFeed />
      <FeedList />
    </>
  );
};

export default Feed;

const Wrapper = styled.div`
  padding: 0;
  margin: 0;
`;
