import NavBar from '@common/NavBar';
import RequestInfo from 'components/requestcuration/RequestInfo';
import styled from 'styled-components';

const AddCuration = () => {
  return (
    <Wrapper>
      <RequestInfo />
      <NavBar />
    </Wrapper>
  );
};

export default AddCuration;

const Wrapper = styled.div`
  height: 812px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
