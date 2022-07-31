import { RootState, useAppDispatch, useAppSelector } from 'store/store';
import { getCurationByIdThunk } from '@slices/curation/detailCurationPostSlice';
import { FC, useEffect, useState } from 'react';
import DetailFeedHeader from './DetailFeedHeader';
import GetCurationCard from 'components/feed/GetCurationCard';
import styled from 'styled-components';
import { DivisionLine } from 'styles/commentstyle/CommentStyle';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';

interface Props {
  ssrPostId: string;
}

const DetailFeedContents = ({ ssrPostId }: Props) => {
  const router = useRouter();

  const curation = useAppSelector(
    (state: RootState) => state.detailCuration.data
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    const id = Number(ssrPostId);
    dispatch(getCurationByIdThunk(id));
  }, []);

  useEffect(() => {
    console.log('curation', curation);
  }, [curation]);

  return (
    <>
      <CardWrapper>
        <GetCurationCard
          key={curation.id + `${new Date()}`}
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
      <DivisionLine />
    </>
  );
};

export default DetailFeedContents;
const CardWrapper = styled.div`
  padding: 8px 0;
`;
