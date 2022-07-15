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
import lively from '@public/img/mbti/lively1.png';
import snug from '@public/img/mbti/snug1.png';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { useEffect } from 'react';
import { mbtiSlice } from '@slices/mbti/mbtiSlice';
const MbtiStage7 = () => {
  const leftStage7 = useSelector(
    (state: RootState) => state.mbti.stage7.leftStage7
  );
  const rightStage7 = useSelector(
    (state: RootState) => state.mbti.stage7.rightStage7
  );

  const dispatch = useDispatch();

  const findTypeOfBox = (findTypeOfBox: string) => {
    switch (findTypeOfBox) {
      case '활기찬 공간':
        dispatch(mbtiSlice.actions.changeLeftInStage7());
        break;
      case '아늑한 공간':
        dispatch(mbtiSlice.actions.changeRightInStage7());
        break;
      default:
        null;
    }
  };
  const onClick = (e: React.MouseEvent<HTMLElement>): void => {
    //@ts-ignore
    const typeOfBox: string = e.target.innerText;
    dispatch(mbtiSlice.actions.resetAllInStage7());
    findTypeOfBox(typeOfBox);
  };

  useEffect(() => {
    if (leftStage7) {
      dispatch(mbtiSlice.actions.addLeftStage7());
    }
    if (rightStage7) {
      dispatch(mbtiSlice.actions.addRightStage7());
    }
  }, [leftStage7, rightStage7]);

  return (
    <>
      <LeftBoxPosition active={leftStage7}>
        <LeftBoxParent>
          <Image src={lively} />
          <Layer active={leftStage7} />
          <LeftTextStyle onClick={onClick}>활기찬 공간</LeftTextStyle>
        </LeftBoxParent>
      </LeftBoxPosition>
      <RightBoxPosition active={rightStage7}>
        <RightBoxParent>
          <Image src={snug} />
          <Layer active={rightStage7} />
          <RightTextStyle onClick={onClick}>아늑한 공간</RightTextStyle>
        </RightBoxParent>
      </RightBoxPosition>
    </>
  );
};

export default MbtiStage7;
