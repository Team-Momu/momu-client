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
  width: 414px;
  height: 767px;
  position: relative;
  margin: auto;
  background: #ffffff;
  overflow: auto;
`;
const Container = styled.div`
  position: relative;
  padding: 0 16px;
  height: 767px;
  margin: auto;
  overflow: auto;
`;

export default AppLayout;
