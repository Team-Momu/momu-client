import { useRouter } from 'next/router';
import { useCallback } from 'react';
import styled from 'styled-components';
import {
  BackButton,
  BackIcon,
  HeaderContainer,
  HeaderLeftSide,
  HeaderTextContainer,
  Line,
} from 'styles/headerstyle/HeaderCommonStyle';

const DetailFeedHeader = () => {
  const router = useRouter();
  const moveToFeed = useCallback(() => {
    router.push(`/feed/`);
  }, []);
  return (
    <>
      <HeaderContainer>
        <HeaderLeftSide>
          <BackButton onClick={moveToFeed}>
            <BackIcon src={'/img/header/backbutton.svg'} />
          </BackButton>
          <HeaderTextContainer>Curation</HeaderTextContainer>
        </HeaderLeftSide>
        <ShareButton>
          <ShareIcon src={'/img/header/sharebutton.svg'} />
        </ShareButton>
      </HeaderContainer>
      <Line></Line>
    </>
  );
};

export default DetailFeedHeader;

const ShareButton = styled.button`
  margin-right: 21px;
`;

const ShareIcon = styled.img`
  width: 18.67px;
  height: 25.67px;
`;
