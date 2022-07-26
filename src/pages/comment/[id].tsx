import styled from 'styled-components';
import useInput from 'utils/hooks/useInput';
import AddComment from 'components/comment/AddComment';
import NavBar from '@common/NavBar';

const WriteComment = () => {
  return (
    <Wrapper>
      <AddComment />
      <NavBar />
    </Wrapper>
  );
};

export default WriteComment;

const Wrapper = styled.div`
  height: 812px;
  display: flex;
  flex-direction: column;
  justify-content: space-between; ;
`;
