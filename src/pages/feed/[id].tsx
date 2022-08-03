import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import DetailFeedContents from 'components/detailfeed/DetailFeed';
import DetailFeedHeader from 'components/detailfeed/DetailFeedHeader';
import CommentList from 'components/detailfeed/CommentList';
import { GetServerSideProps } from 'next';
import { RootState, useAppDispatch, useAppSelector } from 'store/store';
import { getCurationByIdThunk } from '@slices/curation/detailCurationPostSlice';
import { userInfo } from '@slices/user/userThunk';

const DetailFeed = ({ id }: any) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const postId = Number(id);

  const [sameUser, setSameUser] = useState<boolean | null>(null);

  const curationSelectedFlag = useAppSelector(
    (state: RootState) => state.detailCuration.data.selected_flag
  );
  // 로그인한 유저 아이디
  const logInUserId = useAppSelector(
    (state: RootState) => state.user.me.data?.id
  );
  // 질문 글을 쓴 유저 아이디
  const userId = useAppSelector(
    (state: RootState) => state.detailCuration.data.user.id
  );

  // useEffect(() => {
  //   const result = logInUserId == userId;
  //   setSameUser(result);
  //   // console.log('🔥same🔥', sameUser);
  // }, [logInUserId, userId, sameUser]);

  useEffect(() => {
    dispatch(userInfo());
  }, []);

  // useEffect(() => {
  //   dispatch(getCurationByIdThunk(postId));
  // }, []);
  const writeComment = useCallback(() => {
    router.push(`/comment/${postId}`);
  }, []);

  return (
    <Wrapper className="relative">
      <HeaderContainer className="sticky top-0">
        <DetailFeedHeader />
      </HeaderContainer>
      <DetailFeedContentsContainer>
        <DetailFeedContents postId={postId} />
      </DetailFeedContentsContainer>
      <ContentContainer>
        <CommentList
          curationSelectedFlag={curationSelectedFlag}
          postId={postId}
          sameUser={sameUser}
        />
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
  height: 100vh;
  @supports (-webkit-touch-callout: none) {
    height: -webkit-fill-available;
  }
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
  z-index: 2;
  width: 343px;
  &.fixed {
    position: fixed;
    bottom: 0px;
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
