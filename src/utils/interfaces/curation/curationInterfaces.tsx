interface ICurationPost {
  id: number; // 요청 id
  user: {
    // 요청 작성한 유저 정보
    id: number; // 유저 id
    nickname: string;
    profile_img: string;
    mbti: string;
    level: number;
    select_count: number;
  };
  created_at: string; // 작성일
  location: string; //장소
  time: string; //시간대
  drink: number; //음주 정도
  member_count: number; //인원수
  comment_count: number; //답글 수
  description: string; //설명
  selected_flag: boolean;
  scrap_flag: boolean; //스크랩 여부
}

interface IDetailCurationPost {
  message: string;
  data: {
    id: number; // 요청 id
    user: {
      // 요청 작성한 유저 정보
      id: number; // 유저 id
      nickname: string;
      profile_img: string;
      mbti: string;
      level: number;
      select_count: number;
    };
    created_at: string; // 작성일
    location: string; //장소
    time: string; //시간대
    drink: number; //음주 정도
    member_count: number; //인원수
    comment_count: number; //답글 수
    description: string; //설명
    selected_flag: boolean;
    scrap_flag: boolean; //스크랩 여부
    comments: string[];
  };
  pending: boolean;
}

interface ICurationPostLists {
  pending: boolean;
  message: string;
  data: {
    next: string;
    previous: string;
    results: ICurationPost[];
  };
  status: string | undefined | null | boolean;
  error: any;
  cursor: null | string;
}

interface IAddCuration {
  location: string; // #장소
  time: string; // #시간대
  drink: number | string; //#음주 정도
  member_count: number | string; // #인원수
  description: string; //추가 설명
}

export type {
  ICurationPost,
  ICurationPostLists,
  IDetailCurationPost,
  IAddCuration,
};
