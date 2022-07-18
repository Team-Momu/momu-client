export interface IUser {
  error: any;
  status: string;
  kakaoId: string;
  nickname: string;
  profileImg?: string;
  mbti: number;
  level: number;
  selectCount: number;
  refreshToken?: string;
  auth: {};
}
