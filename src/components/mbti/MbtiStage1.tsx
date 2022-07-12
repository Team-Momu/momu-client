import {
  BoxParent,
  Layer,
  UpSideLeftBoxPosition,
  BoxTextStyle,
  UpSideMiddleBoxPosition,
  UpSideRightBoxPosition,
  DownSideLeftBoxPosition,
  DownSideMiddleBoxPosition,
  DownSideRightBoxPosition,
} from './MbtiSelectBoxStage1';

import Image from 'next/image';
import Korea from '@public/img/mbti/Korea.png';
import China from '@public/img/mbti/China.png';
import Japan from '@public/img/mbti/Japan.png';
import Western from '@public/img/mbti/Western.png';
import Fusion from '@public/img/mbti/Fusion.png';
import Snack from '@public/img/mbti/Snack.png';
const mbtiSlice = require('@slices/dummy/mbti/mbtiSlice');
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { useCallback, useEffect } from 'react';
const MbtiStage1 = () => {
  const dispatch = useDispatch();
  const result = useSelector((state: RootState) => state.mbti.result);
  const mbti = useSelector((state: RootState) => state.mbti.mbti);
  const korea = useSelector((state: RootState) => state.mbti.stage1.korea);
  const china = useSelector((state: RootState) => state.mbti.stage1.china);
  const japan = useSelector((state: RootState) => state.mbti.stage1.japan);
  const western = useSelector((state: RootState) => state.mbti.stage1.western);
  const fusion = useSelector((state: RootState) => state.mbti.stage1.fusion);
  const snack = useSelector((state: RootState) => state.mbti.stage1.snack);

  const findTypeOfFood = (typeOfFood: string) => {
    switch (typeOfFood) {
      case '한식':
        dispatch(mbtiSlice.actions.changeKoreaActiveInStage1());
        break;
      case '중식':
        dispatch(mbtiSlice.actions.changeChinaActiveInStage1());
        break;
      case '일식':
        dispatch(mbtiSlice.actions.changeJapanActiveInStage1());
        break;
      case '양식':
        dispatch(mbtiSlice.actions.changeWesternActiveInStage1());
        break;
      case '퓨전식':
        dispatch(mbtiSlice.actions.changeFusionActiveInStage1());
        break;
      case '분식':
        dispatch(mbtiSlice.actions.changeSnackActiveInStage1());
        break;
      default:
        null;
    }
  };

  const onClick = useCallback((e: React.MouseEvent<HTMLElement>): void => {
    // @ts-ignore
    const typeOfFood: string = e.target.innerText;
    // dispatch(mbtiSlice.actions.resetAllActiveInStage1());
    findTypeOfFood(typeOfFood);
  }, []);

  useEffect(() => {
    if (fusion) {
      dispatch(mbtiSlice.actions.addStage1());
    } else {
      dispatch(mbtiSlice.actions.resetStage1());
    }
  }, [korea, china, japan, western, fusion, snack]);

  return (
    <>
      <UpSideLeftBoxPosition active={korea}>
        <BoxParent>
          <Image src={Korea} />
          <Layer active={korea} />
          <BoxTextStyle onClick={onClick}>한식</BoxTextStyle>
        </BoxParent>
      </UpSideLeftBoxPosition>

      <UpSideMiddleBoxPosition active={china}>
        <BoxParent>
          <Image src={China} />
          <Layer active={china} />
          <BoxTextStyle onClick={onClick}>중식</BoxTextStyle>
        </BoxParent>
      </UpSideMiddleBoxPosition>

      <UpSideRightBoxPosition active={japan}>
        <BoxParent>
          <Image src={Japan} />
          <Layer active={japan} />
          <BoxTextStyle onClick={onClick}>일식</BoxTextStyle>
        </BoxParent>
      </UpSideRightBoxPosition>

      <DownSideLeftBoxPosition active={western}>
        <BoxParent>
          <Image src={Western} />
          <Layer active={western} />
          <BoxTextStyle onClick={onClick}>양식</BoxTextStyle>
        </BoxParent>
      </DownSideLeftBoxPosition>

      <DownSideMiddleBoxPosition active={fusion}>
        <BoxParent>
          <Image src={Fusion} />
          <Layer active={fusion} />
          <BoxTextStyle onClick={onClick}>퓨전식</BoxTextStyle>
        </BoxParent>
      </DownSideMiddleBoxPosition>

      <DownSideRightBoxPosition active={snack}>
        <BoxParent>
          <Image src={Snack} />
          <Layer active={snack} />
          <BoxTextStyle onClick={onClick}>분식</BoxTextStyle>
        </BoxParent>
      </DownSideRightBoxPosition>
    </>
  );
};

export default MbtiStage1;
