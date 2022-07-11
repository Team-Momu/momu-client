import styled from 'styled-components';

interface DismissProps {
  onDismiss: () => void;
}

const FilterLayout = ({ onDismiss }: DismissProps) => {
  return (
    <FilterContainer>
      <div>필터 레이아웃 구현</div>
      <button onClick={onDismiss}>완료버튼</button>
    </FilterContainer>
  );
};

export default FilterLayout;
const FilterContainer = styled.div`
  border-radius: 0%;
`;
