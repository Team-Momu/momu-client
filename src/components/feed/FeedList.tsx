import { getCurationPostListsThunk } from '@slices/curation/curationPostSlice';
import { useEffect } from 'react';
import { RootState, useAppDispatch, useAppSelector } from 'store/store';
import styled from 'styled-components';
import GetCurationCard from './GetCurationCard';

const FeedList = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCurationPostListsThunk());
  }, []);

  const curations = useAppSelector(
    (state: RootState) => state.curation.data.results
  );

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
              userId={curation.user.nickname}
              profileImg={curation.user.profile_img}
              mukbti={curation.user.mbti}
              commentNum={curation.comment_count}
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
