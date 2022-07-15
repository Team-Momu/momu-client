import DetailFeedHeader from 'components/detailfeed/DetailFeedHeader';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useCallback } from 'react';

const DetailFeed = () => {
  const router = useRouter();
  const onClick = useCallback(() => {
    router.push(`/feed/add`);
  }, []);
  return (
    <Wrapper>
      <DetailFeedHeader />
      <button onClick={onClick}>add curation button</button>
    </Wrapper>
  );
};
export default DetailFeed;

const Wrapper = styled.div``;
