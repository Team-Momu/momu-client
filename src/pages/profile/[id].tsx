import MbtiBody from '@mbti/MbtiBody';
import MbtiFooter from '@mbti/MbtiFooter';
import MbtiHeader from '@mbti/MbtiHeader';
import { userInfo } from '@slices/user/userThunk';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
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

  // useEffect(() => {
  //   console.log('data', data);
  // }, []);

  useEffect(() => {
    console.log('me in profile/1', me);
  }, [me]);

  useEffect(() => {
    console.log('data in profile/1', data);
  }, []);

  useEffect(() => {
    if (!me?.data?.nickname) {
      router.push('/profile');
    }
    if (me?.data?.nickname && !me?.data?.mbti) {
      router.push('/profile/1');
    }
    if (me?.data?.nickname && me?.data?.mbti) {
      router.push('/feed');
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
    }
  }, []);
  const ssrRendering = () => {
    if (data.message === 'Request failed with status code 401') {
      return <Spinner />;
    } else if (data.id && data.nickname && data.mbti) {
      return <Spinner />;
    } else if (data.id && data.nickname && !data.mbti) {
      return (
        <>
          <MbtiHeader />
          <MbtiBody />
          <MbtiFooter />
        </>
      );
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
