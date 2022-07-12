import { IStageOne } from 'interfaces.tsx/mbti/mbtiInterface';
import { IResult } from './mbtiCalculator';

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
  let check = false;
  statusArray.map((c, i) => {
    if (c === '') {
      check = true;
    }
  });

  return check;
};
