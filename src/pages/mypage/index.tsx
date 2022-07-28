import NavBar from '@common/NavBar';
import MyPageTab from 'components/mypage/MyPageTab';
import ProfileCard from 'components/mypage/ProfileCard';
import ProfileHeader from 'components/mypage/ProfileHeader';
const mypage = () => {
  return (
    <div>
      <ProfileHeader />
      <ProfileCard />
      <MyPageTab />
      <NavBar />
    </div>
  );
};

export default mypage;
