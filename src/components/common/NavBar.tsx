import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import styled from 'styled-components';

const NavBar = () => {
  const router = useRouter();
  const [isRequestHover, setIsRequestHover] = useState(false);
  const [isFeedHover, setIsFeedHover] = useState(false);
  const [isProfileHover, setIsProfileHover] = useState(false);
  const page = router.pathname;

  const onClickRequset = useCallback(() => {
    router.push('/feed/add');
  }, []);
  const onClickFeed = useCallback(() => {
    router.push('/feed');
  }, []);
  const onClickProfile = useCallback(() => {
    router.push('/mypage');
  }, []);
  return (
    <Wrapper>
      <ButtonContainer>
        <NavButton
          onClick={onClickRequset}
          onMouseOver={() => setIsRequestHover(true)}
          onMouseOut={() => setIsRequestHover(false)}
        >
          {isRequestHover ? (
            <img src={'/img/nav/activeRequest.svg '} />
          ) : (
            <img src={'/img/nav/request.svg'} />
          )}
        </NavButton>
        <NavButton
          onClick={onClickFeed}
          onMouseOver={() => setIsFeedHover(true)}
          onMouseOut={() => setIsFeedHover(false)}
        >
          {isFeedHover || page === '/feed' ? (
            <img src={'/img/nav/activeFeed.svg '} />
          ) : (
            <img src={'/img/nav/navFeed.svg'} />
          )}
        </NavButton>
        <NavButton
          onClick={onClickProfile}
          onMouseOver={() => setIsProfileHover(true)}
          onMouseOut={() => setIsProfileHover(false)}
        >
          {isProfileHover || page === '/mypage' ? (
            <img src={'/img/nav/activeProfile.svg '} />
          ) : (
            <img src={'/img/nav/navProfile.svg'} />
          )}
        </NavButton>
      </ButtonContainer>
    </Wrapper>
  );
};

export default NavBar;

const Wrapper = styled.div`
  width: calc(100% + 16px * 2);
  margin: 0 -16px;
  height: 72px;
  background-color: #f8f8f8;
  display: flex;
`;

const ButtonContainer = styled.div`
  margin: auto;
  width: 290px;
  display: flex;
  justify-content: space-between;
`;
const NavButton = styled.button``;
