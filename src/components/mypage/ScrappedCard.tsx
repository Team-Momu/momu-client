import {
  getCurationScrappedByUserThunk,
  getMoreCurationScrappedByUserThunk,
} from '@slices/mypage/mypageSlice';
import { useEffect } from 'react';
import { RootState, useAppDispatch, useAppSelector } from 'store/store';
import GetCurationCard from 'components/feed/GetCurationCard';

import styled from 'styled-components';
interface IScrollVariable {
  hasNext: boolean;
}

const ScrappedCard = ({ hasNext }: IScrollVariable) => {
  const scrappedCurations = useAppSelector(
    (state: RootState) => state.mypage.data.post.results
  );
  const scrapNext = useAppSelector(
    (state: RootState) => state.mypage.scrapNext
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCurationScrappedByUserThunk());
  }, []);

  useEffect(() => {
    if (hasNext && scrapNext) {
      // console.log('실행');
      const cursor = scrapNext.split('=')[1];
      dispatch(getMoreCurationScrappedByUserThunk(cursor));
    }
  }, [hasNext]);

  return (
    <Wrapper>
      {scrappedCurations?.map((curation) => {
        return (
          <>
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
          </>
        );
      })}
    </Wrapper>
  );
};
export default ScrappedCard;
const Wrapper = styled.div``;
