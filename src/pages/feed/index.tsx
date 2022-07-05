import { NextPage } from 'next';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import styled from 'styled-components';

import AppLayout from '@common/AppLayout';
import FeedList from 'components/feed/FeedList';

const Feed: NextPage = () => {
  return (
    <Parallax pages={2}>
      <FeedList />
    </Parallax>
  );
};

export default Feed;

const Wrapper = styled.div`
  padding: 0;
  margin: 0;
`;
