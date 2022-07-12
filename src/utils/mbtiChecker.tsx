import { IStageOne } from 'interfaces.tsx/mbti/mbtiInterface';
import { IResult } from './mbtiCalculator';

// 입력 값이 제대로 되었는지 확인해주는 함수
// stage1 에서 제대로 눌러졌는지 확인
// stage9 에서 모든 과정이 다 잘 눌러졌는지 한번에 확인

export const mbtiStageOneChecker = (status: IStageOne) => {
  const statusArray = Object.values(status);

  const result = statusArray.find((e, i) => {
    if (e === true) {
      return true;
    }
  });
  return result;
};

export const mbtiStageNineChecker = (status: IResult) => {
  const statusArray = Object.values(status);
  let check = true;
  statusArray.map((c, i) => {
    if (c === '') {
      if (i === 0) {
        return;
      }
      check = false;
    }
  });

  return check;
};
