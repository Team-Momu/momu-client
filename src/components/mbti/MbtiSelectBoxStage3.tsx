import styled from 'styled-components';

export const UpSideBoxPositionInStage3 = styled.div<{
  active: boolean;
}>`
  box-sizing: border-box;

  position: absolute;
  width: 343px;
  height: 52px;
  left: 16px;
  top: 369px;

  background: #ffffff;
  border: solid;
  border-width: 1px;
  border-color: ${({ active }) => (active ? '#F4851E' : '#767676')};

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */
  color: ${({ active }) => (active ? '#F57906' : '#191919')};

  cursor: pointer;
`;

export const DownSideBoxPositionInStage3 = styled.div<{
  active: boolean;
}>`
  box-sizing: border-box;

  position: absolute;
  width: 343px;
  height: 52px;
  left: 17px;
  top: 437px;

  background: #ffffff;
  border: solid;
  border-width: 1px;
  border-color: ${({ active }) => (active ? '#F4851E' : '#767676')};

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */
  color: ${({ active }) => (active ? '#F57906' : '#191919')};

  cursor: pointer;
`;
