import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, useAppDispatch } from 'store/store';
import { useEffect, useState } from 'react';
import React from 'react';

const curationSlice = require('@slices/curation/curationSlice');
const userSlice = require('@slices/user/userSlice');

const GetCurationCard = () => {
  //addFeed에서 받아와야하는 데이터: 지역, 시간대, 음주여부, 몇 명, 추가요청사항, 작성일, 답변 개수.
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(curationSlice.actions.fetchCurationInfo());
    dispatch(userSlice.actions.fetchUserInfo());
  }, [dispatch]);

  const onClick = () => {
    scrapState ? setScrapState(false) : setScrapState(true);
    //scrapState 백에 넘겨줘야함.
  };

  return (
    <CurationContainer>
      <InfoContainer>
        <UpperContainer>
          <FirstLineInfo>
            <InfoText>#{area}</InfoText>
            <InfoText>#{isDrink}</InfoText>
          </FirstLineInfo>
          <SecondLineInfo>
            <InfoText>#{when}</InfoText>
            <InfoText>#{personnel}</InfoText>
          </SecondLineInfo>
          <ScrapButton onClick={onClick}>
            {scrapState ? (
              <img src={'img/scrap/Scrapped.png'} />
            ) : (
              <img src={'img/scrap/Scrap.svg'} />
            )}
          </ScrapButton>
        </UpperContainer>
        <AdditionalText>{additionalText}</AdditionalText>
        <Line />
      </InfoContainer>
      <BottomContainer>
        <BottomInfo>
          <ProfileImg src={'img/ProfileTest.png'} />
          <USerId>{userId}</USerId>
          <LineImg src={'img/Line.png'} />
          <Mukbti>{mukbti}</Mukbti>
        </BottomInfo>
        <BottomInfo>
          <CardInfo>2022.07.07</CardInfo>
          <CardInfo>큐레이션 3</CardInfo>
        </BottomInfo>
      </BottomContainer>
    </CurationContainer>
  );
};

export default React.memo(GetCurationCard);

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
  padding-left: 4px;
  padding-top: 20px;
  //얘도 없는 색상이 추가 된건지 확인 필요
  color: #a09a9a;
`;

const BottomInfo = styled.div`
  display: flex;
`;
