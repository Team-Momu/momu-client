import NavBar from '@common/NavBar';
import MyPageTab from 'components/mypage/MyPageTab';
import ProfileCard from 'components/mypage/ProfileCard';
import ProfileHeader from 'components/mypage/ProfileHeader';
import styled from 'styled-components';
const mypage = () => {
  return (
    <div>
      <HeaderContainer className="sticky top-0">
        <ProfileHeader />
      </HeaderContainer>
      <ProfileCard />
      <ContentContainer>
        <MyPageTab />
      </ContentContainer>
      <NavContainer className="fixed">
        <NavBar />
      </NavContainer>
    </div>
  );
};

export default mypage;

const HeaderContainer = styled.div`
  background: #ffffff;
  z-index: 1;
`;

const NavContainer = styled.div`
  width: 343px;
  &.fixed {
    position: fixed;
    top: 740px;
  }
`;
const ContentContainer = styled.div`
  margin-bottom: 85px;
`;
