interface ISelectedInfo {
  postId: number;
  commentId: number;
}

interface ISelectState {
  message: string | unknown;
  pending: boolean;
}

export type { ISelectedInfo, ISelectState };
