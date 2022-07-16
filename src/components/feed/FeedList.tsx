import { getCurationPostListsThunk } from '@slices/curation/curationPostSlice';
import { useEffect } from 'react';
import { RootState, useAppDispatch, useAppSelector } from 'store/store';
import styled from 'styled-components';
import GetCurationCard from './GetCurationCard';

const FeedList = () => {
  const curations = useAppSelector(
    (state: RootState) => state.curation.data.results
  );
  const hasNext = useAppSelector(
    (state: RootState) => state.curation.data.next
  );
  console.log(hasNext);
  const dispatch = useAppDispatch();

  useEffect(() => {
    hasNext
      ? dispatch(getCurationPostListsThunk(hasNext))
      : dispatch(getCurationPostListsThunk(''));
  }, [dispatch]);

  return (
    <Wrapper>
      {curations?.map((curation) => {
        return (
          <>
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
          </>
        );
      })}
    </Wrapper>
  );
};

export default FeedList;

const Wrapper = styled.div`
  padding: 0;
  margin: 0;
  overflow: hidden;
`;

const GotoDetailButton = styled.button``;
