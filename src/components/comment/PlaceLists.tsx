import { FC } from 'react';
import styled from 'styled-components';
import { IPlaceData } from 'utils/interfaces/comment/commentInterface';
import EachPlace from './EachPlace';

interface Props {
  text: string;
  placeDatas: IPlaceData[];
  closeModal: () => void;
}
const PlaceLists: FC<Props> = ({ text, placeDatas, closeModal }) => {
  return (
    <Wrapper>
      <>
        <SearchedWord>{text}</SearchedWord>
        <PlaceHolder>에 대한 검색 결과를 알려드릴게요</PlaceHolder>
        <UnderLine></UnderLine>
      </>
      {placeDatas?.map((placeData) => {
        return (
          <>
            <EachPlace
              closeModal={closeModal}
              key={placeData.id + `${new Date()}`}
              placeData={placeData}
              address={placeData.road_address_name}
              name={placeData.place_name}
            />
          </>
        );
      })}
    </Wrapper>
  );
};

export default PlaceLists;

const Wrapper = styled.div`
  padding: 0;
  margin: 0;
`;

const UnderLine = styled.div`
  border-top: 1px solid #000000;
`;

const SearchedWord = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  /* identical to box height, or 150% */

  color: #f57a08;
`;

const PlaceHolder = styled.div`
  padding-bottom: 40px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 160%;
  /* or 22px */

  color: #191919;
`;
