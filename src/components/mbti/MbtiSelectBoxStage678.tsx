import styled from 'styled-components';

// relative (부모)
// absolute (자식)
// 이렇게 해두면 차례로 쌓임

export const LeftBoxPosition = styled.div<{ active: boolean }>`
  position: absolute;
  width: 168px;
  height: 112px;
  left: 16px;
  top: 363px;

  background: ${({ active }) => (active ? '#F57906' : '#0c0b0b')}
  mix-blend-mode: darken;
  // opacity: ${({ active }) => (active ? '0.8' : '0.2')}
`;

export const RightBoxPosition = styled.div<{ active: boolean }>`
  position: absolute;
  width: 168px;
  height: 112px;
  left: 191px;
  top: 363px;
  
  background: #0c0b0b
  mix-blend-mode: darken;
  // opacity: ${({ active }) => (active ? '0.2' : '0.8')}
`;

export const LeftBoxParent = styled.div`
  position: relative;
  display: flex;
`;

export const RightBoxParent = styled.div`
  position: relative;
  display: flex;
`;

export const RightTextStyle = styled.div`
  position: absolute;
  width: 168px;
  height: 112px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  /* identical to box height */

  color: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const LeftTextStyle = styled.div`
  position: absolute;
  width: 168px;
  height: 112px;
  z-index: 1;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  /* identical to box height */

  color: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
