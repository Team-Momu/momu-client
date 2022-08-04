import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import DetailFeedContents from 'components/detailfeed/DetailFeed';
import DetailFeedHeader from 'components/detailfeed/DetailFeedHeader';
import CommentList from 'components/detailfeed/CommentList';
import { GetServerSideProps } from 'next';
import { RootState, useAppDispatch, useAppSelector } from 'store/store';
import { getCurationByIdThunk } from '@slices/curation/detailCurationPostSlice';
import { userInfo } from '@slices/user/userThunk';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import * as React from 'react';
import { TransitionProps } from '@mui/material/transitions';
import Slide from '@mui/material/Slide';
import Image from 'next/image';
import Logo from '@public/img/logoGroup.svg';
import { ContentTextStyle } from '../test';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DetailFeed = ({ id }: any) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const postId = Number(id);

  const [sameUser, setSameUser] = useState<boolean | null>(null);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const curationSelectedFlag = useAppSelector(
    (state: RootState) => state.detailCuration.data.selected_flag
  );
  // 로그인한 유저 아이디
  const logInUserId = useAppSelector(
    (state: RootState) => state.user.me.data?.id
  );
  // 질문 글을 쓴 유저 아이디
  const userId = useAppSelector(
    (state: RootState) => state.detailCuration.data.user.id
  );
  const me = useAppSelector((state: RootState) => state.user.me);

  useEffect(() => {
    dispatch(userInfo());
  }, []);

  useEffect(() => {
    if (!me?.id) {
      setOpen(true);
    }
  }, [me]);

  const writeComment = useCallback(() => {
    router.push(`/comment/${postId}`);
  }, []);
  const pushToLanding = () => {
    router.push('/');
  };
  const pushToFeed = () => {
    router.push('/feed');
  };

  return (
    <>
      <Wrapper className="relative">
        <HeaderContainer className="sticky top-0">
          <DetailFeedHeader />
        </HeaderContainer>
        <DetailFeedContentsContainer>
          <DetailFeedContents me={me} postId={postId} />
        </DetailFeedContentsContainer>
        <ContentContainer>
          <CommentList
            curationSelectedFlag={curationSelectedFlag}
            postId={postId}
            sameUser={sameUser}
          />
        </ContentContainer>
        <ButtonContainer className="fixed">
          <AddCurationButton onClick={writeComment}>
            큐레이션 하기
          </AddCurationButton>
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
            onClick={pushToFeed}
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

//@ts-ignore
export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const id = context?.params?.id;
    return {
      props: { id },
    };
  } catch (error) {
    console.error(error);
  }
};

export default DetailFeed;

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

const DetailFeedContentsContainer = styled.div`
  justify-items: center;
  margin-left: 2px;
`;

const ButtonContainer = styled.div`
  z-index: 2;
  width: 343px;
  &.fixed {
    position: fixed;
    bottom: 0px;
  }
`;

const AddCurationButton = styled.button`
  margin-bottom: 10px;
  width: calc(100% + 16px * 2);
  margin: 0 -16px;
  height: 64px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  /* identical to box height */

  color: #ffffff;

  background-color: #f57a08;
`;

const ContentContainer = styled.div`
  padding-bottom: 64px;
`;
