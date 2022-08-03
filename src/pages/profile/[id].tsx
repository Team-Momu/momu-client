import MbtiBody from '@mbti/MbtiBody';
import MbtiFooter from '@mbti/MbtiFooter';
import MbtiHeader from '@mbti/MbtiHeader';
import { userInfo } from '@slices/user/userThunk';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import wrapper, {
  RootState,
  useAppDispatch,
  useAppSelector,
} from 'store/store';
import { useRouter } from 'next/router';
import axios from 'axios';
import Spinner from '@common/Spinner';
import Image from 'next/image';
import camera from '@public/img/camera.png';
import defaultProfile from '@public/img/defaultProfile.png';

const Profile = ({ data }: any) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const mbti = useSelector((state: RootState) => state.mbti.mbti);

  const me = useAppSelector((state: RootState) => state.user.me);
  useEffect(() => {
    dispatch(userInfo());
  }, []);

  useEffect(() => {
    console.log('data', data);
  }, []);

  useEffect(() => {
    console.log('me', me);
  }, [me]);

  useEffect(() => {
    if (me?.data?.nickname && me?.data?.mbti === null) {
      router.push('/profile/1');
    }
    if (me?.data?.nickname && me?.data?.mbti) {
      router.push('/feed');
    }
  }, [me]);

  const ssrRendering = () => {
    if (!data.id) {
      alert('로그인이 필요합니다.');
      router.push('/');
    }
    if (data.id && !data.mbti) {
      return (
        <>
          <ToastContainer />
          <MbtiHeader />
          <MbtiBody />
          <MbtiFooter />
        </>
      );
    } else {
      return <Spinner />;
    }
  };

  return <>{ssrRendering()}</>;
};

// 유저 정보를 서버사이드에서 받아옴
export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res }) => {
      const cookie = req ? req.headers.cookie : '';
      axios.defaults.headers.common['Cookie'] = '';
      if (cookie && req) {
        axios.defaults.headers.common['Cookie'] = cookie;
      }
      const { payload } = await store.dispatch(userInfo());
      const { data } = payload;

      return { props: { data, cookie } };
    }
);

export default Profile;
