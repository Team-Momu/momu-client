// export interface IMbti {
//   first: string;
//   second: string;
//   third: string;
//   fourth: string;
// }

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

export interface IState {
  mbtiModal: boolean;
  status: string;
  error: any;
  accessToken: string | null;
  result: {
    stage1: string;
    stage2: string;
    stage3: string;
    stage4: string;
    stage5: number;
    stage6: string;
    stage7: string;
    stage8: string;
    stage9: string;
  };
  mbti: string;
  description?: string;
  stage1: {
    korea: boolean;
    china: boolean;
    japan: boolean;
    western: boolean;
    fusion: boolean;
    snack: boolean;
  };
  stage2: {
    up: boolean;
    down: boolean;
  };
  stage3: {
    up: boolean;
    down: boolean;
  };
  stage4: {
    up: boolean;
    down: boolean;
  };

  stage5: {
    upLeftStage5: boolean;
    upMiddleStage5: boolean;
    upRightStage5: boolean;
    middleLeftStage5: boolean;
    middleMiddleStage5: boolean;
    middleRightStage5: boolean;
    downLeftStage5: boolean;
    downMiddleStage5: boolean;
    downRightStage5: boolean;
  };
  stage6: {
    leftStage6: boolean;
    rightStage6: boolean;
  };
  stage7: {
    leftStage7: boolean;
    rightStage7: boolean;
  };
  stage8: {
    leftStage8: boolean;
    rightStage8: boolean;
  };
  stage9: {
    oneStage9: boolean;
    twoStage9: boolean;
    threeStage9: boolean;
    fourStage9: boolean;
    fiveStage9: boolean;
    sixStage9: boolean;
    sevenStage9: boolean;
  };
}

export interface IStage {
  korea?: boolean;
  china?: boolean;
  japan?: boolean;
  western?: boolean;
  fusion?: boolean;
  snack?: boolean;
  up?: boolean;
  down?: boolean;
  upLeftStage5?: boolean;
  upMiddleStage5?: boolean;
  upRightStage5?: boolean;
  middleLeftStage5?: boolean;
  middleMiddleStage5?: boolean;
  middleRightStage5?: boolean;
  downLeftStage5?: boolean;
  downMiddleStage5?: boolean;
  downRightStage5?: boolean;
  leftStage6?: boolean;
  rightStage6?: boolean;
  leftStage7?: boolean;
  rightStage7?: boolean;
  leftStage8?: boolean;
  rightStage8?: boolean;
  oneStage9?: boolean;
  twoStage9?: boolean;
  threeStage9?: boolean;
  fourStage9?: boolean;
  fiveStage9?: boolean;
  sixStage9?: boolean;
  sevenStage9?: boolean;
}
