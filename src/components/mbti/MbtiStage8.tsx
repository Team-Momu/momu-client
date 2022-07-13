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
import openPhoto from '@public/img/mbti/open.png';
import privatePhoto from '@public/img/mbti/private.png';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { useEffect } from 'react';

const mbtiSlice = require('@slices/mbti/mbtiSlice');
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
          <Image src={openPhoto} />
          <Layer active={leftStage8} />
          <LeftTextStyle onClick={onClick}>개방된 공간</LeftTextStyle>
        </LeftBoxParent>
      </LeftBoxPosition>
      <RightBoxPosition active={rightStage8}>
        <RightBoxParent>
          <Image src={privatePhoto} />
          <Layer active={rightStage8} />
          <RightTextStyle onClick={onClick}>분리된 공간</RightTextStyle>
        </RightBoxParent>
      </RightBoxPosition>
    </>
  );
};

export default MbtiStage8;
