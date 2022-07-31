import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useCallback, useEffect } from 'react';
import DetailFeedContents from 'components/detailfeed/DetailFeed';
import DetailFeedHeader from 'components/detailfeed/DetailFeedHeader';
import CommentList from 'components/detailfeed/CommentList';
import { GetServerSideProps } from 'next';

const DetailFeed = ({ id }: any) => {
  const router = useRouter();
  const post = router.query.id;
  const postId = parseInt(post as string);

  console.log('id🥶', id);

  const writeComment = useCallback(() => {
    router.push(`/comment/${postId}`);
  }, []);

  return (
    <Wrapper className="relative">
      <HeaderContainer className="sticky top-0">
        <DetailFeedHeader />
      </HeaderContainer>
      <DetailFeedContentsContainer>
        <DetailFeedContents postId={post} />
      </DetailFeedContentsContainer>
      <ContentContainer>
        <CommentList postId={postId} />
      </ContentContainer>
      <ButtonContainer className="fixed">
        <AddCurationButton onClick={writeComment}>
          큐레이션 하기
        </AddCurationButton>
      </ButtonContainer>
    </Wrapper>
  );
};

//@ts-ignore
export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const id = context?.params?.id;
    return {
      props: { id },
    };
  } catch (error) {
    console.error(error);
  }
};

export default DetailFeed;

const Wrapper = styled.div`
  height: 815px;
`;

const HeaderContainer = styled.div`
  background: #ffffff;
  z-index: 1;
`;

const DetailFeedContentsContainer = styled.div`
  justify-items: center;
  margin-left: 2px;
`;

const ButtonContainer = styled.div`
  width: 343px;
  &.fixed {
    position: fixed;
    top: 748px;
  }
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

const ContentContainer = styled.div`
  padding-bottom: 64px;
`;
