import { getCommentPostListsThunk } from '@slices/comment/commentPostSlice';
import { useRouter } from 'next/router';
import { FC, useEffect } from 'react';
import { RootState, useAppDispatch, useAppSelector } from 'store/store';
import styled from 'styled-components';
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

  //넘겨줘야 할 것-식당이미지
  // 답글 작성 유저 이미지, 이름, 먹비티아이
  // description
  // 식당정보: 이름, 도로명주소, 카테고리
  console.log(commentLists);
  return (
    <Wrapper>
      <CommentCountHeader commentCount={commentCount} />
      {commentLists.map((comment) => {
        return (
          <>
            <CommentCard
              key={comment.id}
              selectedFlag={comment.select_flag}
              placeImg={comment.place_img}
              writerName={comment.user.nickname}
              writerProfile={comment.user.profile_img}
              writerMbti={comment.user.mbti}
              description={comment.description}
              placeName={comment.place.place_name}
              placeAddress={comment.place.road_address_name}
              placeCategory={comment.place.category_name}
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
