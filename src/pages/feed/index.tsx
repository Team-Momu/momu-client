import { NextPage } from 'next';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import styled from 'styled-components';

import AppLayOut from '../../components/common/AppLayOut';
import FeedList from '../../components/feed/FeedList';

const Feed: NextPage = () => {
  return (
    <AppLayOut>
      <Parallax pages={2}>
        <FeedList />
      </Parallax>
    </AppLayOut>
  );
};

export default Feed;

const Wrapper = styled.div`
  padding: 0;
  margin: 0;
`;
