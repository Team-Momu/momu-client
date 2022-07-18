import styled from 'styled-components';

export const HeaderContainer = styled.div`
  margin: 0 -16px;
  padding: 0;
  width: 373px;
  height: 68px;
  line-height: 68px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Line = styled.div`
  border-bottom: 2px solid #191919;

  width: calc(100% + 16px * 2);
  margin: 0 16px 0 -16px;
`;

export const HeaderTextContainer = styled.div`
  padding-left: 20px;
  height: 42px;
  font-family: 'Prompt';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 42px;

  color: #191919;
`;

export const HeaderLeftSide = styled.div`
  display: flex;
  margin-left: 24px;
`;

export const BackIcon = styled.img`
  width: 18px;
  height: 18px;
`;

export const BackButton = styled.button``;
