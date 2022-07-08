import {
  LeftBoxParent,
  LeftBoxPosition,
  LeftTextStyle,
  RightBoxParent,
  RightBoxPosition,
  RightTextStyle,
} from './MbtiSelectBoxStage678';
import Image from 'next/image';
import lively from '@public/img/mbti/lively.png';
import snung from '@public/img/mbti/snug.png';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';

const MbtiStage7 = () => {
  const leftStage7 = useSelector(
    (state: RootState) => state.mbti.stage7.leftStage7
  );
  const rightStage7 = useSelector(
    (state: RootState) => state.mbti.stage7.rightStage7
  );
  return (
    <>
      <LeftBoxPosition>
        <LeftBoxParent>
          <Image src={lively} />
          <LeftTextStyle>활기찬 공간</LeftTextStyle>
        </LeftBoxParent>
      </LeftBoxPosition>
      <RightBoxPosition>
        <RightBoxParent>
          <Image src={snung} />
          <RightTextStyle>아늑한 공간</RightTextStyle>
        </RightBoxParent>
      </RightBoxPosition>
    </>
  );
};

export default MbtiStage7;
