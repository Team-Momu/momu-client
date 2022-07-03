import { FC, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { useRouter } from 'next/router';
import React from 'react';

type Props = {
  children: React.ReactNode;
};
console.log('test');
console.log('test2');
const AppLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Wrapper>
        <Container>{children}</Container>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 375px;
  height: 812px;
  position: relative;
  overflow: scroll;
  margin: auto;
  background: #ffffff;
`;
const Container = styled.div`
  border: 1px solid red;
  padding: 0 16px;
  height: 100%;
`;

export default AppLayout;
