import { kakao } from '@slices/user/userThunk';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useCallback, useEffect } from 'react';
import { useAppDispatch } from 'store/store';
import Spinner from '@common/Spinner';
import styled from 'styled-components';

//@ts-ignore
const KakaoRedirect = ({ query }) => {
  const dispatch = useAppDispatch();
  const code = query.code;

  // dispatch(kakao(code))
  //   .then((r) => console.log('🔥🔥🔥🔥🔥', r))
  //   .catch((err) => console.error(err));

  dispatch(kakao(code))
    .unwrap()
    .then((r) => {
      console.log('🔥성공', r);
    })
    .catch((error) => {
      console.error('🔥에러', error);
    });

  return (
    <Wrapper>
      <Spinner />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

//@ts-ignore
export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const { query } = context;

    return {
      props: { query },
    };
  } catch (error) {
    console.error(error);
  }
};

export default KakaoRedirect;
