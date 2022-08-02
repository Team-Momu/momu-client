import NavBar from '@common/NavBar';
import MyPageTab from 'components/mypage/MyPageTab';
import ProfileCard from 'components/mypage/ProfileCard';
import ProfileHeader from 'components/mypage/ProfileHeader';
import styled from 'styled-components';
const mypage = () => {
  return (
    <Wrapper>
      <HeaderContainer className="fixed top-0">
        <ProfileHeader />
      </HeaderContainer>
      <ProfileCard />
      <ContentContainer>
        <MyPageTab />
      </ContentContainer>
      <NavContainer className="fixed">
        <NavBar />
      </NavContainer>
    </Wrapper>
  );
};

export default mypage;

const Wrapper = styled.div`
  height: 100vh;
  @supports (-webkit-touch-callout: none) {
    height: -webkit-fill-available;
  }
`;

const HeaderContainer = styled.div`
  background: #ffffff;
  z-index: 1;
`;

const NavContainer = styled.div`
  width: 343px;
  &.fixed {
    position: fixed;
    bottom: 0px;
  }
`;
const ContentContainer = styled.div`
  margin-bottom: 85px;
`;
