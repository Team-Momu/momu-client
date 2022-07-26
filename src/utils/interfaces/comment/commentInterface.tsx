import internal from 'stream';

interface IPlaceData {
  address_name: string; // #지번 주소
  category_group_code: string; // #카테고리 그룹 코드
  category_group_name: string; //  #카테고리 그룹
  category_name: string; //  #카테고리 상세
  distance: string;
  id: string; //#카카오 장소 id (!= DB에 저장되는 장소 id)
  phone: string; //#전화번호
  place_name: string; //#식당 이름
  place_url: string; //#카카오 url
  road_address_name: string; //#도로명 주소
  x: string; //#x좌표
  y: string; //#y좌표
}

interface IPlaceObject {
  isSelected: boolean;
  place: IPlaceData;
}

interface IGetPlaceData {
  pending: boolean;
  message: string;
  data: IPlaceData[];
  page: number;
  total: number;
}

interface ICommentPost {
  id: number; //  # 답글 id
  user: {
    //# 답글 작성한 유저 정보
    id: number; //  # 유저 id
    nickname: string;
    profile_img: string;
    mbti: string;
    level: number;
    select_count: number;
  };
  post: number; // # 요청한 큐레이션의 id
  place: {
    //# 등록된 식당 정보
    id: number; //# 장소 모델 id
    place_id: string; //# 카카오 장소 id
    place_name: string;
    category_name: string;
    phone: string;
    road_address_name: string;
    region: string;
    place_x: string;
    place_y: string;
    place_url: string;
  };
  place_img: string; //# 답글에 등록된 사진
  visit_flag: boolean;
  description: string;
  select_flag: boolean; //# 해당 답글의 채택 여부
}

interface ICommentPostLists {
  message: string;
  data: {
    next: string;
    previous: string;
    results: ICommentPost[];
  };
  pending: boolean;
}

interface ICommentThunkProps {
  hasNext: string;
  postId: number;
}

export type {
  IPlaceData,
  IGetPlaceData,
  IPlaceObject,
  ICommentPost,
  ICommentPostLists,
  ICommentThunkProps,
};
