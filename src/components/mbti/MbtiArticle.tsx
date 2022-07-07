import { useRouter } from 'next/router';
import { useCallback } from 'react';
import {
  ChinaFoodText,
  ChinaLayOutBox,
  ChoosenImageStyle,
  FusionFoodText,
  FusionLayOutBox,
  ImageStyle,
  JapanFoodText,
  JapanLayOutBox,
  KoreaFoodText,
  KoreaLayOutBox,
  PositionBox,
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
  const { korea, china, japan, western, fusion, snack } = useSelector(
    (state: RootState) => state.mbti.stage1
  );

  // const onClick = useCallback(() => {
  //   dispatch(mbtiSlice.actions.changeState());
  // }, [dispatch]);

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
      case '퓨전':
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

  return (
    <>
      {stageNumber === 1 && (
        <>
          <KoreaLayOutBox active={korea} onClick={onClick}>
            <PositionBox>
              {korea ? (
                <>
                  <Image src={Korea} style={ChoosenImageStyle} />
                  <KoreaFoodText>한식</KoreaFoodText>
                </>
              ) : (
                <>
                  <Image src={Korea} style={ImageStyle} />
                  <KoreaFoodText>한식</KoreaFoodText>
                </>
              )}
            </PositionBox>
          </KoreaLayOutBox>

          <ChinaLayOutBox active={china} onClick={onClick}>
            <PositionBox>
              {China ? (
                <>
                  <Image src={China} style={ChoosenImageStyle} />
                  <ChinaFoodText>중식</ChinaFoodText>
                </>
              ) : (
                <>
                  <Image src={China} style={ImageStyle} />
                  <ChinaFoodText>중식</ChinaFoodText>
                </>
              )}
            </PositionBox>
          </ChinaLayOutBox>

          <JapanLayOutBox active={japan} onClick={onClick}>
            <PositionBox>
              {Japan ? (
                <>
                  <Image src={Japan} style={ChoosenImageStyle} />
                  <JapanFoodText>일식</JapanFoodText>
                </>
              ) : (
                <>
                  <Image src={Japan} style={ImageStyle} />
                  <JapanFoodText>일식</JapanFoodText>
                </>
              )}
            </PositionBox>
          </JapanLayOutBox>

          <WesternLayOutBox active={western} onClick={onClick}>
            <PositionBox>
              {Western ? (
                <>
                  <Image src={Western} style={ChoosenImageStyle} />
                  <WesternFoodText>양식</WesternFoodText>
                </>
              ) : (
                <>
                  <Image src={Western} style={ImageStyle} />
                  <WesternFoodText>양식</WesternFoodText>
                </>
              )}
            </PositionBox>
          </WesternLayOutBox>

          <FusionLayOutBox active={fusion} onClick={onClick}>
            <PositionBox>
              {Fusion ? (
                <>
                  <Image src={Fusion} style={ChoosenImageStyle} />
                  <FusionFoodText>퓨전</FusionFoodText>
                </>
              ) : (
                <>
                  <Image src={Fusion} style={ImageStyle} />
                  <FusionFoodText>퓨전</FusionFoodText>
                </>
              )}
            </PositionBox>
          </FusionLayOutBox>

          <SnackLayOutBox active={snack} onClick={onClick}>
            <PositionBox>
              {Snack ? (
                <>
                  <Image src={Snack} style={ChoosenImageStyle} />
                  <SnackFoodText>분식</SnackFoodText>
                </>
              ) : (
                <>
                  <Image src={Snack} style={ImageStyle} />
                  <SnackFoodText>분식</SnackFoodText>
                </>
              )}
            </PositionBox>
          </SnackLayOutBox>
        </>
      )}
    </>
  );
};

export default MbtiArticle;
