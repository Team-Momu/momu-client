import MbtiBody from '@mbti/MbtiBody';
import MbtiFooter from '@mbti/MbtiFooter';
import MbtiHeader from '@mbti/MbtiHeader';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';

const Profile = () => {
  const mbti = useSelector((state: RootState) => state.mbti.mbti);

  useEffect(() => {
    console.log(mbti);
  }, [mbti]);
  return (
    <>
      <MbtiHeader />
      <MbtiBody />
      <MbtiFooter />
    </>
  );
};

export default Profile;
