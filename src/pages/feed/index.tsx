import { NextPage } from 'next';
import styled from 'styled-components';
import FeedList from 'components/feed/FeedList';
import MainFeed from 'components/feed/MainFeed';
import FeedHeader from 'components/feed/FeedHeader';
import { RootState, useAppDispatch } from '../../store/store';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { userInfo } from '@slices/user/userThunk';
import { useRouter } from 'next/router';
import NavBar from '@common/NavBar';

const Feed: NextPage = () => {
  // 유저 정보 불러오기
  const dispatch = useAppDispatch();
  const router = useRouter();
  const me = useSelector((state: RootState) => state.user.me);
  useEffect(() => {
    dispatch(userInfo());
  }, []);

  useEffect(() => {
    if (!me) {
      alert('로그인이 필요합니다.');
      router.push('/');
    }
  }, [me]);

  return (
    <Wrapper>
      <MainFeed />
      <SliderContainer className="sticky top-0">
        <FeedHeader />
      </SliderContainer>
      <FeedContainer>
        <FeedList />
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
