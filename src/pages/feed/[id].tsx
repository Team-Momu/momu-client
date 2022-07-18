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
      <>
        <h1>큐레이션 답변카드</h1>
        <InputBox type="text" />
        <AddCurationButton onClick={onClick}>큐레이션 받기</AddCurationButton>
      </>
    </Wrapper>
  );
};
export default DetailFeed;

const Wrapper = styled.div`
  width: 375px;
`;

const InputBox = styled.input`
  width: 340px;
  margin-bottom: 200px;
`;

const AddCurationButton = styled.button`
  width: 340px;
  height: 72px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */

  color: #ffffff;

  background-color: #f57a08;
`;
