import {
  getCommentPostListsThunk,
  getMoreCommentPostListsThunk,
} from '@slices/comment/commentPostSlice';
import { useRouter } from 'next/router';
import { FC, useEffect } from 'react';
import { RootState, useAppDispatch, useAppSelector } from 'store/store';
import styled from 'styled-components';
import { DivisionLine } from 'styles/commentstyle/CommentStyle';
import CommentCard from './CommentCard';
import CommentCountHeader from './CommentCountHeader';
import useScroll from '../../utils/hooks/useScroll';
import Spinner from '@common/Spinner';

interface Props {
  curationSelectedFlag: boolean;
  postId: number;
  sameUser: boolean | null;
}

const CommentList: FC<Props> = ({ postId, curationSelectedFlag, sameUser }) => {
  const commentLists = useAppSelector(
    (state: RootState) => state.postComments.data.results
  );
  const next = useAppSelector(
    (state: RootState) => state.postComments.data.next
  );
  const comment_count = useAppSelector(
    (state: RootState) => state.detailCuration.data.comment_count
  );

  const pending = useAppSelector(
    (state: RootState) => state.postComments.pending
  );
  const addCommentPending = useAppSelector(
    (state: RootState) => state.addcomment.addCommentPending
  );
  const addCommentSuccess = useAppSelector(
    (state: RootState) => state.addcomment.addCommentSuccess
  );
  const addCommentFail = useAppSelector(
    (state: RootState) => state.addcomment.addCommentFail
  );
  const dispatch = useAppDispatch();

  const { hasNext, percent, onScroll } = useScroll();

  useEffect(() => {
    if (!addCommentPending || addCommentSuccess) {
      dispatch(getCommentPostListsThunk(postId));
    }
  }, [addCommentPending, addCommentSuccess]);

  useEffect(() => {
    if (hasNext && next) {
      const cursor = next.split('=')[1];
      dispatch(getMoreCommentPostListsThunk({ postId, cursor }));
    }
  }, [hasNext, next]);

  return (
    <Wrapper onScroll={onScroll}>
      <CommentCountHeader />
      {commentLists?.map((comment) => {
        return (
          <>
            <CommentCard
              curationSelectedFlag={curationSelectedFlag}
              key={comment.id + `${new Date()}`}
              userId={comment.user.id}
              postId={postId}
              commentId={comment.id}
              selectedFlag={comment.select_flag}
              placeImg={comment.place_img}
              writerName={comment.user.nickname}
              writerProfile={comment.user.profile_img}
              writerMbti={comment.user.mbti}
              description={comment.description}
              placeName={comment.place.place_name}
              placeAddress={comment.place.road_address_name}
              placeCategory={comment.place.category_name}
              createAt={comment.created_at}
              sameUser={sameUser}
            />
          </>
        );
      })}
      {pending && (
        <>
          <SpinnerContainer>
            <Spinner />
          </SpinnerContainer>
        </>
      )}
    </Wrapper>
  );
};

export default CommentList;
const SpinnerContainer = styled.div`
  height: 70px;
`;

const Wrapper = styled.div`
  padding: 0;
  margin: 0;
  overflow-y: scroll;
  overflow-x: hidden;

  height: 100vh;
`;
