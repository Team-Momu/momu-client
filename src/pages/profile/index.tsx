import type { NextPage } from 'next';
import AppLayOut from '../../components/common/AppLayOut';

const Home: NextPage = () => {
  return (
    <>
      <AppLayOut>
        <h1>이곳은 프로필 페이지 입니다.</h1>
        <h1>'/profile'</h1>
      </AppLayOut>
    </>
  );
};

export default Home;
