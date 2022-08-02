import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { RootState, useAppDispatch, useAppSelector } from '../../store/store';
import { modalSlice } from '@slices/Modal/modalSlice';

const Modal = ({ children }: PropsWithChildren<unknown>) => {
  const dispatch = useAppDispatch();
  const searchModalState = useAppSelector(
    (state: RootState) => state.modal.searchModal
  );

  const onClickWrapperTest = () => {
    dispatch(modalSlice.actions.searchModalToggle());
  };
  const onClickContainerTest = (e: any) => {
    e.stopPropagation();
  };

  return (
    <>
      <Wrapper onClick={onClickWrapperTest}>
        <Container onClick={onClickContainerTest}>{children}</Container>
      </Wrapper>
    </>
  );
};
// 전체 화면 덮기
const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: none;
  padding: 0;
  margin: 0;
  top: 0;
  left: 0;
`;
// Modal
const Container = styled.div`
  position: relative;
  margin: auto;
  width: 343px;
  height: 700px;
  background: #ffffff;
  top: 16px;
  padding: 20px;
  border: 1px solid black;
`;

export default Modal;
