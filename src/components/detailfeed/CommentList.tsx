import { getCommentPostListsThunk } from '@slices/comment/commentPostSlice';
import { useRouter } from 'next/router';
import { FC, useEffect } from 'react';
import { RootState, useAppDispatch, useAppSelector } from 'store/store';
import styled from 'styled-components';
import CommentCard from './CommentCard';

interface Props {
  postId: number;
}

const CommentList: FC<Props> = ({ postId }) => {
  const commentLists = useAppSelector(
    (state: RootState) => state.postComments.data.results
  );
  const hasNext = useAppSelector(
    (state: RootState) => state.postComments.data.next
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCommentPostListsThunk({ hasNext, postId }));
  }, []);

  console.log(commentLists);
  return (
    <Wrapper>
      {commentLists.map((comment) => {
        return (
          <>
            <CommentCard key={comment.id} />
          </>
        );
      })}
      <CommentCard />
    </Wrapper>
  );
};

export default CommentList;

const Wrapper = styled.div`
  padding: 0;
  margin: 0;
  overflow: hidden;
`;
