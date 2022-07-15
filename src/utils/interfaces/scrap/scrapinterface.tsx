interface IScrapInfo {
  message: string;
  data: {
    id: number;
    user: number;
    post: number;
  };
  pending: boolean;
}

interface IPostScrapInfo {
  user: number;
  post: number;
}

export type { IScrapInfo, IPostScrapInfo };
