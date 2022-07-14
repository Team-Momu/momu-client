export interface IUser {
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
