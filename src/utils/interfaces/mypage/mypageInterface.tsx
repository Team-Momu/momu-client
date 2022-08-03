interface IProfile {
  id: number;
  nickname: string;
  profile_img: string;
  mbti: string;
  level: number;
  select_count: number;
}

interface ICurationInfo {
  id: number;
  user: IProfile;
  location: string;
  time: string;
  drink: number;
  member_count: number;
  comment_count: number;
  description: string;
  selected_flag: boolean;
  scrap_flag: boolean;
  created_at: string;
}

interface IProfileContent {
  error: any;
  userNext: any;
  scrapNext: any;
  pending: boolean;
  message: string;
  data: {
    profile: IProfile;
    post: {
      next: string;
      previous: string;
      results: ICurationInfo[];
    };
  };
}

export type { IProfileContent, ICurationInfo };
