export interface IUser {
  error: any;
  me: any;
  status: string;
  kakaoId: string;
  nickname: string;
  profileImg?: string;
  mbti: number;
  level: number;
  selectCount: number;
  refreshToken?: string;
  id: number;
  auth: {};
}
