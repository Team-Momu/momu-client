import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { useEffect } from 'react';

const curationSlice = require('@slices/dummy/curation/curationSlice');

const GetCurationCard = () => {
  //addFeed에서 받아와야하는 데이터: 지역, 시간대, 음주여부, 몇 명, 추가요청사항

  const area = useSelector((state: RootState) => state.curationSlice?.area);
  // const when = useSelector((state: RootState) => state.curationSlice.when);
  // const isDrink = useSelector(
  //   (state: RootState) => state.curationSlice.isDrink
  // );
  // const personnel = useSelector(
  //   (state: RootState) => state.curationSlice.personnel
  // );
  // const additionalText = useSelector(
  //   (state: RootState) => state.additionalText
  // );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(curationSlice.actions.fetchCurationInfo());
  }, [dispatch]);
  console.log(area);

  return <>{area}</>;
};

export default GetCurationCard;
