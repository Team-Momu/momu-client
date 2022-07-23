import { FC } from 'react';
import styled from 'styled-components';
import { IPlaceData } from 'utils/interfaces/comment/commentInterface';
import EachPlace from './EachPlace';

interface Props {
  placeDatas: IPlaceData[];
  closeModal: () => void;
}
const PlaceLists: FC<Props> = ({ placeDatas, closeModal }) => {
  return (
    <Wrapper>
      <h1>식당 리스트</h1>
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

const Wrapper = styled.div``;
