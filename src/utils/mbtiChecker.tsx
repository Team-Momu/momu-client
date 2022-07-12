import { IStageOne } from 'interfaces.tsx/mbti/mbtiInterface';
import { IResult } from './mbtiCalculator';

export const mbtiStageOneChecker = (status: IStageOne) => {
  const statusArray = Object.values(status);
  let num = 0;
  statusArray.find((e, i) => {
    num++;
    if (e === true) {
      return;
    }
  });
  console.log(num);
};
