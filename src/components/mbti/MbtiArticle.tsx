import { useRouter } from 'next/router';
import { useCallback } from 'react';
import {
  ChinaFoodText,
  ChinaLayOutBox,
  FusionFoodText,
  FusionLayOutBox,
  JapanFoodText,
  JapanLayOutBox,
  KoreaFoodText,
  KoreaLayOutBox,
  SnackFoodText,
  SnackLayOutBox,
  WesternFoodText,
  WesternLayOutBox,
} from './MbtiSelectBoxStyles';
import Image from 'next/image';
import Korea from '@public/img/Korea.png';
import China from '@public/img/China.png';
import Japan from '@public/img/Japan.png';
import Western from '@public/img/Western.png';
import Fusion from '@public/img/Fusion.png';
import Snack from '@public/img/Snack.png';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/store';
const mbtiSlice = require('@slices/dummy/mbti/mbtiSlice');

const MbtiArticle = () => {
  const router = useRouter();
  const stageNumber: number = Number(router.asPath.split('/')[2]);
  const dispatch = useDispatch();

  const onClick = useCallback(() => {
    dispatch(mbtiSlice.actions.changeState());
  }, [dispatch]);

  return (
    <>
      {stageNumber === 1 && (
        <>
          {/* <KoreaFoodBox onClick={onClick}>
            <Image src={Korea} />
          </KoreaFoodBox>
          <KoreaFoodText onClick={onClick} type="korea">
            한식
          </KoreaFoodText> */}

          <KoreaLayOutBox>
            <Image src={Korea} layout="fill" style={{ opacity: '0.8' }} />
            <KoreaFoodText type="korea">한식</KoreaFoodText>
          </KoreaLayOutBox>

          <ChinaLayOutBox>
            <Image src={China} layout="fill" style={{ opacity: '0.8' }} />
            <ChinaFoodText type="china">중식</ChinaFoodText>
          </ChinaLayOutBox>
          <JapanLayOutBox>
            <Image src={Japan} layout="fill" style={{ opacity: '0.8' }} />
            <JapanFoodText type="japan">일식</JapanFoodText>
          </JapanLayOutBox>
          <WesternLayOutBox>
            <Image src={Western} layout="fill" style={{ opacity: '0.8' }} />
            <WesternFoodText type="western">양식</WesternFoodText>
          </WesternLayOutBox>
          <FusionLayOutBox>
            <Image src={Fusion} layout="fill" style={{ opacity: '0.8' }} />
            <FusionFoodText type="fusionn">퓨전</FusionFoodText>
          </FusionLayOutBox>
          <SnackLayOutBox>
            <Image src={Snack} layout="fill" style={{ opacity: '0.8' }} />
            <SnackFoodText type="snack">분식</SnackFoodText>
          </SnackLayOutBox>
        </>
      )}
    </>
  );
};

export default MbtiArticle;
