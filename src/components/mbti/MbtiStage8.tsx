import {
  LeftBoxParent,
  LeftBoxPosition,
  LeftTextStyle,
  RightBoxParent,
  RightBoxPosition,
  RightTextStyle,
} from './MbtiSelectBoxStage678';
import Image from 'next/image';
import open2 from '@public/img/mbti/open2.png';
import separated from '@public/img/mbti/separated.png';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';

const MbtiStage8 = () => {
  const leftStage8 = useSelector(
    (state: RootState) => state.mbti.stage8.leftStage8
  );
  const rightStage8 = useSelector(
    (state: RootState) => state.mbti.stage8.rightStage8
  );
  return (
    <>
      <LeftBoxPosition>
        <LeftBoxParent>
          <Image src={open2} />
          <LeftTextStyle>개방된 공간</LeftTextStyle>
        </LeftBoxParent>
      </LeftBoxPosition>
      <RightBoxPosition>
        <RightBoxParent>
          <Image src={separated} />
          <RightTextStyle>분리된 공간</RightTextStyle>
        </RightBoxParent>
      </RightBoxPosition>
    </>
  );
};

export default MbtiStage8;
