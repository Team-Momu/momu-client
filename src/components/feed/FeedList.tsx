import styled from 'styled-components';
import FeedHeader from './FeedHeader';
import GetCurationCard from './GetCurationCard';

const FeedList = () => {
  return (
    <Wrapper>
      <FeedHeader />
      <GetCurationCard />
      <GetCurationCard />
      <GetCurationCard />
      <GetCurationCard />
      <GetCurationCard />
      <GetCurationCard />
    </Wrapper>
  );
};

export default FeedList;

const Wrapper = styled.div`
  padding: 0;
  margin: 0;
  overflow: hidden;
`;
