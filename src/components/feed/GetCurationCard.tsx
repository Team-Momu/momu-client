import styled from 'styled-components';
import wrapper, {
  RootState,
  useAppDispatch,
  useAppSelector,
} from 'store/store';
import { useCallback, useEffect, useState } from 'react';
import React from 'react';
import {
  deleteScrapStateThunk,
  postScrapStateThunk,
} from '@slices/scrap/scrapSlice';
import { FC } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import defaultImage from '@public/img/defaultProfile.png';
import scrapped from '@public/img/scrap/Scrapped.svg';
import scrap from '@public/img/scrap/Scrap.svg';
import line from '@public/img/Line.png';
import cardProfileMask from '@public/img/mask/cardProfileMask.svg';
import axios from 'axios';
import { userInfo } from '@slices/user/userThunk';
import DialogTitle from '@mui/material/DialogTitle';
import Korea from '@public/img/mbti/korea1.png';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { TransitionProps } from '@mui/material/transitions';
import Slide from '@mui/material/Slide';
import Logo from '@public/img/logoGroup.svg';
import { ContentTextStyle } from 'pages/test';

interface Props {
  area: string;
  isDrink: number;
  when: string;
  personnel: number;
  additionalText: string;
  usernickname: string;
  profileImg: string;
  mukbti: any;
  commentNum: number;
  createAt: string;
  scrapFlag: boolean;
  user: any;
  post: number;
  me?: any;
  me: any;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const GetCurationCard: FC<Props> = ({
  area,
  isDrink,
  when,
  personnel,
  additionalText,
  usernickname,
  profileImg,
  mukbti,
  commentNum,
  createAt,
  scrapFlag,
  user,
  post,
  me,
}) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const curation = useAppSelector(
    (state: RootState) => state.detailCuration.data
  );
  const isScrapped = useAppSelector((state: RootState) => state.scrap);
  const [drink, setDrink] = useState('');
  const [countPerson, setCountPerson] = useState('');
  const [open, setOpen] = useState(false);
  const [scrapState, setScrapState] = useState<boolean>();

  useEffect(() => {
    setScrapState(scrapFlag);
  }, [scrapFlag]);

  useEffect(() => {
    console.log('me in feed', me);
  }, [me]);

  useEffect(() => {
    switch (isDrink) {
      case 0:
        setDrink('안 마셔요');
        break;
      case 1:
        setDrink('간술만!');
        break;
      case 2:
        setDrink('마실래요');
        break;
      default:
        setDrink('');
    }
  }, [isDrink]);
  useEffect(() => {
    switch (personnel) {
      case 1:
        setCountPerson('혼자');
        break;
      case 2:
        setCountPerson('둘이서');
        break;
      case 3:
        setCountPerson('3~4명');
        break;
      case 4:
        setCountPerson('5인 이상');
        break;
      default:
        setDrink('');
    }
  }, [personnel]);

  const onClick = useCallback(() => {
    if (!me?.data?.id) {
      return setOpen(true);
    }
    scrapState ? setScrapState(false) : setScrapState(true);
    scrapState
      ? dispatch(deleteScrapStateThunk(post))
      : dispatch(postScrapStateThunk(post));
  }, [scrapState]);

  const moveToDetail = useCallback(() => {
    if (!me?.data?.id) {
      return setOpen(true);
    }
    router.push(`/feed/${post}`);
  }, [me]);

  const handleClose = () => {
    setOpen(false);
  };
  const pushToLanding = () => {
    router.push('/');
  };

  return (
    <>
      <CurationContainer>
        <InfoContainer>
          <UpperContainer>
            <GotoDetailButton onClick={moveToDetail}>
              <FirstLineInfo>
                <InfoText>#{area}</InfoText>
                <InfoText>#{drink}</InfoText>
              </FirstLineInfo>
              <SecondLineInfo>
                <InfoText>#{when}</InfoText>
                <InfoText>#{countPerson}</InfoText>
              </SecondLineInfo>
            </GotoDetailButton>
            <ScrapButton onClick={onClick}>
              {scrapState ? <Image src={scrapped} /> : <Image src={scrap} />}
            </ScrapButton>
          </UpperContainer>
          {additionalText === '' ? (
            <NullTextContainer></NullTextContainer>
          ) : (
            <AdditionalText>{additionalText}</AdditionalText>
          )}

          <Line />
        </InfoContainer>
        <BottomContainer>
          <BottomInfo>
            <ProfileImg>
              <Image
                src={profileImg || defaultImage}
                width={28}
                height={28}
                objectFit="cover"
              />
              <Mask>
                <Image src={cardProfileMask} width={28} height={28} />
              </Mask>
            </ProfileImg>
            <USerId>{usernickname}</USerId>
            <LineImg>
              <Image src={line} height={'15'} />
            </LineImg>
            <Mukbti>{mukbti}</Mukbti>
          </BottomInfo>
          <BottomInfo>
            <CardInfo>{createAt}</CardInfo>
            <CardInfo>큐레이션 {commentNum}</CardInfo>
          </BottomInfo>
        </BottomContainer>
      </CurationContainer>
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

export default React.memo(GetCurationCard);

const GotoDetailButton = styled.button`
  margin: 0;
  padding: 0;
  display: flex;
`;

const CurationContainer = styled.div`
  position: relative;
  width: 339px;
  height: 193px;
  border: 1px solid #191919;
  margin: 16px 0;
  padding: 20px 16px 20px 10px;
  display: flex;
  flex-direction: column;
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const UpperContainer = styled.div`
  display: flex;

  justify-content: space-between;
`;
const FirstLineInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
const SecondLineInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
const ScrapButton = styled.button`
  background-color: transparent;
  width: 24px;
  height: 24px;
  margin-left: auto;
`;
const InfoText = styled.div`
  text-align: left;
  padding-left: 10px;
  padding-bottom: 7px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
`;
const NullTextContainer = styled.div`
  height: 57px;
`;

const AdditionalText = styled.div`
  text-align: left;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  padding: 17px 0 24px 10px;
  padding-bottom: 24px;
  width: 311px;
  white-space: nowrap;
  overflow: hidden;
`;

const Line = styled.div`
  border-bottom: 1px solid #191919;
  margin: 0 4px 0 10px;
`;

const BottomContainer = styled.div`
  padding: 0 4px 0 6px;

  display: flex;
  justify-content: space-between;
`;

const Mask = styled.div`
  position: absolute;

  left: 16px;
  top: 151px;
  width: 28px;
  height: 28px;
  z-index: 1;
`;

const ProfileImg = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 14px;
  overflow: hidden;
  margin-top: 11px;
`;
const USerId = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  padding-left: 10px;
  padding-top: 17px;
`;

const LineImg = styled.div`
  padding: 2px 8px 0 8px;
  margin-top: 17px;
`;

const Mukbti = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;

  padding-top: 18px;

  //얘도 없는 색상이 추가 된건지 확인 필요
  color: #2260d8;
`;

const CardInfo = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 17px;
  padding-left: 8px;
  padding-top: 17px;
  //얘도 없는 색상이 추가 된건지 확인 필요
  color: #a09a9a;
`;

const BottomInfo = styled.div`
  display: flex;
`;
