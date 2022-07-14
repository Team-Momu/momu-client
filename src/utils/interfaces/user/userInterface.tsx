export interface IUser {
  kakaoId: string;
  nickname: string;
  profileImg?: string;
  mbti: number;
  level: number;
  selectCount: number;
  refreshToken?: string;
}
