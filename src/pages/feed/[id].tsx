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

      <NavContainer className="sticky bottom-0">
        <NavBar />
      </NavContainer>
    </Wrapper>
  );
};
export default DetailFeed;

const Wrapper = styled.div``;
const CommentListContainer = styled.div`
  height: 357px;
`;
const NavContainer = styled.div``;
const InputBox = styled.input`
  width: 340px;
  margin-bottom: 200px;
`;

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
