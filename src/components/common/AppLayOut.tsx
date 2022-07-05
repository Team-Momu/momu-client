import { FC, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { useRouter } from 'next/router';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

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
  border: 1px solid black;
`;
const Container = styled.div`
  position: relative;
  border: 1px solid red;
  padding: 0 16px;
  height: 100%;
  margin: auto;
`;

export default AppLayout;
