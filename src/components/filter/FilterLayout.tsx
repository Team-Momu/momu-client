import { addCurationSlice } from '@slices/curation/addCurationSlice';
import { getFilteredCurationThunk } from '@slices/filter/filterThunk';
import { useState } from 'react';
import { RootState, useAppDispatch, useAppSelector } from 'store/store';
import styled from 'styled-components';
import { ButtonContainer, ChoiceButton } from 'styles/CommonStyle';
import { onChangeLocation } from 'utils/common/onChangeLocation';
import { onClickCount } from 'utils/common/onClickCount';
import { onClickDrink } from 'utils/common/onClickDrink';
import { onClickTime } from 'utils/common/onClickTime';

interface DismissProps {
  onDismiss: () => void;
}

const FilterLayout = ({ onDismiss }: DismissProps) => {
  const dispatch = useAppDispatch();
  const { morning } = useAppSelector(
    (state: RootState) => state.addCuration.time
  );
  const { afternoon } = useAppSelector(
    (state: RootState) => state.addCuration.time
  );
  const { evening } = useAppSelector(
    (state: RootState) => state.addCuration.time
  );
  const { midnight } = useAppSelector(
    (state: RootState) => state.addCuration.time
  );
  const { not } = useAppSelector((state: RootState) => state.addCuration.drink);
  const { little } = useAppSelector(
    (state: RootState) => state.addCuration.drink
  );
  const { much } = useAppSelector(
    (state: RootState) => state.addCuration.drink
  );

  const { alone } = useAppSelector(
    (state: RootState) => state.addCuration.member_count
  );
  const { two } = useAppSelector(
    (state: RootState) => state.addCuration.member_count
  );
  const { three } = useAppSelector(
    (state: RootState) => state.addCuration.member_count
  );
  const { moreThanFive } = useAppSelector(
    (state: RootState) => state.addCuration.member_count
  );

  return (
    <FilterContainer>
      <ChooseArea>
        <FilterText>지역 설정</FilterText>
        <AreaDropdown
          onChange={(e: any) => {
            onChangeLocation(e, dispatch);
          }}
        >
          {' '}
          <option> </option>
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
        <FilterText>방문 예정 시간대</FilterText>
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
        <FilterText>음주 여부</FilterText>
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
        <FilterText>방문 인원수</FilterText>
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
      <DoneButton onClick={onDismiss}>완료</DoneButton>
    </FilterContainer>
  );
};

export default FilterLayout;
const FilterContainer = styled.div`
  padding-top: 10px;
  border-radius: 0%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const FilterText = styled.div`
  margin-bottom: 14px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #191919;
`;
const ChooseArea = styled.div`
  width: 258px;
  margin: 0 21px 30px 20px;
`;

const AreaDropdown = styled.select`
  padding-right: 4px;
  border: 1px solid #191919;
  width: 258px;
  height: 42px;
  -webkit-appearance: none; /* for chrome */
  -moz-appearance: none; /*for firefox*/
  appearance: none;
  background: url('img/filter/Dropdown.png') no-repeat 97% 50%/10px auto;
  &:ms-expand {
    display: none; /*for IE10,11*/
  }
`;

const ChooseTime = styled.div`
  width: 334px;
  margin: 0 21px 30px 20px;
`;

const ChooseDrink = styled.div`
  width: 248px;
  margin: 0 21px 30px 20px;
`;

const ChoosePersonnel = styled.div`
  width: 334px;
  margin: 0 21px 30px 20px;
`;

const DoneButton = styled.button`
  margin-top: 38px;
  width: 375px;
  height: 72px;
  background: #f57a08;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: #ffffff;
`;
