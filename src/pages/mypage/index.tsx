import NavBar from '@common/NavBar';
import MyPageTab from 'components/mypage/MyPageTab';
import ProfileCard from 'components/mypage/ProfileCard';
import ProfileHeader from 'components/mypage/ProfileHeader';
import { useEffect } from 'react';
import styled from 'styled-components';
import wrapper, {
  RootState,
  useAppDispatch,
  useAppSelector,
} from '../../store/store';
import { mypageSlice } from '@slices/mypage/mypageSlice';
import axios from 'axios';
import { userInfo } from '@slices/user/userThunk';
const Mypage = () => {
  const dispatch = useAppDispatch();

  const data = useAppSelector((state: RootState) => state.user.me);

  return (
    <Wrapper>
      <HeaderContainer className="fixed top-0">
        <ProfileHeader />
      </HeaderContainer>
      <ProfileCard />
      <ContentContainer>
        <MyPageTab />
      </ContentContainer>
      <NavContainer className="fixed">
        <NavBar />
      </NavContainer>
    </Wrapper>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req }) => {
      const cookie = req ? req.headers.cookie : '';
      if (cookie && req) {
        axios.defaults.headers.common['Cookie'] = cookie;
      }
      const { payload } = await store.dispatch(userInfo());
      const data = payload;
      return { props: { data, cookie } };
    }
);

export default Mypage;

const Wrapper = styled.div`
  height: 100vh;
  @supports (-webkit-touch-callout: none) {
    height: -webkit-fill-available;
  }
`;

const HeaderContainer = styled.div`
  background: #ffffff;
  z-index: 2;
`;

const NavContainer = styled.div`
  width: 343px;
  &.fixed {
    position: fixed;
    bottom: 0px;
  }
`;
const ContentContainer = styled.div`
  margin-bottom: 85px;
`;
