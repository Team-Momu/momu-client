import { useRouter } from 'next/router';
import { useCallback } from 'react';
import styled from 'styled-components';
const MainFeed = () => {
  const router = useRouter();
  const onClick = useCallback(() => {
    router.push(
      'https://bead-durian-8e0.notion.site/MoMu-Event-5b8e06a2b60548bba21338eb6a47425a'
    );
  }, []);

  return (
    <BannerContainer>
      <Banner onClick={onClick}>
        <LogoContainer>MOMU</LogoContainer>
      </Banner>
    </BannerContainer>
  );
};

export default MainFeed;

const BannerContainer = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
`;

const LogoContainer = styled.div`
  position: absolute;
  top: 50px;
  height: 42px;
  left: 16px;
  top: 13px;
  font-family: 'Prompt';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 42px;
  color: #ffffff;
  z-index: 1;
`;
const Banner = styled.div`
  background-image: url('/img/banner/Banner.png');
  background-size: 375px 507px;
  height: 507px;
  width: calc(100% + 16px * 2);
  margin: 0 16px 0 -16px;
  margin-bottom: 15px;
  &:hover {
    cursor: pointer;
  }
`;
