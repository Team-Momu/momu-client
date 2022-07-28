import { RootState, useAppDispatch, useAppSelector } from 'store/store';
import { getCurationByIdThunk } from '@slices/curation/detailCurationPostSlice';
import { FC, useEffect } from 'react';
import DetailFeedHeader from './DetailFeedHeader';
import GetCurationCard from 'components/feed/GetCurationCard';
import styled from 'styled-components';
import { DivisionLine } from 'styles/commentstyle/CommentStyle';

interface Props {
  postId: string | string[] | undefined;
}

const DetailFeedContents: FC<Props> = ({ postId }) => {
  const post = parseInt(postId as string);
  const curation = useAppSelector(
    (state: RootState) => state.detailCuration.data
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCurationByIdThunk(post));
  }, []);

  return (
    <>
      <CardWrapper>
        <GetCurationCard
          key={curation.id + `new Date()`}
          area={curation.location}
          isDrink={curation.drink}
          when={curation.time}
          personnel={curation.member_count}
          additionalText={curation.description}
          usernickname={curation.user.nickname}
          profileImg={curation.user.profile_img}
          mukbti={curation.user.mbti}
          createAt={curation.created_at}
          commentNum={curation.comment_count}
          scrapFlag={curation.scrap_flag}
          user={curation.user.id}
          post={curation.id}
        />
      </CardWrapper>
      <DivisionLine></DivisionLine>
    </>
  );
};

export default DetailFeedContents;
const CardWrapper = styled.div`
  padding: 8px 0;
`;
