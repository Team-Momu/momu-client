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
import Image from 'next/image';

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
        style={{ width: '370px', margin: 'auto' }}
      >
        <DialogTitle style={{ textAlign: 'center' }}>
          <Image src={Korea} width={28} height={28} />
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            카카오 아이디로 간편 로그인하고 게시글을 확인해보세요!
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{ display: 'flex', justifyContent: 'center' }}>
          <Button style={{ border: '1px solid red' }} onClick={handleClose}>
            확인
          </Button>
          <Button onClick={handleClose}>로그인</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default Test;
