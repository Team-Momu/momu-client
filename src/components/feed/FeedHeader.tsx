import styled from 'styled-components';
import { BottomSheet, BottomSheetRef } from 'react-spring-bottom-sheet';
import { useCallback, useEffect, useState } from 'react';
import FilterLayout from 'components/filter/FilterLayout';
import 'react-spring-bottom-sheet/dist/style.css';
import {
  HeaderContainer,
  HeaderTextContainer,
  Line,
} from 'styles/headerstyle/HeaderCommonStyle';
import { getFilteredCurationThunk } from '@slices/filter/filterThunk';
import { RootState, useAppDispatch, useAppSelector } from 'store/store';
import { addCurationSlice } from '@slices/curation/addCurationSlice';

const FeedHeader = () => {
  const [open, setOpen] = useState(false);

  const dispatch = useAppDispatch();
  const data = useAppSelector((state: RootState) => state.addCuration.data);

  const resetState = () => {
    dispatch(addCurationSlice.actions.resetLocation());
    dispatch(addCurationSlice.actions.resetActiveInTime());
    dispatch(addCurationSlice.actions.resetActiveInDrink());
    dispatch(addCurationSlice.actions.resetActiveInCount());
  };

  const onClick = () => {
    setOpen(true);
    resetState();
    dispatch(addCurationSlice.actions.resetData());
  };

  function onDismiss() {
    dispatch(getFilteredCurationThunk(data));
    resetState();
    setOpen(false);
  }

  return (
    <div>
      <HeaderContainer>
        <HeaderTextContainer>Feed</HeaderTextContainer>
        <ButtonContainer>
          <FilterButton onClick={onClick}>
            <FilterText>필터</FilterText>
            <FilterIcon src={'/img/filter/filtericon.png'} />
          </FilterButton>
        </ButtonContainer>
      </HeaderContainer>
      <Line></Line>
      <BottomSheetContainer>
        <BottomSheet
          open={open}
          onDismiss={onDismiss}
          snapPoints={({ maxHeight }) => 0.74 * maxHeight}
        >
          <FilterLayout onDismiss={onDismiss} />
        </BottomSheet>
      </BottomSheetContainer>
    </div>
  );
};
export default FeedHeader;

const ButtonContainer = styled.div`
  padding-right: 20px;
`;
const FilterButton = styled.button`
  background-color: transparent;
  width: 76px;
  height: 36px;

  border: 1.5px solid #191919;
  align-items: center;
  display: flex;
  align-items: center;
`;

const FilterText = styled.div`
  position: absolute;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  margin-left: 12px;
`;

const FilterIcon = styled.img`
  width: 18px;
  height: 18px;
  margin-left: 42px;
`;

const BottomSheetContainer = styled.div`
  width: 375px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0px;
`;
