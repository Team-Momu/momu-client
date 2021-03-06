import { NextPage } from 'next';
import styled from 'styled-components';
import FeedList from 'components/feed/FeedList';
import MainFeed from 'components/feed/MainFeed';
import FeedHeader from 'components/feed/FeedHeader';

const Feed: NextPage = () => {
  return (
    <Wrapper>
      <MainFeed />
      <SliderContainer className="sticky top-0">
        <FeedHeader />
      </SliderContainer>
      <FeedList />
    </Wrapper>
  );
};

export default Feed;
const Wrapper = styled.div`
  background: #ffffff;
`;
const SliderContainer = styled.div`
  background: #ffffff;
`;
