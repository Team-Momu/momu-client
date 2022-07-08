import styled from 'styled-components';

export const UpSideLeftBoxPosition = styled.div<{ active: boolean }>`
  position: absolute;
  width: 107px;
  height: 88px;
  left: 16px;
  top: 363px;

  background: #0c0b0b;
  mix-blend-mode: darken;
`;

export const BoxParent = styled.div`
  position: relative;
  display: flex;
`;
export const Layer = styled.div<{ active: boolean }>`
  position: absolute;
  width: 107px;
  height: 88px;

  background: ${({ active }) => (active ? '#F57906' : '#0c0b0b')};
  opacity: ${({ active }) => (active ? '0.4' : '0.2')};
`;

export const BoxTextStyle = styled.div`
  position: absolute;
  width: 107px;
  height: 88px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  /* identical to box height */

  color: #ffffff;

  // 내가 추가
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

/////
export const UpSideMiddleBoxPosition = styled.div<{ active: boolean }>`
  position: absolute;
  width: 107px;
  height: 88px;
  left: 134px;
  top: 363px;

  background: #0c0b0b;
  mix-blend-mode: darken;
`;

////
export const UpSideRightBoxPosition = styled.div<{ active: boolean }>`
  position: absolute;
  width: 107px;
  height: 88px;
  left: 252px;
  top: 363px;

  background: #0c0b0b;
  mix-blend-mode: darken;
`;

///
export const DownSideLeftBoxPosition = styled.div<{ active: boolean }>`
  position: absolute;
  width: 107px;
  height: 88px;
  left: 16px;
  top: 467px;

  background: #0c0b0b;
  mix-blend-mode: darken;
`;

export const DownSideMiddleBoxPosition = styled.div<{ active: boolean }>`
  position: absolute;
  width: 107px;
  height: 88px;
  left: 134px;
  top: 467px;

  background: #0c0b0b;
  mix-blend-mode: darken;
`;

export const DownSideRightBoxPosition = styled.div<{ active: boolean }>`
  position: absolute;
  width: 107px;
  height: 88px;
  left: 252px;
  top: 467px;

  background: #0c0b0b;
  mix-blend-mode: darken;
`;
