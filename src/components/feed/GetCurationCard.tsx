import styled from 'styled-components';
import { RootState, useAppDispatch, useAppSelector } from 'store/store';
import { useCallback, useEffect, useState } from 'react';
import React from 'react';
import {
  deleteScrapStateThunk,
  postScrapStateThunk,
} from '@slices/scrap/scrapSlice';
import { FC } from 'react';
import { useRouter } from 'next/router';

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
}

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
}) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const isScrapped = useAppSelector((state: RootState) => state.scrap);
  const [drink, setDrink] = useState('');
  const [countPerson, setCountPerson] = useState('');
  const [scrapState, setScrapState] = useState(scrapFlag);

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
    scrapState ? setScrapState(false) : setScrapState(true);
    scrapState
      ? dispatch(deleteScrapStateThunk(post))
      : dispatch(postScrapStateThunk(post));
  }, [scrapState]);

  const moveToDetail = useCallback(() => {
    router.push(`/feed/${post}`);
  }, []);

  console.log(scrapFlag, scrapState);

  return (
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
            {scrapState ? (
              <img src={'/img/scrap/Scrapped.png'} />
            ) : (
              <img src={'/img/scrap/Scrap.svg'} />
            )}
          </ScrapButton>
        </UpperContainer>
        <AdditionalText>{additionalText}</AdditionalText>
        <Line />
      </InfoContainer>
      <BottomContainer>
        <BottomInfo>
          <ProfileImg src={'/img/ProfileTest.png'} />
          <USerId>{usernickname}</USerId>
          <LineImg src={'/img/Line.png'} />
          <Mukbti>{mukbti.mbti}</Mukbti>
        </BottomInfo>
        <BottomInfo>
          <CardInfo>{createAt}</CardInfo>
          <CardInfo>큐레이션 {commentNum}</CardInfo>
        </BottomInfo>
      </BottomContainer>
    </CurationContainer>
  );
};

export default React.memo(GetCurationCard);

const GotoDetailButton = styled.button`
  margin: 0;
  padding: 0;
  display: flex;
`;

const CurationContainer = styled.div`
  width: 341px;
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
//카드 디자인 방해하지 않도록 width넘어가면 말줄임으로 표시
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
  margin: 0;
  padding: 0 4px 0 6px;

  display: flex;
  justify-content: space-between;
`;

const ProfileImg = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  margin-top: 14px;
`;
const USerId = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  padding-left: 10px;
  padding-top: 20px;
`;

const LineImg = styled.img`
  padding: 2px 8px 0 8px;
  height: 15px;
  margin-top: 20px;
`;

const Mukbti = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;

  padding-top: 20px;

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
  padding-top: 20px;
  //얘도 없는 색상이 추가 된건지 확인 필요
  color: #a09a9a;
`;

const BottomInfo = styled.div`
  display: flex;
`;
