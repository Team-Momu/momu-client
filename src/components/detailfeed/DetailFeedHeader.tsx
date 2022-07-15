import styled from 'styled-components';
import {
  HeaderContainer,
  HeaderTextContainer,
  Line,
} from 'styles/headerstyle/HeaderCommonStyle';

const DetailFeedHeader = () => {
  return (
    <>
      <HeaderContainer>
        <HeaderTextContainer>Curation</HeaderTextContainer>
      </HeaderContainer>
      <Line></Line>
    </>
  );
};

export default DetailFeedHeader;

const BackIcon = styled.img`
  width: 18px;
  height: 18px;
`;
