import styled from 'styled-components';
import useInput from 'utils/hooks/useInput';
import CommentHeader from 'components/comment/CommentHeader';
import AddComment from 'components/comment/AddComment';

const WriteComment = () => {
  return (
    <Wrapper>
      <CommentHeader />
      <AddComment />
    </Wrapper>
  );
};

export default WriteComment;

const Wrapper = styled.div`
  width: 375px;
`;
