import styled from 'styled-components';
import Logo from '@public/img/logoGroup.svg';
import Image from 'next/image';
import * as React from 'react';

const ServerError = () => {
  return (
    <Wrapper>
      <Container>
        <Image src={Logo} />
        <div style={{ textAlign: 'center' }}>
          <h1>올바른 접근이 아닙니다.</h1>
          <h3>브라우저를 완전히 종료 후</h3>
          <h3>다시 접속해주세요.</h3>
        </div>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
`;

export default ServerError;
