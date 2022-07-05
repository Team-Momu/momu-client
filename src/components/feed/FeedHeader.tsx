import styled from 'styled-components';

const FeedHeader = () => {
  return (
    <HeaderContainer>
      <TitleContainer>
        <TextContainer>Request</TextContainer>
        <LineContainer></LineContainer>
      </TitleContainer>
      <FilterButton>필터</FilterButton>
    </HeaderContainer>
  );
};
export default FeedHeader;

const HeaderContainer = styled.div``;
const TitleContainer = styled.div``;
const TextContainer = styled.div`
  border-bottom: 1px solid black;
`;
const LineContainer = styled.div``;
const FilterButton = styled.button``;
