import styled from 'styled-components';
// cursor: ${({ active }) => (active ? "pointer" : "not-allowed")};
export const SmallPhotoBox = styled.div``;

export const LongBox = styled.div``;

export const ShortBox = styled.div``;

export const ImageStyle: React.CSSProperties = {
  // opacity: '0.8',
  position: 'relative',
};

export const ChoosenImageStyle: React.CSSProperties = {
  // opacity: '0.5',
  position: 'relative',
};

export const PositionBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const KoreaLayOutBox = styled.div<{ active?: boolean }>`
  position: absolute;
  width: 107px;
  height: 88px;
  left: 16px;
  top: 363px;

  mix-blend-mode: darken;
  background: ${({ active }) =>
    active ? 'rgba(245, 121, 6, 0.7)' : '#0c0b0b'};
  cursor: pointer;
`;

export const KoreaFoodText = styled.div`
  position: absolute;
  z-index: 1;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  /* identical to box height */

  width: 107px;
  height: 88px;
  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--white);
  cursor: pointer;
`;

export const ChinaLayOutBox = styled.div<{ active?: boolean }>`
  position: absolute;
  width: 107px;
  height: 88px;
  left: 134px;
  top: 363px;

  mix-blend-mode: darken;
  background: ${({ active }) =>
    active ? 'rgba(245, 121, 6, 0.7)' : '#0c0b0b'};
  cursor: pointer;
`;

export const ChinaFoodText = styled.div`
  position: absolute;
  z-index: 1;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  /* identical to box height */

  width: 107px;
  height: 88px;
  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--white);
  cursor: pointer;
`;

export const JapanLayOutBox = styled.div<{ active?: boolean }>`
  position: absolute;
  width: 107px;
  height: 88px;
  left: 252px;
  top: 363px;

  mix-blend-mode: darken;
  background: ${({ active }) =>
    active ? 'rgba(245, 121, 6, 0.7)' : '#0c0b0b'};
  cursor: pointer;
`;

export const JapanFoodText = styled.div`
  position: absolute;
  z-index: 1;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  /* identical to box height */

  width: 107px;
  height: 88px;
  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--white);
  cursor: pointer;
`;

export const WesternLayOutBox = styled.div<{ active?: boolean }>`
  position: absolute;
  width: 107px;
  height: 88px;
  left: 16px;
  top: 467px;

  mix-blend-mode: darken;
  background: ${({ active }) =>
    active ? 'rgba(245, 121, 6, 0.7)' : '#0c0b0b'};
  cursor: pointer;
`;

export const WesternFoodText = styled.div`
  position: absolute;
  z-index: 1;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  /* identical to box height */

  width: 107px;
  height: 88px;
  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--white);
  cursor: pointer;
`;

export const FusionLayOutBox = styled.div<{ active?: boolean }>`
  position: absolute;
  width: 107px;
  height: 88px;
  left: 134px;
  top: 467px;

  mix-blend-mode: darken;
  background: ${({ active }) =>
    active ? 'rgba(245, 121, 6, 0.7)' : '#0c0b0b'};
  cursor: pointer;
`;

export const FusionFoodText = styled.div`
  position: absolute;
  z-index: 1;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  /* identical to box height */

  width: 107px;
  height: 88px;
  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--white);
  cursor: pointer;
`;

export const SnackLayOutBox = styled.div<{ active?: boolean }>`
  position: absolute;
  width: 107px;
  height: 88px;
  left: 252px;
  top: 467px;

  mix-blend-mode: darken;
  background: ${({ active }) =>
    active ? 'rgba(245, 121, 6, 0.7)' : '#0c0b0b'};
  cursor: pointer;
`;

export const SnackFoodText = styled.div`
  position: absolute;
  z-index: 1;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  /* identical to box height */

  width: 107px;
  height: 88px;
  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--white);
  cursor: pointer;
`;
