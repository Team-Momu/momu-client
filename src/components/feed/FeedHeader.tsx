import styled from 'styled-components';

const FeedHeader = () => {
  return (
    <HeaderContainer>
      <TextContainer>Request</TextContainer>
      <FilterButton>
        <FilterText>필터</FilterText>
        <FilterIcon src={'img/filtericon.png'} />
      </FilterButton>
    </HeaderContainer>
  );
};
export default FeedHeader;

const HeaderContainer = styled.div`
  width: calc(100% + 16 * 2);
  margin: 0%;
  padding: 0;
  width: 100%;
  height: 68px;
  line-height: 68px;
  border-bottom: 2px solid #000000;
  display: flex;
  align-items: center;
`;
const TextContainer = styled.div`
  font-family: 'Pretendard';
  font-size: 28px;

  line-height: 68px;
`;
const FilterButton = styled.button`
  font-family: 'Pretendard';
  background-color: transparent;
  width: 78px;
  height: 36px;
  border: 1.5px solid #000000;
  align-items: center;
  display: flex;
  line-height: 36px;
  margin-left: auto;
`;

const FilterText = styled.div`
  margin-left: 7px;
`;

const FilterIcon = styled.img`
  width: 16x;
  height: 16px;
  padding-left: 4px;
  vertical-align: auto;
`;
