import MbtiBody from '@mbti/MbtiBody';
import MbtiFooter from '@mbti/MbtiFooter';
import MbtiHeader from '@mbti/MbtiHeader';
import { userInfo } from '@slices/user/userThunk';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { RootState, useAppDispatch } from 'store/store';
import { useRouter } from 'next/router';

const Profile = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const mbti = useSelector((state: RootState) => state.mbti.mbti);
  // const me = useSelector((state: RootState) => state.user.me);

  // 로딩하면 유저 정보 불러오기
  // useEffect(() => {
  //   dispatch(userInfo());
  // }, []);
  //
  // // mbti 등록한 유저면 피드로 넘어감
  // useEffect(() => {
  //   if (me.data?.mbti) {
  //     router.push('/feed');
  //   }
  // }, [me]);

  return (
    <>
      <ToastContainer />
      <MbtiHeader />
      <MbtiBody />
      <MbtiFooter />
    </>
  );
};

export default Profile;
