import styled from 'styled-components';

const MbtiFooter = () => {
  return (
    <>
      <NextButton>
        <NextButtonText>다음</NextButtonText>
      </NextButton>
    </>
  );
};

const NextButton = styled.div`
  position: absolute;
  width: 343px;
  height: 56px;
  left: 16px;
  top: 656px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: var(--Main-color1);
`;

const NextButtonText = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  color: var(--);
`;

const PrevisouButton = styled.div``;
const PreviousButtonText = styled.div``;

const SmallNextButton = styled.div``;
const SmallNextButtonText = styled.div``;

export default MbtiFooter;
