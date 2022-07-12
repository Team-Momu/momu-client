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
