import {
  Layer,
  LeftBoxParent,
  LeftBoxPosition,
  LeftTextStyle,
  RightBoxParent,
  RightBoxPosition,
  RightTextStyle,
} from './MbtiSelectBoxStage678';
import Image from 'next/image';
import openPhoto from '@public/img/mbti/open1.png';
import privatePhoto from '@public/img/mbti/private1.png';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { useEffect } from 'react';
import { mbtiSlice } from '@slices/mbti/mbtiSlice';
const MbtiStage6 = () => {
  const leftStage6 = useSelector(
    (state: RootState) => state.mbti.stage6.leftStage6
  );
  const rightStage6 = useSelector(
    (state: RootState) => state.mbti.stage6.rightStage6
  );

  const dispatch = useDispatch();

  const findTypeOfBox = (findTypeOfBox: string) => {
    switch (findTypeOfBox) {
      case '오픈된 공간':
        dispatch(mbtiSlice.actions.changeLeftInStage6());
        break;
      case '프라이빗한 공간':
        dispatch(mbtiSlice.actions.changeRightInStage6());
        break;
      default:
        null;
    }
  };
  const onClick = (e: React.MouseEvent<HTMLElement>): void => {
    //@ts-ignore
    const typeOfBox: string = e.target.innerText;
    dispatch(mbtiSlice.actions.resetAllInStage6());
    findTypeOfBox(typeOfBox);
  };

  useEffect(() => {
    if (leftStage6) {
      dispatch(mbtiSlice.actions.addLeftStage6());
    }
    if (rightStage6) {
      dispatch(mbtiSlice.actions.addRightStage6());
    }
  }, [leftStage6, rightStage6]);

  return (
    <>
      <LeftBoxPosition active={leftStage6}>
        <LeftBoxParent>
          <Image src={openPhoto} />
          <Layer active={leftStage6} />
          <LeftTextStyle onClick={onClick}>오픈된 공간</LeftTextStyle>
        </LeftBoxParent>
      </LeftBoxPosition>
      <RightBoxPosition active={rightStage6}>
        <RightBoxParent>
          <Image src={privatePhoto} />
          <Layer active={rightStage6} />
          <RightTextStyle onClick={onClick}>프라이빗한 공간</RightTextStyle>
        </RightBoxParent>
      </RightBoxPosition>
    </>
  );
};

export default MbtiStage6;
