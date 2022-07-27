import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import DetailFeedContents from 'components/detailfeed/DetailFeed';
import DetailFeedHeader from 'components/detailfeed/DetailFeedHeader';
import NavBar from '@common/NavBar';
import CommentList from 'components/detailfeed/CommentList';

const DetailFeed = () => {
  const router = useRouter();
  const post = router.query.id;
  const postId = parseInt(post as string);

  const writeComment = useCallback(() => {
    router.push(`/comment/${postId}`);
  }, []);

  console.log(postId);

  return (
    <Wrapper>
      <DetailFeedHeader />
      <DetailFeedContents postId={post} />
      <CommentListContainer>
        <CommentList postId={postId} />
      </CommentListContainer>
      <AddCurationButton onClick={writeComment}>
        큐레이션 하기
      </AddCurationButton>
    </Wrapper>
  );
};
export default DetailFeed;

const Wrapper = styled.div``;
const CommentListContainer = styled.div``;

const AddCurationButton = styled.button`
  position: absolute;
  left: 0px;
  top: 748px;

  margin-bottom: 10px;
  width: calc(100% + 16px * 2);
  margin: 0 -16px;
  height: 64px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  /* identical to box height */

  color: #ffffff;

  background-color: #f57a08;
`;
