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

interface IGetPlaceData {
  pending: boolean;
  message: string;
  data: IPlaceData[];
  page: number;
  total: number;
}

export type { IPlaceData, IGetPlaceData };
