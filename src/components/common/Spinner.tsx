import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import styled from 'styled-components';

export default function Spinner() {
  return (
    <Wrapper>
      <Box sx={{ display: 'flex' }}>
        <CircularProgress style={{ color: '#F57A08' }} />
      </Box>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
