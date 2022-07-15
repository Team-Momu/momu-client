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
import open2 from '@public/img/mbti/open22.png';
import separated from '@public/img/mbti/separated1.png';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { useEffect } from 'react';
import { mbtiSlice } from '@slices/mbti/mbtiSlice';
const MbtiStage8 = () => {
  const leftStage8 = useSelector(
    (state: RootState) => state.mbti.stage8.leftStage8
  );
  const rightStage8 = useSelector(
    (state: RootState) => state.mbti.stage8.rightStage8
  );

  const dispatch = useDispatch();

  const findTypeOfBox = (findTypeOfBox: string) => {
    switch (findTypeOfBox) {
      case '개방된 공간':
        dispatch(mbtiSlice.actions.changeLeftInStage8());
        break;
      case '분리된 공간':
        dispatch(mbtiSlice.actions.changeRightInStage8());
        break;
      default:
        null;
    }
  };
  const onClick = (e: React.MouseEvent<HTMLElement>): void => {
    //@ts-ignore
    const typeOfBox: string = e.target.innerText;
    dispatch(mbtiSlice.actions.resetAllInStage8());
    findTypeOfBox(typeOfBox);
  };
  useEffect(() => {
    if (leftStage8) {
      dispatch(mbtiSlice.actions.addLeftStage8());
    }
    if (rightStage8) {
      dispatch(mbtiSlice.actions.addRightStage8());
    }
  }, [leftStage8, rightStage8]);

  return (
    <>
      <LeftBoxPosition active={leftStage8}>
        <LeftBoxParent>
          <Image src={open2} />
          <Layer active={leftStage8} />
          <LeftTextStyle onClick={onClick}>개방된 공간</LeftTextStyle>
        </LeftBoxParent>
      </LeftBoxPosition>
      <RightBoxPosition active={rightStage8}>
        <RightBoxParent>
          <Image src={separated} />
          <Layer active={rightStage8} />
          <RightTextStyle onClick={onClick}>분리된 공간</RightTextStyle>
        </RightBoxParent>
      </RightBoxPosition>
    </>
  );
};

export default MbtiStage8;
