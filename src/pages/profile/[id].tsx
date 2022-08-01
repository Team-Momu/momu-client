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

const Profile = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const mbti = useSelector((state: RootState) => state.mbti.mbti);

  const me = useAppSelector((state: RootState) => state.user.me);
  useEffect(() => {
    dispatch(userInfo());
  }, []);

  return (
    <>
      <ToastContainer />
      <MbtiHeader />
      <MbtiBody />
      <MbtiFooter />
    </>
  );
};

// 유저 정보를 서버사이드에서 받아옴
// export const getServerSideProps = wrapper.getServerSideProps(
//   (store) =>
//     async ({ req, res }) => {
//       const { payload } = await store.dispatch(userInfo());
//
//       const { data } = payload;
//
//       return { props: { data } };
//     }
// );

export default Profile;
