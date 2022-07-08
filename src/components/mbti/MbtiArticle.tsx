import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
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
import Korea from '@public/img/mbti/Korea.png';
import China from '@public/img/mbti/China.png';
import Japan from '@public/img/mbti/Japan.png';
import Western from '@public/img/mbti/Western.png';
import Fusion from '@public/img/mbti/Fusion.png';
import Snack from '@public/img/mbti/Snack.png';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/store';
import {
  DownSideBoxPositionInStage2,
  UpSideBoxPositionInStage2,
} from './MbtiSelectBoxStage2';
import {
  DownSideBoxPositionInStage3,
  UpSideBoxPositionInStage3,
} from './MbtiSelectBoxStage3';
import {
  DownSideBoxPositionInStage4,
  UpSideBoxPositionInStage4,
} from './MbtiSelectBoxStage4';
import { UpSideLeftBox } from './MbtiSelectBoxStage5';
import MbtiStage5 from './MbtiStage5';
import MbtiStage6 from './MbtiStage6';
import MbtiStage7 from './MbtiStage7';
import MbtiStage8 from './MbtiStage8';
import MbtiStage9 from './MbtiStage9';
const mbtiSlice = require('@slices/dummy/mbti/mbtiSlice');

const MbtiArticle = () => {
  const router = useRouter();
  const stageNumber: number = Number(router.asPath.split('/')[2]);
  const dispatch = useDispatch();
  const { korea, china, japan, western, fusion, snack } = useSelector(
    (state: RootState) => state.mbti.stage1
  );

  //stage2
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  //stage3
  const [upStage3, setUpStage3] = useState(false);
  const [downStage3, setDownStage3] = useState(false);
  //stage4
  const [upStage4, setUpStage4] = useState(false);
  const [downStage4, setDownStage4] = useState(false);

  // stage1 사용
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

  const onClickStage2 = useCallback(
    (e: React.MouseEvent<HTMLElement>): void => {
      // @ts-ignore
      const typeOfBox: string = e.target.innerText[0];
      // 둘 중에 하나라도 누른 상태에서 다른 것을 눌렀을 때 처리

      if (active1 === true || active2 === true) {
        setActive1(false);
        setActive2(false);
      }
      // 눌렀을 때 박스 인식 후 토글
      if (typeOfBox === '가') {
        //위쪽 박스
        setActive1((prev) => !prev);
      } else {
        //아래쪽 박스 선택
        setActive2((prev) => !prev);
      }
    },
    [active1, active2]
  );

  // 여기서 최종 선택 점수 알고리즘
  useEffect(() => {}, [active1, active2, upStage3, downStage3]);

  const onClickStage3 = useCallback(
    (e: React.MouseEvent<HTMLElement>): void => {
      //@ts-ignore
      const typeOfBox: string = e.target.innerText[0];

      if (upStage3 === true || downStage3 === true) {
        setUpStage3(false);
        setDownStage3(false);
      }
      // 눌렀을 때 박스 인식 후 토글
      if (typeOfBox === '신') {
        //위쪽 박스
        setUpStage3((prev) => !prev);
      } else {
        //아래쪽 박스 선택
        setDownStage3((prev) => !prev);
      }
    },
    [upStage3, downStage3]
  );

  const onClickStage4 = useCallback(
    (e: React.MouseEvent<HTMLElement>): void => {
      //@ts-ignore
      const typeOfBox: string = e.target.innerText[0];

      if (upStage4 === true || downStage4 === true) {
        setUpStage4(false);
        setDownStage4(false);
      }
      // 눌렀을 때 박스 인식 후 토글
      if (typeOfBox === '음') {
        //위쪽 박스
        setUpStage4((prev) => !prev);
      } else {
        //아래쪽 박스 선택
        setDownStage4((prev) => !prev);
      }
    },
    [upStage4, downStage4]
  );

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
      {stageNumber === 2 && (
        <>
          <UpSideBoxPositionInStage2 onClick={onClickStage2} active={active1}>
            가본 적 없는 새로운 식당
          </UpSideBoxPositionInStage2>
          <DownSideBoxPositionInStage2 onClick={onClickStage2} active={active2}>
            항상 가는 익숙한 식당
          </DownSideBoxPositionInStage2>
        </>
      )}
      {stageNumber === 3 && (
        <>
          <UpSideBoxPositionInStage3 onClick={onClickStage3} active={upStage3}>
            신메뉴는 궁금해서 못 참지.
          </UpSideBoxPositionInStage3>
          <DownSideBoxPositionInStage3
            onClick={onClickStage3}
            active={downStage3}
          >
            그래도 항상 먹던 게 편하지!
          </DownSideBoxPositionInStage3>
        </>
      )}
      {stageNumber === 4 && (
        <>
          <UpSideBoxPositionInStage4 onClick={onClickStage4} active={upStage4}>
            음식 본연 맛 자체가 가장 중요!
          </UpSideBoxPositionInStage4>
          <DownSideBoxPositionInStage4
            onClick={onClickStage4}
            active={downStage4}
          >
            매장 분위기, 서비스, 인테리어도 맛만큼 중요!
          </DownSideBoxPositionInStage4>
        </>
      )}
      {stageNumber === 5 && (
        <>
          <MbtiStage5></MbtiStage5>
        </>
      )}
      {stageNumber === 6 && (
        <>
          <MbtiStage6></MbtiStage6>
        </>
      )}
      {stageNumber === 7 && (
        <>
          <MbtiStage7></MbtiStage7>
        </>
      )}
      {stageNumber === 8 && (
        <>
          <MbtiStage8></MbtiStage8>
        </>
      )}
      {stageNumber === 9 && (
        <>
          <MbtiStage9></MbtiStage9>
        </>
      )}
    </>
  );
};

export default MbtiArticle;
