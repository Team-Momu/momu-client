import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ChoiceButton = styled.button`
  border: 1px solid #191919;
  width: 76px;
  height: 42px;

  background-color: ${(props) => props.color};
`;
