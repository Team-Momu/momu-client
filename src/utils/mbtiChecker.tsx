import { IStage } from 'utils/interfaces/mbti/mbtiInterface';
import { IResult } from './mbtiCalculator';

// 입력 값이 제대로 되었는지 확인해주는 함수
// stage1 에서 제대로 눌러졌는지 확인
// stage9 에서 모든 과정이 다 잘 눌러졌는지 한번에 확인
// export const mbtiStageOneChecker = (status: IStage) => {
//   const statusArray = Object.values(status);
//   const result = statusArray.find((e, i) => {
//     if (e === true) {
//       return true;
//     }
//   });
//   return result;
// };

// 하나도 안눌리게 되면 statusArray 의 모든 값이 false
// 그렇게 되면 check = false
// 하나라도 눌러져 있으면 check= true
export const mbtiStageChecker = (status: IStage) => {
  const statusArray = Object.values(status);
  let check = false;
  statusArray.map((c) => {
    if (c === true) {
      check = true;
    }
  });
  return check;
};
