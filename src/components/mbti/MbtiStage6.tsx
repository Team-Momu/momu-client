import {
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
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';

const MbtiStage6 = () => {
  const leftStage6 = useSelector(
    (state: RootState) => state.mbti.stage6.leftStage6
  );
  const rightStage6 = useSelector(
    (state: RootState) => state.mbti.stage6.rightStage6
  );

  return (
    <>
      <LeftBoxPosition active={true}>
        <LeftBoxParent>
          <Image src={openPhoto} />
          <LeftTextStyle>오픈된 공간</LeftTextStyle>
        </LeftBoxParent>
      </LeftBoxPosition>
      <RightBoxPosition active={false}>
        <RightBoxParent>
          <Image src={privatePhoto} />
          <RightTextStyle>프라이빗한 공간</RightTextStyle>
        </RightBoxParent>
      </RightBoxPosition>
    </>
  );
};

export default MbtiStage6;
