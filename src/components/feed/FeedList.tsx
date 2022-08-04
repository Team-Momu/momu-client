import {
  getCurationPostListsThunk,
  getMoreCurationPostListsThunk,
} from '@slices/curation/curationPostSlice';
import { useEffect } from 'react';
import { RootState, useAppDispatch, useAppSelector } from 'store/store';
import styled from 'styled-components';
import GetCurationCard from './GetCurationCard';
import { useSelector } from 'react-redux';
import { userInfo } from '@slices/user/userThunk';
import { useState } from 'react';
import Spinner from '@common/Spinner';

interface Props {
  hasNext: Boolean;
  percent: number;
  me?: any;
  data: any;
}

const FeedList = ({ hasNext, percent, me, data }: Props) => {
  const curations = useAppSelector(
    (state: RootState) => state.curation.data.results
  );
  const curationInfo = useAppSelector(
    (state: RootState) => state.curation.data
  );
  const pending = useAppSelector((state: RootState) => state.curation.pending);
  const addCurationPending = useAppSelector(
    (state: RootState) => state.addCuration.addCurationPending
  );
  const addCurationSuccess = useAppSelector(
    (state: RootState) => state.addCuration.addCurationSuccess
  );
  const addCurationFail = useAppSelector(
    (state: RootState) => state.addCuration.addCurationFail
  );

  const [end, setEnd] = useState(false);
  const [next, setNext] = useState('');
  const [previous, setPrevious] = useState('');
  const [cursor, setCursor] = useState('');

  const dispatch = useAppDispatch();

  // 처음에 게시물 한번 가져옴
  useEffect(() => {
    if (addCurationSuccess || !addCurationPending) {
      dispatch(getCurationPostListsThunk());
    }
  }, [addCurationPending, addCurationSuccess]);

  useEffect(() => {
    // 더 가져오는 thunk 실행
    if (hasNext && !end) {
      // console.log('실행');
      dispatch(getMoreCurationPostListsThunk(cursor));
    }
  }, [hasNext, percent, end]);

  const moreChecker = (next: string) => {
    if (next === null) {
      // 끝인 경우
      setEnd(true);
      return;
    }
    const queryString = next.split('=')[1];
    setCursor(queryString);
    return;
  };

  useEffect(() => {
    const { next } = curationInfo;
    const { previous } = curationInfo;
    setNext(next);
    setPrevious(previous);
    moreChecker(next);
  }, [curationInfo]);

  // useEffect(() => {
  //   console.log('curationInfo🔥', curationInfo);
  //   console.log('cursor🔥', cursor);
  // }, [curationInfo, next, cursor]);

  return (
    <Wrapper>
      {curations?.map((curation) => {
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
              me={me}
              data={data}
            />
          </>
        );
      })}
      {pending && (
        <>
          <SpinnerContainer>
            <Spinner />
          </SpinnerContainer>
        </>
      )}
    </Wrapper>
  );
};

export default FeedList;

const Wrapper = styled.div`
  padding: 0;
  margin: 0;
  overflow: scroll;
`;
const SpinnerContainer = styled.div`
  height: 70px;
`;

const GotoDetailButton = styled.button``;
