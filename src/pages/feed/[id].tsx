import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import DetailFeedContents from 'components/detailfeed/DetailFeed';
import DetailFeedHeader from 'components/detailfeed/DetailFeedHeader';
import NavBar from '@common/NavBar';
import CommentList from 'components/detailfeed/CommentList';
import { relative } from 'path';

const DetailFeed = () => {
  const router = useRouter();
  const post = router.query.id;
  const postId = parseInt(post as string);

  const writeComment = useCallback(() => {
    router.push(`/comment/${postId}`);
  }, []);

  console.log(postId);

  return (
    <Wrapper className="relative">
      <HeaderContainer className="sticky top-0">
        <DetailFeedHeader />
      </HeaderContainer>
      <DetailFeedContents postId={post} />
      <CommentListContainer>
        <CommentList postId={postId} />
      </CommentListContainer>
      <ButtonContainer className="sticky bottom-0">
        <AddCurationButton onClick={writeComment}>
          큐레이션 하기
        </AddCurationButton>
      </ButtonContainer>
    </Wrapper>
  );
};
export default DetailFeed;

const Wrapper = styled.div`
  height: 815px;
`;

const HeaderContainer = styled.div`
  background: #ffffff;
  z-index: 1;
`;

const CommentListContainer = styled.div`
  height: 100%;
`;

const ButtonContainer = styled.div``;

const AddCurationButton = styled.button`
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
