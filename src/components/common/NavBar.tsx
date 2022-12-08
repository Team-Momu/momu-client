import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { RootState, useAppDispatch, useAppSelector } from '../../store/store';
import { userInfo } from '@slices/user/userThunk';
import DialogTitle from '@mui/material/DialogTitle';
import Image from 'next/image';
import Logo from '@public/img/logoGroup.svg';
import DialogContent from '@mui/material/DialogContent';
import { ContentTextStyle } from '../../pages/test';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { TransitionProps } from '@mui/material/transitions';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const NavBar = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [isRequestHover, setIsRequestHover] = useState(false);
  const [isFeedHover, setIsFeedHover] = useState(false);
  const [isProfileHover, setIsProfileHover] = useState(false);
  const [open, setOpen] = useState(false);
  const me = useAppSelector((state: RootState) => state.user.me);
  const page = router.pathname;

  useEffect(() => {
    dispatch(userInfo());
  }, []);

  // useEffect(() => {
  //   console.log('me in navbar', me);
  // }, [me]);

  const onClickRequset = useCallback(() => {
    if (!me?.data?.id) {
      return setOpen(true);
    }
    router.push('/feed/add');
  }, [me]);
  const onClickFeed = useCallback(() => {
    router.push('/feed');
  }, [me]);
  const onClickProfile = useCallback(() => {
    if (!me?.data?.id) {
      return setOpen(true);
    }
    router.push('/mypage');
  }, [me]);

  const handleClose = () => {
    setOpen(false);
  };
  const pushToLanding = () => {
    router.push('/');
  };
  return (
    <>
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
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle style={{ textAlign: 'center' }}>
          <Image src={Logo} />
        </DialogTitle>
        <DialogContent>
          <ContentTextStyle first>
            앗! 아직 로그인하지 않으셨나요?
          </ContentTextStyle>
          <ContentTextStyle>
            카카오 로그인 후 모무 큐레이션을 즐겨보세요!
          </ContentTextStyle>
        </DialogContent>
        <DialogActions style={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            style={{
              background: '#5f5f5f',
              width: '70px',
              height: '36px',
              color: '#ffffff',
              borderRadius: '0px',
            }}
            onClick={handleClose}
          >
            취소
          </Button>
          <Button
            style={{
              background: '#f57906',
              width: '168px',
              height: '36px',
              color: '#ffffff',
              borderRadius: '0px',
            }}
            onClick={pushToLanding}
          >
            로그인
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default NavBar;

const Wrapper = styled.div`
  z-index: 3;
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
