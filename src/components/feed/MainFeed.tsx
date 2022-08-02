import { useRouter } from 'next/router';
import { useCallback } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Arrow from '@public/img/banner/Arrow.png';
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
        <Date>2022.08.18~2022.08.30</Date>
        <BannerText>
          모무 런칭기념 <br /> 채택 이벤트{' '}
        </BannerText>

        <Description>치킨은 모무가 쏠게! 큐레이션은 누가 할래?</Description>
        <ArrowContainer>
          <Image src={Arrow} width={31} height={19} />
        </ArrowContainer>
      </Banner>
    </BannerContainer>
  );
};

export default MainFeed;
const ArrowContainer = styled.div`
  position: absolute;
  width: 31.09px;
  height: 19px;
  left: 300px;
  top: 463px;
`;
const Date = styled.div`
  position: absolute;
  width: 133px;
  height: 14px;
  left: 24px;
  top: 332px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;

  color: #ffffff;
`;
const BannerText = styled.div`
  position: absolute;
  width: 174px;
  height: 72px;
  left: 24px;
  top: 352px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 100%;
  /* or 32px */

  color: #ffffff;
`;
const Description = styled.div`
  position: absolute;
  width: 251px;
  height: 18px;
  left: 24px;
  top: 464px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  /* identical to box height */

  color: #ffffff;
`;
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
