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
  params: string | undefined;
}

const DetailFeedContents = ({ req }: any) => {
  const router = useRouter();
  console.log('🔥req🔥', req);
  // console.log(postNum);
  const curation = useAppSelector(
    (state: RootState) => state.detailCuration.data
  );
  // console.log(post);
  const dispatch = useAppDispatch();

  useEffect(() => {
    // const post = parseInt(postId as string);
    dispatch(getCurationByIdThunk(3));
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

//@ts-ignore
export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const { req } = context;
    return {
      props: { req },
    };
  } catch (error) {
    console.error(error);
  }
};

export default DetailFeedContents;
const CardWrapper = styled.div`
  padding: 8px 0;
`;
