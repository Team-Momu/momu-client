import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import DetailFeedContents from 'components/detailfeed/DetailFeed';
import DetailFeedHeader from 'components/detailfeed/DetailFeedHeader';

const DetailFeed = () => {
  const router = useRouter();
  const onClick = useCallback(() => {
    router.push(`/feed/add`);
  }, []);

  const postId = router.query.id;

  console.log(postId);

  return (
    <Wrapper>
      <DetailFeedHeader />
      <DetailFeedContents postId={postId} />

      <button onClick={onClick}>add curation button</button>
    </Wrapper>
  );
};
export default DetailFeed;

const Wrapper = styled.div``;
