import { getCommentPostListsThunk } from '@slices/comment/commentPostSlice';
import { useRouter } from 'next/router';
import { FC, useEffect } from 'react';
import { RootState, useAppDispatch, useAppSelector } from 'store/store';
import styled from 'styled-components';
import { DivisionLine } from 'styles/commentstyle/CommentStyle';
import CommentCard from './CommentCard';
import CommentCountHeader from './CommentCountHeader';

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
  const commentCount = commentLists.length;

  return (
    <Wrapper>
      <CommentCountHeader commentCount={commentCount} />
      {commentLists.map((comment) => {
        return (
          <>
            <CommentCard
              key={comment.id + `${new Date()}`}
              userId={comment.post_user}
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
            />
          </>
        );
      })}
    </Wrapper>
  );
};

export default CommentList;

const Wrapper = styled.div`
  padding: 0;
  margin: 0;
`;
