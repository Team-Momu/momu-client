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
        <div>{name}</div>
        <div>{address}</div>
      </button>
    </Wrapper>
  );
};

export default EachPlace;

const Wrapper = styled.div`
  border: 1px solid black;
`;
