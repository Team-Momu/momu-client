import { useDispatch } from 'react-redux';

export interface IResult {
  stage1: string;
  stage2: string;
  stage3: string;
  stage4: string;
  stage5: number;
  stage6: string;
  stage7: string;
  stage8: string;
  stage9: string;
}
export interface mbti {
  first: string;
  second: string;
  third: string;
  fourth: string;
}

export const mbtiCalculator = (result: IResult) => {
  const {
    stage1,
    stage2,
    stage3,
    stage4,
    stage5,
    stage6,
    stage7,
    stage8,
    stage9,
  } = result;
  let mbti: mbti = { first: '', second: '', third: '', fourth: '' };
  let firstCount: number = 0;
  let secondCount: number = 0;
  let thirdCount: number = 0;
  let fourthCount: number = 0;

  if (stage1 === '퓨전식') {
    firstCount++;
  }
  if (stage2 === 'up') {
    firstCount++;
  }
  if (stage3 === 'up') {
    firstCount++;
  }

  if (firstCount >= 2) {
    // Receptive (새로운 것을 잘 수용함, 도전적)
    mbti.first = 'R';
  } else {
    //stable (안정적으로 기존의 것을 좋아함)
    mbti.first = 'S';
  }

  if (stage4 === 'down') {
    secondCount++;
  }
  if (stage5) {
    secondCount = secondCount + stage5;
  }

  if (secondCount >= 6) {
    // Mood 분위기를 선호
    mbti.second = 'M';
  } else {
    // Taste 맛을 선호
    mbti.second = 'T';
  }

  if (stage6 === 'left') {
    thirdCount++;
  }
  if (stage7 === 'left') {
    thirdCount++;
  }
  if (stage8 === 'left') {
    thirdCount++;
  }

  if (thirdCount >= 2) {
    // Open
    mbti.third = 'O';
  } else {
    // Private
    mbti.third = 'P';
  }

  switch (stage9) {
    case '진라면 순한맛':
      // 매운 거 못먹는 Cool
      mbti.fourth = 'C';
      break;
    case '진라몃 매운맛':
      // 매운 거 못먹는 Cool
      mbti.fourth = 'C';
      break;
    case '불닭볶음면 컵라면':
      // 매운 거 못먹는 Cool
      mbti.fourth = 'C';
      break;
    default:
      // 그 외의 경우 Hot
      mbti.fourth = 'H';
      break;
  }
  console.log('firstCount', firstCount);
  console.log('secondCount', secondCount);
  console.log('thirdCount', thirdCount);
  console.log('fourhCount', fourthCount);

  // console.log(mbti);

  const finalMbti = mbti.first + mbti.second + mbti.third + mbti.fourth;

  return finalMbti;
};

export const test: IResult = {
  stage1: '퓨전식',
  stage2: 'up',
  stage3: 'up',
  stage4: 'down',
  stage5: 4,
  stage6: 'left',
  stage7: 'left',
  stage8: 'right',
  stage9: '진라면 순한맛',
};
