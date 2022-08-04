import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import styled from 'styled-components';
import Image from 'next/image';
import shareButton from '@public/img/header/sharebutton.svg';
import {
  BackButton,
  BackIcon,
  HeaderContainer,
  HeaderLeftSide,
  HeaderTextContainer,
  Line,
} from 'styles/headerstyle/HeaderCommonStyle';
import { toast } from 'react-toastify';

const DetailFeedHeader = () => {
  const [url, setUrl] = useState('');
  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  const router = useRouter();

  const moveToFeed = useCallback(() => {
    router.push(`/feed/`);
  }, []);

  const shareUrl = useCallback(() => {
    toast('URL이 복사되었습니다.', {
      position: 'top-center',
      autoClose: 2500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
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
            <Image src={shareButton} width={'19'} height={'26'} />
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
