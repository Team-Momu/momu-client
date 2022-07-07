import { NextPage } from 'next';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import styled from 'styled-components';

import FeedList from 'components/feed/FeedList';

const Feed: NextPage = () => {
  return (
    <Wrapper>
      <FeedList />
    </Wrapper>
  );
};

export default Feed;

const Wrapper = styled.div`
  padding: 0;
  margin: 0;
`;
