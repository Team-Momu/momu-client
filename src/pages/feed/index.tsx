import { NextPage } from 'next';
import styled from 'styled-components';
import AppLayOut from '../../components/common/AppLayOut';

const Feed: NextPage = () => {
  return (
    <AppLayOut>
      <h1>feed</h1>
    </AppLayOut>
  );
};

export default Feed;

const Wrapper = styled.div`
  padding: 0;
  margin: 0;
`;
