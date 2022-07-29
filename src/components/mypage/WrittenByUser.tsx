import { getCurationWrittenByUserThunk } from '@slices/mypage/mypageSlice';
import { useEffect } from 'react';
import { RootState, useAppDispatch, useAppSelector } from 'store/store';
import GetCurationCard from 'components/feed/GetCurationCard';
import styled from 'styled-components';

const WrittenByUser = () => {
  const writtenCurations = useAppSelector(
    (state: RootState) => state.mypage.data.post.results
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCurationWrittenByUserThunk());
  }, []);

  return (
    <Wrapper>
      {writtenCurations?.map((curation) => {
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

export default WrittenByUser;
const Wrapper = styled.div``;
