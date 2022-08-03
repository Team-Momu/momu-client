interface ISelectedInfo {
  postId: number;
  commentId: number;
}

interface ISelectState {
  message: string | unknown;
  pending: boolean;
  curationDone: boolean | null;
  isSelected: boolean | null;
  selectedCommentId: number | null;
}

export type { ISelectedInfo, ISelectState };
