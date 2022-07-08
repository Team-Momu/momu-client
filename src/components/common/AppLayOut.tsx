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
  margin: auto;
  background: #ffffff;
  overflow: auto;
`;
const Container = styled.div`
  position: relative;
  padding: 0 16px;
  height: 812px;
  margin: auto;
  border: 1px solid red;
  overflow: auto;
`;

export default AppLayout;
