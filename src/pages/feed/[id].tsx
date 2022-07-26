import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import DetailFeedContents from 'components/detailfeed/DetailFeed';
import DetailFeedHeader from 'components/detailfeed/DetailFeedHeader';
import NavBar from '@common/NavBar';

const DetailFeed = () => {
  const router = useRouter();
  const postId = router.query.id;

  const writeComment = useCallback(() => {
    router.push(`/comment/${postId}`);
  }, []);

  console.log(postId);

  return (
    <Wrapper>
      <DetailFeedHeader />
      <DetailFeedContents postId={postId} />
      <>
        <h1>큐레이션 답변카드</h1>
        <InputBox type="text" />
        <AddCurationButton onClick={writeComment}>
          큐레이션 하기
        </AddCurationButton>
      </>
      <NavContainer className="sticky bottom-0">
        <NavBar />
      </NavContainer>
    </Wrapper>
  );
};
export default DetailFeed;

const Wrapper = styled.div``;
const NavContainer = styled.div``;
const InputBox = styled.input`
  width: 340px;
  margin-bottom: 200px;
`;

const AddCurationButton = styled.button`
  margin-bottom: 10px;
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
