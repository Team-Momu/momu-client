import styled from 'styled-components';
import { useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import Modal from 'react-modal';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const Mbti = () => {
  const router = useRouter();
  const asPathArray = router.asPath.split('/');
  const mbti = asPathArray[asPathArray.length - 1];
  // const mbti = useSelector((state: RootState) => state.mbti.mbti);
  const [second, setSecond] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const pushToFeed = useCallback(() => {
    router.push('/feed');
  }, []);

  return (
    <>
      <Navbar>먹BTI 결과</Navbar>
      <NavbarUnderLine />
      <Illustration />
      <CommentText>당신의 먹비티아이 유형은</CommentText>
      <CommentText second>
        {mbti}
        <span style={{ color: '#191919' }}>입니다.</span>
      </CommentText>
      <WhatIsMbti onClick={openModal}>먹비티아이란?</WhatIsMbti>
      <Line></Line>
      <MomuStartButton onClick={pushToFeed}>모무 시작하기</MomuStartButton>

      <div style={{ position: 'relative' }}>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={{
            overlay: {
              background: 'none',
            },
            content: {
              position: 'absolute',
              color: 'lightsteelblue',
              width: '335px',
              height: '723px',
              top: '72px',

              margin: 'auto',
            },
          }}
        >
          <button onClick={closeModal}>close</button>
          <div>I am a modal</div>
        </Modal>
      </div>
    </>
  );
};

const Navbar = styled.div`
  position: absolute;
  width: 88px;
  height: 24px;
  left: 144px;
  top: 16px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  /* identical to box height */

  color: #191919;
`;
const NavbarUnderLine = styled.div`
  position: absolute;
  width: 375px;
  height: 0px;
  left: 0px;
  top: 56px;

  border-bottom: 1px solid #000000;
`;
const Illustration = styled.div`
  position: absolute;
  width: 120px;
  height: 120px;
  left: 16px;
  top: 84px;

  background: #d9d9d9;
`;

const CommentText = styled.span<{ second?: boolean }>`
  position: absolute;
  width: 305px;
  height: 72px;
  left: 16px;
  top: ${({ second }) => (second ? '260px;' : '220px;')}

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  /* or 150% */

  color:${({ second }) => (second ? '#F57906' : '#191919')} ;
`;

const WhatIsMbti = styled.div`
  position: absolute;
  width: 92px;
  height: 36px;
  left: 16px;
  top: 475px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 48px;
  /* identical to box height, or 225% */

  border-bottom: 2px solid #191919;

  color: #191919;
`;
const Line = styled.div`
  position: absolute;
  width: 343px;
  height: 0px;
  left: 11px;
  top: 533px;

  border-bottom: 2px solid #191919;
`;

const MomuStartButton = styled.button`
  position: absolute;
  width: 343px;
  height: 44px;
  left: 14px;
  top: 553px;

  background: #f57906;
  color: #ffffff;
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

export default Mbti;
