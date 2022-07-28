import { NextPage } from 'next';
import styled from 'styled-components';
import FeedList from 'components/feed/FeedList';
import MainFeed from 'components/feed/MainFeed';
import FeedHeader from 'components/feed/FeedHeader';
import { RootState, useAppDispatch } from '../../store/store';
import { useSelector } from 'react-redux';
import { UIEventHandler, useCallback, useEffect, useState } from 'react';
import { userInfo } from '@slices/user/userThunk';
import { useRouter } from 'next/router';
import NavBar from '@common/NavBar';

const Feed: NextPage = () => {
  // 유저 정보 불러오기
  const dispatch = useAppDispatch();
  const router = useRouter();
  const me = useSelector((state: RootState) => state.user.me);
  const [hasNext, setHasNext] = useState(false);
  const [percent, setPercent] = useState(0);
  useEffect(() => {
    dispatch(userInfo());
  }, []);

  // useEffect(() => {
  //   if (!me) {
  //     alert('로그인이 필요합니다.');
  //     router.push('/');
  //   }
  // }, [me]);

  const onScroll = useCallback(
    (e: any) => {
      const a = e.target.scrollTop;
      const b = e.target.scrollHeight - e.target.clientHeight;
      const percent = Math.round((a / b) * 100);

      if (percent >= 90) {
        setHasNext(true);
        setPercent(percent);
      } else {
        setHasNext(false);
      }
    },
    [percent, hasNext]
  );

  return (
    <Wrapper>
      <MainFeed />
      <SliderContainer className="sticky top-0">
        <FeedHeader />
      </SliderContainer>
      <FeedContainer onScroll={onScroll}>
        <FeedList hasNext={hasNext} percent={percent} />
      </FeedContainer>
      <NavContainer className="sticky bottom-0">
        <NavBar />
      </NavContainer>
    </Wrapper>
  );
};

export default Feed;

const Wrapper = styled.div``;
const FeedContainer = styled.div`
  height: 812px;
  background: #ffffff;
  overflow: auto;
`;

const SliderContainer = styled.div`
  background: #ffffff;
`;
const NavContainer = styled.div``;
