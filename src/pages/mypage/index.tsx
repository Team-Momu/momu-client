import NavBar from '@common/NavBar';
import MyPageTab from 'components/mypage/MyPageTab';
import ProfileCard from 'components/mypage/profileCard';
const mypage = () => {
  return (
    <>
      <ProfileCard />
      <MyPageTab />
      <NavBar />
    </>
  );
};

export default mypage;
