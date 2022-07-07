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
  margin: 0 -16px;
  padding: 0;
  width: 375px;
  height: 68px;
  line-height: 68px;
  border-bottom: 2px solid #000000;
  display: flex;
  align-items: center;
`;
const TextContainer = styled.div`
  position: absolute;
  width: 113px;
  height: 42px;
  left: 20px;
  top: 13px;

  font-family: 'Prompt';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 42px;

  color: #191919;
`;

const FilterButton = styled.button`
  background-color: transparent;
  position: absolute;
  width: 76px;
  height: 36px;
  left: 283px;
  top: 15px;

  border: 1.5px solid #000000;
  align-items: center;
  display: flex;
  align-items: center;
`;

const FilterText = styled.div`
  position: absolute;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  margin-left: 6px;
`;

const FilterIcon = styled.img`
  width: 18px;
  height: 18px;
  margin-left: 38px;
`;
