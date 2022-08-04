import NavBar from '@common/NavBar';
import RequestInfo from 'components/requestcuration/RequestInfo';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../store/store';
import { useEffect } from 'react';
import { userInfo } from '@slices/user/userThunk';
import { useRouter } from 'next/router';

const AddCuration = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const me = useSelector((state: RootState) => state.user.me);

  useEffect(() => {
    dispatch(userInfo());
  }, []);

  useEffect(() => {
    if (me.data?.id && (!me.data?.mbti || !me.data?.nickname)) {
      router.push('/profile');
    }
  }, [me]);

  return (
    <Wrapper>
      <RequestInfo />
    </Wrapper>
  );
};

export default AddCuration;

const Wrapper = styled.div``;
