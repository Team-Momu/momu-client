import styled, { CSSProperties } from 'styled-components';
import useInput from 'utils/hooks/useInput';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { mbtiSlice } from '@slices/mbti/mbtiSlice';
const MbtiStage9 = () => {
  const [checkedInputs, setCheckedInputs] = useState('');
  const dispatch = useDispatch();
  const findTypeOfButton = (text: string) => {
    switch (text) {
      case '진라면 순한맛':
        dispatch(mbtiSlice.actions.changeOneStage9());
        break;
      case '진라면 매운맛':
        dispatch(mbtiSlice.actions.changeTwoStage9());
        break;
      case '불닭볶음면 컵라면':
        dispatch(mbtiSlice.actions.changeThreeStage9());
        break;
      case '불닭볶음면 봉지라면':
        dispatch(mbtiSlice.actions.changeFourStage9());
        break;
      case '핵불닭볶음면 컵':
        dispatch(mbtiSlice.actions.changeFiveStage9());
        break;
      case '틈새라면':
        dispatch(mbtiSlice.actions.changeSixStage9());
        break;
      case '청양고추':
        dispatch(mbtiSlice.actions.changeSevenStage9());
        break;
      default:
        null;
    }
  };
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      dispatch(mbtiSlice.actions.resetAllStage9());
      findTypeOfButton(e.target.id);

      setCheckedInputs(e.target.id);
    }
  };
  useEffect(() => {
    // console.log(checkedInputs);
    dispatch(mbtiSlice.actions.addStage9({ checkedInputs }));
  }, [checkedInputs]);

  return (
    <>
      <form>
        <PositionDiv1>
          <label>
            <InputRadio
              id="진라면 순한맛"
              onChange={changeHandler}
              type="radio"
              name="spicy"
            />{' '}
            진라면 순한맛
          </label>
        </PositionDiv1>
        <PositionDiv2>
          <label>
            <InputRadio
              id="진라면 매운맛"
              onChange={changeHandler}
              type="radio"
              name="spicy"
            />{' '}
            진라면 매운맛
          </label>
        </PositionDiv2>
        <PositionDiv3>
          <label>
            <InputRadio
              id="불닭볶음면 컵라면"
              onChange={changeHandler}
              type="radio"
              name="spicy"
            />{' '}
            불닭볶음면 컵라면
          </label>
        </PositionDiv3>
        <PositionDiv4>
          <label>
            <InputRadio
              id="불닭볶음면 봉지라면"
              onChange={changeHandler}
              type="radio"
              name="spicy"
            />{' '}
            불닭볶음면 봉지라면
          </label>
        </PositionDiv4>
        <PositionDiv5>
          <label>
            <InputRadio
              id="핵불닭볶음면 컵"
              onChange={changeHandler}
              type="radio"
              name="spicy"
            />{' '}
            핵불닭볶음면 컵
          </label>
        </PositionDiv5>
        <PositionDiv6>
          <label>
            <InputRadio
              id="틈새라면"
              onChange={changeHandler}
              type="radio"
              name="spicy"
            />{' '}
            틈새라면
          </label>
        </PositionDiv6>
        <PositionDiv7>
          <label>
            <InputRadio
              id="청양고추"
              onChange={changeHandler}
              type="radio"
              name="spicy"
            />{' '}
            청양고추
          </label>
        </PositionDiv7>
      </form>
    </>
  );
};

const InputRadio = styled.input.attrs({ type: 'radio' })`
  &:checked {
    appearance: none;
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 100%;
    background: #f57906;
    padding: 2px;
    border: 1px solid #767676;
  }
`;

const PositionDiv1 = styled.div`
  position: absolute;
  top: 363px;
`;

const PositionDiv2 = styled.div`
  position: absolute;
  top: 399px;
`;

const PositionDiv3 = styled.div`
  position: absolute;
  top: 435px;
`;

const PositionDiv4 = styled.div`
  position: absolute;
  top: 471px;
`;

const PositionDiv5 = styled.div`
  position: absolute;
  top: 507px;
`;

const PositionDiv6 = styled.div`
  position: absolute;
  top: 543px;
`;

const PositionDiv7 = styled.div`
  position: absolute;
  top: 579px;
`;

const PositionSpan1 = styled.span`
  position: absolute;
  width: 77px;
  height: 17px;
  left: 42px;
  top: 363px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  color: #191919;
`;
const PositionSpan2 = styled.span`
  position: absolute;
  width: 77px;
  height: 17px;
  left: 42px;
  top: 399px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  color: #191919;
`;
const PositionSpan3 = styled.span`
  position: absolute;
  width: 101px;
  height: 17px;
  left: 42px;
  top: 436px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  color: #191919;
`;
const PositionSpan4 = styled.span`
  position: absolute;
  width: 113px;
  height: 17px;
  left: 42px;
  top: 472px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  color: #191919;
`;
const PositionSpan5 = styled.span`
  position: absolute;
  width: 89px;
  height: 17px;
  left: 42px;
  top: 508px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  color: #191919;
`;
const PositionSpan6 = styled.span`
  position: absolute;
  width: 49px;
  height: 17px;
  left: 42px;
  top: 543px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  color: #191919;
`;
const PositionSpan7 = styled.span`
  position: absolute;
  width: 49px;
  height: 17px;
  left: 42px;
  top: 579px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  color: #191919;
`;

export default MbtiStage9;
