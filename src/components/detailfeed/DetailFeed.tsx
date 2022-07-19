import { RootState, useAppDispatch, useAppSelector } from 'store/store';
import { getCurationByIdThunk } from '@slices/curation/detailCurationPostSlice';
import { FC, useEffect } from 'react';
import DetailFeedHeader from './DetailFeedHeader';
import GetCurationCard from 'components/feed/GetCurationCard';
import styled from 'styled-components';

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
  }, [dispatch]);

  console.log(curation);

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

const DivisionLine = styled.div`
  width: 375px;
  height: 10px;
  background-color: #f8f6f6;
  width: calc(100% + 16px * 2);
  margin: 0 16px 0 -16px;
`;
