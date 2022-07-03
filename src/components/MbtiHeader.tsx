import styled from 'styled-components';
const MbtiHeader = () => {
  return (
    <>
      <ProgressBar>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
      </ProgressBar>
    </>
  );
};

export const ProgressBar = styled.div<{ status?: string }>`
  display: grid;
  grid-template-columns: repeat(9, 40px);
  background: #ededed;
  height: 8px;
  width: 100%;
  margin-top: 48px;
`;

export default MbtiHeader;
