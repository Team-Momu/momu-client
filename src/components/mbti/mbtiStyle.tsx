import styled from 'styled-components';

export const HeaderText1 = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  /* identical to box height, or 150% */

  color: #191919;
`;

export const HeaderBottomLine = styled.div`
  border-bottom: 2px solid black;
  margin-bottom: 28px;
`;

export const HeaderText2 = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 160%;
  /* or 19px */
  margin-bottom: 20px;

  color: #191919;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`;

export const CloseButtonStyle = styled.button`
  margin: 0;
  padding: 0;
`;

export const CloseStyle = styled.div`
  width: 11.3px;
  height: 11.3px;
`;

export const Box = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const LeftBox = styled.div`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  border-left: 1px solid black;
  height: 70px;
`;

export const LeftInnerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const LeftInnerUpBox = styled.div`
  display: flex;
`;
export const LeftInnerDownBox = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 150%;
  /* identical to box height, or 15px */

  text-align: right;

  color: #191919;
`;

export const TitleText = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height, or 119% */

  color: #191919;
`;

export const ContentText = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 300;
  font-size: 13px;
  line-height: 19px;
  /* identical to box height, or 146% */
  margin-bottom: 10px;

  color: #191919;
`;

export const RightBox = styled.div`
  border: 1px solid black;
  height: 70px;
`;
export const RightInnerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
export const RightInnerUpBox = styled.div``;

export const RightInnerDownBox = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 150%;
  /* identical to box height, or 15px */

  text-align: right;

  color: #191919;
`;

export const ColorText = styled.span`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  /* identical to box height, or 128% */

  text-align: center;

  color: #f4851e;
`;

export const NoneColorText = styled.span`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  /* identical to box height, or 128% */
  color: black;
`;
