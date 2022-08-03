import { FC, useEffect } from 'react';
import styled from 'styled-components';
import { IPlaceData } from 'utils/interfaces/comment/commentInterface';
import EachPlace from './EachPlace';
import useScroll from '../../utils/hooks/useScroll';
import { RootState, useAppDispatch, useAppSelector } from '../../store/store';
import {
  getMorePlaceDatasThunk,
  getPlaceDatasThunk,
} from '@slices/comment/getPlaceSlice';
import Spinner from '@common/Spinner';

interface Props {
  text: string;
  placeDatas: IPlaceData[];
  closeModal: () => void;
}
const PlaceLists: FC<Props> = ({ text, placeDatas, closeModal }) => {
  const dispatch = useAppDispatch();
  const previous = useAppSelector(
    (state: RootState) => state.comments.previous
  );
  const next = useAppSelector((state: RootState) => state.comments.next);
  const keyword = useAppSelector((state: RootState) => state.comments.keyword);
  const pending = useAppSelector((state: RootState) => state.comments.pending);
  const status = useAppSelector((state: RootState) => state.comments.status);
  const { hasNext, percent, onScroll } = useScroll();

  useEffect(() => {
    if (hasNext && next) {
      // 요청을 보내면 됨
      // console.log('실행');
      dispatch(getMorePlaceDatasThunk({ keyword, page: next }));
    }
  }, [hasNext, percent]);

  // useEffect(() => {
  //   console.log('next🔥', next);
  //   console.log('keyword🔥', keyword);
  //   console.log('placeDatas🔥', placeDatas);
  // }, [next, keyword, placeDatas]);

  return (
    <Wrapper>
      <>
        <SearchedWord>{text}</SearchedWord>
        <PlaceHolder>에 대한 검색 결과를 알려드릴게요</PlaceHolder>
        <UnderLine></UnderLine>
      </>
      <ResultArea onScroll={onScroll}>
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
        {pending && (
          <>
            <SpinnerContainer>
              <Spinner />
            </SpinnerContainer>
          </>
        )}
      </ResultArea>
    </Wrapper>
  );
};

export default PlaceLists;

const SpinnerContainer = styled.div`
  height: 70px;
`;

const Wrapper = styled.div`
  padding: 0;
  margin: 0;
`;

const UnderLine = styled.div`
  border-top: 1px solid #000000;
`;

const ResultArea = styled.div`
  overflow: scroll;
  height: 475px;
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
