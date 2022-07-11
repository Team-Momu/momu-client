import styled from 'styled-components';
import { ButtonContainer, ChoiceButton } from 'styles/CommonStyle';

interface DismissProps {
  onDismiss: () => void;
}

const FilterLayout = ({ onDismiss }: DismissProps) => {
  return (
    <FilterContainer>
      <ChooseArea>
        <FilterText>지역 설정</FilterText>
        <AreaDropdown></AreaDropdown>
      </ChooseArea>
      <ChooseTime>
        <FilterText>방문 예정 시간대</FilterText>
        <ButtonContainer>
          <ChoiceButton>아침</ChoiceButton>
          <ChoiceButton>점심</ChoiceButton>
          <ChoiceButton>저녁</ChoiceButton>
          <ChoiceButton>밤</ChoiceButton>
        </ButtonContainer>
      </ChooseTime>
      <ChooseDrink>
        <FilterText>음주 여부</FilterText>
        <ButtonContainer>
          <ChoiceButton>안 마셔요</ChoiceButton>
          <ChoiceButton>간술만!</ChoiceButton>
          <ChoiceButton>마실래요</ChoiceButton>
        </ButtonContainer>
      </ChooseDrink>
      <ChoosePersonnel>
        <FilterText>방문 인원수</FilterText>
        <ButtonContainer>
          <ChoiceButton>혼자</ChoiceButton>
          <ChoiceButton>둘이서</ChoiceButton>
          <ChoiceButton>3~4명</ChoiceButton>
          <ChoiceButton>5인 이상</ChoiceButton>
        </ButtonContainer>
      </ChoosePersonnel>
      <DoneButton onClick={onDismiss}>완료</DoneButton>
    </FilterContainer>
  );
};

export default FilterLayout;
const FilterContainer = styled.div`
  padding-top: 10px;
  border-radius: 0%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const FilterText = styled.div`
  margin-bottom: 14px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #191919;
`;
const ChooseArea = styled.div`
  width: 258px;
  margin: 0 21px 30px 20px;
`;

const AreaDropdown = styled.select`
  border: 1px solid #191919;
  width: 258px;
  height: 42px;
`;

const ChooseTime = styled.div`
  width: 334px;
  margin: 0 21px 30px 20px;
`;

const ChooseDrink = styled.div`
  width: 248px;
  margin: 0 21px 30px 20px;
`;

const ChoosePersonnel = styled.div`
  width: 334px;
  margin: 0 21px 30px 20px;
`;

const DoneButton = styled.button`
  margin-top: 38px;
  width: 375px;
  height: 72px;
  background: #f57a08;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: #ffffff;
`;
