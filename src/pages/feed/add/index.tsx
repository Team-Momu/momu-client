import NavBar from '@common/NavBar';
import RequestInfo from 'components/requestcuration/RequestInfo';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import wrapper, {
  RootState,
  useAppDispatch,
  useAppSelector,
} from '../../../store/store';
import { useEffect } from 'react';
import { userInfo } from '@slices/user/userThunk';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import axios from 'axios';
import Spinner from '@common/Spinner';
import ProfileHeader from '../../../components/mypage/ProfileHeader';
import ProfileCard from '../../../components/mypage/ProfileCard';
import MyPageTab from '../../../components/mypage/MyPageTab';

const AddCuration = ({ data }: any) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const me = useAppSelector((state: RootState) => state.user.me);
  useEffect(() => {
    dispatch(userInfo());
  }, []);
  useEffect(() => {
    if (me.data?.id && (!me.data?.mbti || !me.data?.nickname)) {
      router.push('/profile');
    }
  }, [me]);

  useEffect(() => {
    if (data.message === 'Request failed with status code 401') {
      toast('로그인이 필요합니다.', {
        position: 'top-center',
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      router.push('/');
    } else if (data.data.id && (!data.data.mbti || !data.data.nickname)) {
      toast('설정이 필요합니다.', {
        position: 'top-center',
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      router.push('/profile');
    }
  }, []);

  const ssrRender = () => {
    if (data.message === 'Request failed with status code 401') {
      return <Spinner />;
    } else if (data.data.id && (!data.data.mbti || !data.data.nickname)) {
      return <Spinner />;
    } else {
      return (
        <Wrapper>
          <RequestInfo />
        </Wrapper>
      );
    }
  };

  return <>{ssrRender()}</>;
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req }) => {
      const cookie = req ? req.headers.cookie : '';
      axios.defaults.headers.common['Cookie'] = '';
      if (cookie && req) {
        axios.defaults.headers.common['Cookie'] = cookie;
      }
      const { payload } = await store.dispatch(userInfo());
      const data = payload;
      return { props: { data, cookie } };
    }
);

export default AddCuration;

const Wrapper = styled.div``;
