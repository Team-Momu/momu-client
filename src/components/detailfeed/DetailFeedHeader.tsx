import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
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
  const [url, setUrl] = useState('');
  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  const router = useRouter();
  console.log(url);

  const moveToFeed = useCallback(() => {
    router.push(`/feed/`);
  }, []);

  const shareUrl = useCallback(() => {
    alert('url이 복사되었습니다! ');
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
        <ShareButton onClick={shareUrl}>
          <CopyToClipboard text={url}>
            <ShareIcon src={'/img/header/sharebutton.svg'} />
          </CopyToClipboard>
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
