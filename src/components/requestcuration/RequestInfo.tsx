import { useState } from 'react';
import styled from 'styled-components';
import { ButtonContainer, ChoiceButton } from 'styles/CommonStyle';

const RequestInfo = () => {
  const [color, setColor] = useState('');

  const onClick = () => {
    color === '' ? setColor('#86B9FD') : setColor('');
  };

  return (
    <Wrapper>
      <ChooseArea>
        <QuestionText>어느 지역에서 식사하실 건가요?</QuestionText>
        <AreaDropdown placeholder="신촌,홍대 부근 동네를 선택해주세요!"></AreaDropdown>
      </ChooseArea>
      <ChooseTime>
        <QuestionText>방문 예정 시간대를 골라주세요!</QuestionText>

        <ButtonContainer>
          <ChoiceButton color={color} onClick={onClick}>
            아침
          </ChoiceButton>
          <ChoiceButton color={color} onClick={onClick}>
            점심
          </ChoiceButton>
          <ChoiceButton color={color} onClick={onClick}>
            저녁
          </ChoiceButton>
          <ChoiceButton color={color} onClick={onClick}>
            밤
          </ChoiceButton>
        </ButtonContainer>
      </ChooseTime>
      <ChooseDrink>
        <QuestionText>음주 여부를 선택해주세요!</QuestionText>
        <ButtonContainer>
          <ChoiceButton color={color} onClick={onClick}>
            안 마셔요
          </ChoiceButton>
          <ChoiceButton color={color} onClick={onClick}>
            간술만!
          </ChoiceButton>
          <ChoiceButton color={color} onClick={onClick}>
            마실래요
          </ChoiceButton>
        </ButtonContainer>
      </ChooseDrink>
      <ChoosePersonnel>
        <QuestionText>몇 명이서 방문 예정인가요?</QuestionText>
        <ButtonContainer>
          <ChoiceButton color={color} onClick={onClick}>
            혼자
          </ChoiceButton>
          <ChoiceButton color={color} onClick={onClick}>
            둘이서
          </ChoiceButton>
          <ChoiceButton color={color} onClick={onClick}>
            3~4명
          </ChoiceButton>
          <ChoiceButton color={color} onClick={onClick}>
            5인 이상
          </ChoiceButton>
        </ButtonContainer>
      </ChoosePersonnel>

      <AdditionalRequest>
        <QuestionText>
          추가 요청사항을 알려주세요! <Optional>(선택)</Optional>
        </QuestionText>
        <AdditionalInput
          type="text"
          placeholder="(25자 이내) 싫어하는 음식, 상황 등을 말씀해주세요!"
        ></AdditionalInput>
      </AdditionalRequest>
    </Wrapper>
  );
};

export default RequestInfo;

const Wrapper = styled.div`
  border-radius: 0%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const QuestionText = styled.div`
  margin-bottom: 14px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  /* identical to box height */

  color: #191919;
`;
const Optional = styled.span`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  /* identical to box height */

  color: #191919;
`;

const AreaDropdown = styled.select`
  padding-right: 4px;
  border: 1px solid #191919;
  width: 343px;
  height: 42px;
  -webkit-appearance: none; /* for chrome */
  -moz-appearance: none; /*for firefox*/
  appearance: none;
  background: url('/img/filter/Dropdown.png') no-repeat 97% 50%/10px auto;
  &:ms-expand {
    display: none; /*for IE10,11*/
  }
`;

const ChooseArea = styled.div`
  margin-top: 36px;
`;

const ChooseTime = styled.div`
  margin-top: 40px;
`;

const ChooseDrink = styled.div`
  margin-top: 40px;
  width: 248px;
`;

const ChoosePersonnel = styled.div`
  margin-top: 40px;
`;

const AdditionalRequest = styled.div`
  margin-top: 40px;
`;

const AdditionalInput = styled.input`
  width: 343px;
`;
