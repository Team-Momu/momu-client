import { IResult } from './mbtiCalculator';

export const mbtiChecker = (result: IResult) => {
  let alertCheck = false;
  const resultArray = Object.values(result);
  resultArray.map((c, i) => {
    if (c === '') {
      if (i === 0) {
        // 아예 선택안한 것인지 퓨전 제외한 것을 넣은 것인지 판단 필요
      } else {
        alertCheck = true;
      }
    }
  });
  if (alertCheck) {
    alert('입력되지 않은 값이 있습니다.');
  }
};
