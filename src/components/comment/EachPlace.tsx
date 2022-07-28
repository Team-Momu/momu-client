import { setPlaceData } from '@slices/comment/PlaceChoiceSlice';
import { FC, useCallback } from 'react';
import { RootState, useAppDispatch, useAppSelector } from 'store/store';
import styled from 'styled-components';
import { IPlaceData } from 'utils/interfaces/comment/commentInterface';

interface Props {
  placeData: IPlaceData;
  address: string;
  name: string;
  closeModal: () => void;
}

const EachPlace: FC<Props> = ({ placeData, address, name, closeModal }) => {
  // 동기 액션 구현=> 식당 버튼 클릭시 => placeData 객체에 해당 정보 넣고 input 창에 식당 이름 보여주기
  // 그리고 완료 버튼 누를 때 저장된 placeData 보내주기..
  const dispatch = useAppDispatch();

  //개발 다 하고 삭제
  const selectedPlace = useAppSelector((state: RootState) => state.placechoice);

  const onClick = useCallback(() => {
    dispatch(setPlaceData({ placeData: placeData, isSelected: true }));
    closeModal();
  }, []);

  console.log(selectedPlace);

  return (
    <Wrapper>
      <button onClick={onClick}>
        <PlaceContainer>
          <PlaceName>{name}</PlaceName>
          <PlaceAddress>{address}</PlaceAddress>
        </PlaceContainer>
      </button>
    </Wrapper>
  );
};

export default EachPlace;

const Wrapper = styled.div`
  border-bottom: 1px solid #000000;
`;
const PlaceContainer = styled.div`
  padding-left: 5px;
  display: flex;
  flex-direction: column;
`;
const PlaceName = styled.div`
  text-align: left;
  padding: 14px 0 4px 0;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;

  color: #191919;
`;

const PlaceAddress = styled.div`
  text-align: left;
  padding-bottom: 14px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;

  color: #6f6a69;
`;
