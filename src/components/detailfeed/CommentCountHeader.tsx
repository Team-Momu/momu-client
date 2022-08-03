import { FC } from 'react';
import styled from 'styled-components';

interface Props {
  commentCount: number;
}
const CommentCountHeader: FC<Props> = ({ commentCount }) => {
  return (
    <Wrapper>
      <TextContainer>
        <Text>
          ALL
          <CommentCount>({commentCount}) </CommentCount>
        </Text>
      </TextContainer>
    </Wrapper>
  );
};

export default CommentCountHeader;

const Wrapper = styled.div`
  padding-top: 20px;
  font-family: 'Prompt';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;

  color: #191919;

  display: flex;
  flex-direction: column;
`;

const Text = styled.div`
  padding-bottom: 5px;
  display: flex;
  border-bottom: 4px solid #191919;
  height: 40px;
`;
const TextContainer = styled.div`
  display: flex;
`;

const CommentCount = styled.div`
  padding-left: 5px;
  font-weight: 600;
  font-size: 20px;
`;
