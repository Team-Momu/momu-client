import { user } from '@slices/mbti/mbtiThunk';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAppDispatch } from 'store/store';

//@ts-ignore
const KakaoRedirect = ({ query }) => {
  const dispatch = useAppDispatch();
  const code = query.code;

  dispatch(user(code));

  return (
    <>
      <div
        style={{
          textAlign: 'center',
          border: '1px dotted black',
          marginTop: '100px',
        }}
      >
        <h1>❌모무데브 개발 중❌</h1>

        <div>리다이렉트</div>
      </div>
    </>
  );
};

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
