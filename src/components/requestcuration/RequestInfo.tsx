import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { ButtonContainer, ChoiceButton } from 'styles/CommonStyle';
import useCheckLength from 'utils/hooks/useCheckLength';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store/store';
import { addCurationSlice } from '@slices/curation/addCurationSlice';
import {
  BackButton,
  BackIcon,
  HeaderContainer,
  HeaderLeftSide,
  HeaderTextContainer,
  Line,
} from '../../styles/headerstyle/HeaderCommonStyle';
import { useRouter } from 'next/router';
import { addCurationData } from '@slices/curation/addCurationThunk';
import { onClickTime } from 'utils/common/onClickTime';
import { onClickDrink } from 'utils/common/onClickDrink';
import { onClickCount } from 'utils/common/onClickCount';
import { onChangeLocation } from 'utils/common/onChangeLocation';
import { toast } from 'react-toastify';

const RequestInfo = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { description, handleInputLength } = useCheckLength();

  const { sinchon } = useSelector(
    (state: RootState) => state.addCuration.location
  );
  const { changchon } = useSelector(
    (state: RootState) => state.addCuration.location
  );
  const { morning } = useSelector((state: RootState) => state.addCuration.time);
  const { afternoon } = useSelector(
    (state: RootState) => state.addCuration.time
  );
  const { evening } = useSelector((state: RootState) => state.addCuration.time);
  const { midnight } = useSelector(
    (state: RootState) => state.addCuration.time
  );
  const { not } = useSelector((state: RootState) => state.addCuration.drink);
  const { little } = useSelector((state: RootState) => state.addCuration.drink);
  const { much } = useSelector((state: RootState) => state.addCuration.drink);

  const { alone } = useSelector(
    (state: RootState) => state.addCuration.member_count
  );
  const { two } = useSelector(
    (state: RootState) => state.addCuration.member_count
  );
  const { three } = useSelector(
    (state: RootState) => state.addCuration.member_count
  );
  const { moreThanFive } = useSelector(
    (state: RootState) => state.addCuration.member_count
  );
  const data = useSelector((state: RootState) => state.addCuration.data);
  const status = useSelector((state: RootState) => state.addCuration.status);

  //backbutton 클릭하거나 완료 버튼 클릭시 state reset
  const resetState = () => {
    dispatch(addCurationSlice.actions.resetLocation());
    dispatch(addCurationSlice.actions.resetActiveInTime());
    dispatch(addCurationSlice.actions.resetActiveInDrink());
    dispatch(addCurationSlice.actions.resetActiveInCount());
  };

  const onChangeDescription = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      handleInputLength(e, 25);

      // setText(e.target.value);
    },

    [description]
  );

  // 분리 해줘야 description 데이터 넘어감
  useEffect(() => {
    dispatch(addCurationSlice.actions.onClickComplete(description));
  }, [description]);

  const onClickSubmit = (e: React.SyntheticEvent) => {
    if (data.location === '') {
      return toast('장소를 선택해 주세요.', {
        position: 'top-center',
        autoClose: 2500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    if (data.location === '신촌,홍대 부근 동네를 선택해주세요!') {
      return toast('장소를 선택해 주세요.', {
        position: 'top-center',
        autoClose: 2500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    dispatch(addCurationData(data));

    router.push('/feed');

    resetState();
  };

  const onClickBackButton = () => {
    router.back();
    resetState();
  };

  return (
    <>
      <HeaderContainer>
        <HeaderLeftSide>
          <BackButton onClick={onClickBackButton}>
            <BackIcon src={'/img/header/backbutton.svg'} />
          </BackButton>
          <HeaderTextContainer>Request</HeaderTextContainer>
        </HeaderLeftSide>
        <SubmitButton onClick={onClickSubmit}>완료</SubmitButton>
      </HeaderContainer>
      <Line></Line>
      <Wrapper>
        <ChooseArea>
          <QuestionText>어느 지역에서 식사하실 건가요?</QuestionText>
          <AreaDropdown
            onChange={(e: any) => {
              onChangeLocation(e, dispatch);
            }}
          >
            <option>신촌,홍대 부근 동네를 선택해주세요!</option>
            <option>신촌동</option>
            <option>창천동</option>
            <option>연희동</option>
            <option>대현동</option>
            <option>대신동</option>
            <option>연남동</option>
            <option>서교동</option>
            <option>동교동</option>
            <option>합정동</option>
            <option>망원동</option>
            <option>상수동</option>
          </AreaDropdown>
        </ChooseArea>
        <ChooseTime>
          <QuestionText>방문 예정 시간대를 골라주세요!</QuestionText>

          <ButtonContainer>
            <ChoiceButton
              active={morning}
              onClick={(e: any) => {
                onClickTime(e, dispatch);
              }}
            >
              아침
            </ChoiceButton>
            <ChoiceButton
              active={afternoon}
              onClick={(e: any) => {
                onClickTime(e, dispatch);
              }}
            >
              점심
            </ChoiceButton>
            <ChoiceButton
              active={evening}
              onClick={(e: any) => {
                onClickTime(e, dispatch);
              }}
            >
              저녁
            </ChoiceButton>
            <ChoiceButton
              active={midnight}
              onClick={(e: any) => {
                onClickTime(e, dispatch);
              }}
            >
              밤
            </ChoiceButton>
          </ButtonContainer>
        </ChooseTime>
        <ChooseDrink>
          <QuestionText>음주 여부를 선택해주세요!</QuestionText>
          <ButtonContainer>
            <ChoiceButton
              active={not}
              onClick={(e: any) => {
                onClickDrink(e, dispatch);
              }}
            >
              안 마셔요
            </ChoiceButton>
            <ChoiceButton
              active={little}
              onClick={(e: any) => {
                onClickDrink(e, dispatch);
              }}
            >
              간술만!
            </ChoiceButton>
            <ChoiceButton
              active={much}
              onClick={(e: any) => {
                onClickDrink(e, dispatch);
              }}
            >
              마실래요
            </ChoiceButton>
          </ButtonContainer>
        </ChooseDrink>
        <ChoosePersonnel>
          <QuestionText>몇 명이서 방문 예정인가요?</QuestionText>
          <ButtonContainer>
            <ChoiceButton
              active={alone}
              onClick={(e: any) => {
                onClickCount(e, dispatch);
              }}
            >
              혼자
            </ChoiceButton>
            <ChoiceButton
              active={two}
              onClick={(e: any) => {
                onClickCount(e, dispatch);
              }}
            >
              둘이서
            </ChoiceButton>
            <ChoiceButton
              active={three}
              onClick={(e: any) => {
                onClickCount(e, dispatch);
              }}
            >
              3~4명
            </ChoiceButton>
            <ChoiceButton
              active={moreThanFive}
              onClick={(e: any) => {
                onClickCount(e, dispatch);
              }}
            >
              5인 이상
            </ChoiceButton>
          </ButtonContainer>
        </ChoosePersonnel>

        <AdditionalRequest>
          <QuestionText>
            추가 요청사항을 알려주세요! <Optional>(선택)</Optional>
          </QuestionText>
          {description.length > 25 ? (
            <AdditionalInput
              onChange={onChangeDescription}
              type="text"
              value={description}
              readOnly
            />
          ) : (
            <AdditionalInput
              onChange={onChangeDescription}
              type="text"
              placeholder="(25자 이내) 싫어하는 음식, 상황 등을 말씀해주세요!"
              value={description}
            />
          )}
        </AdditionalRequest>
      </Wrapper>
    </>
  );
};

export default RequestInfo;

const Wrapper = styled.div`
  border-radius: 0%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const QuestionText = styled.div`
  margin-bottom: 14px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  /* identical to box height */

  color: #191919;
`;
const Optional = styled.span`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  /* identical to box height */

  color: #191919;
`;

const AreaDropdown = styled.select`
  padding-right: 4px;
  border: 1px solid #191919;
  width: 343px;
  height: 42px;
  -webkit-appearance: none; /* for chrome */
  -moz-appearance: none; /*for firefox*/
  appearance: none;
  background: url('/img/filter/Dropdown.png') no-repeat 97% 50%/10px auto;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  /* identical to box height, or 129% */

  color: #767676;

  &:ms-expand {
    display: none; /*for IE10,11*/
  }
`;

const ChooseArea = styled.div`
  margin-top: 36px;
`;

const ChooseTime = styled.div`
  margin-top: 40px;
`;

const ChooseDrink = styled.div`
  margin-top: 40px;
  width: 248px;
`;

const ChoosePersonnel = styled.div`
  margin-top: 40px;
`;

const AdditionalRequest = styled.div`
  margin-top: 40px;
`;

const AdditionalInput = styled.input`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height, or 125% */

  color: #191919;

  padding-left: 0;
  width: 343px;
  border: none;
  border-bottom: 1.5px solid #767676;
  &:placeholder-shown {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    /* identical to box height, or 143% */

    color: #767676;
  }
`;

const SubmitButton = styled.button`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 20px;
  /* identical to box height, or 100% */

  color: #999999;
  margin-right: 24px;
  &:hover {
    color: #f57a08;
  }
`;
