import AlertDialogSlide from '@common/AlertDialog';
import { useState } from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import * as React from 'react';
import { TransitionProps } from '@mui/material/transitions';
import Slide from '@mui/material/Slide';
import Korea from '@public/img/mbti/korea1.png';
import Logo from '@public/img/logoGroup.svg';
import Image from 'next/image';
import styled from 'styled-components';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Test = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button onClick={handleClickOpen}>누르면 뜸 </button>
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
            onClick={handleClose}
          >
            로그인
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export const ContentTextStyle = styled.div<{ first?: boolean }>`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 100%;
  /* or 12px */
  margin-bottom: ${({ first }) => (first ? '5px' : 'none')};

  text-align: center;

  color: #191919;
`;

export default Test;
