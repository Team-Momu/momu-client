import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
const { fetchCuration } = require('../../rtk/actions/curation');
const curationSlice = require('../../rtk/slices/curationSlice');

const GetCurationCard = () => {
  //addFeed에서 받아와야하는 데이터: 지역, 시간대, 음주여부, 몇 명, 추가요청사항
  const area = useSelector((state: any) => state.area);
  const when = useSelector((state: any) => state.when);
  const isDrink = useSelector((state: any) => state.isDrink);
  const personnel = useSelector((state: any) => state.personnel);
  const additionalText = useSelector((state: any) => state.additionalText);
  const dispatch = useDispatch();
  dispatch(fetchCuration({}));

  return (
    <>
      {area}, {when}, {isDrink}
    </>
  );
};

export default GetCurationCard;
