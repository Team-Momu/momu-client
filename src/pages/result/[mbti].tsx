import styled from 'styled-components';
import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import Modal from 'react-modal';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store/store';
import { userInfo } from '@slices/user/userThunk';
import close from '@public/img/closeModal.png';

const Mbti = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  // const asPathArray = router.asPath.split('/');
  // const mbti = asPathArray[asPathArray.length - 1];
  // const mbti = useSelector((state: RootState) => state.mbti.mbti);
  const [second, setSecond] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);

  const me = useSelector((state: RootState) => state.user.me);
  const mbti = me.data?.mbti;

  useEffect(() => {
    dispatch(userInfo());
  }, []);

  useEffect(() => {
    console.log('me', me);
  }, [me]);

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
      <Illustration />
      <CommentText>당신의 먹비티아이 유형은</CommentText>
      <CommentText second>
        {/*{mbti.mbti}({mbti.type})*/}
        <span style={{ color: '#191919' }}> 입니다.</span>
      </CommentText>
      <Description>{mbti?.description}</Description>

      <WhatIsMbti onClick={openModal}>먹비티아이란?</WhatIsMbti>

      <MomuStartButton onClick={pushToFeed}>모무 시작하기</MomuStartButton>

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
            top: '16px',
            margin: '0 auto 0 auto',
          },
        }}
      >
        <Wrapper>
          <button onClick={closeModal}>닫기</button>
          {kindOfMbti.map((c) => {
            return (
              <>
                <Container>
                  <div>{c.title}</div>
                  <div>{c.content}</div>
                </Container>
              </>
            );
          })}
        </Wrapper>
      </Modal>
    </>
  );
};

const kindOfMbti = [
  {
    title: '새로움에 대한 자세',
    content: '새로운 음식, 도전하는 것을 즐기는가?',
  },
  {
    title: '선호하는 공간',
    content: '좋아하는 공간의 분위기, 특성이 어떤가요?',
  },
  {
    title: '만족의 기준',
    content: '음식의 맛이 중요한가요? 서비스, 분위기 등도 중요한가요?',
  },
  {
    title: '매운 음식을 먹는 정도',
    content: '매운 음식을 잘 먹는가요? 잘 못 먹는가요?',
  },
];

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 0;
  padding-bottom: 0;
  padding-left: 21px;
  padding-right: 21px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Description = styled.div`
  position: absolute;
  width: 256px;
  height: 92px;
  left: 59px;
  top: 394px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 23px;
  /* or 153% */

  text-align: center;

  color: #191919;
`;

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
  width: 160px;
  height: 160px;
  left: 107px;
  top: 100px;
  background: #d9d9d9;
`;

const CommentText = styled.span<{ second?: boolean }>`
  position: absolute;
  width: 325px;
  height: 72px;
  left: 25px;
  
  top: ${({ second }) => (second ? '340px;' : '300px;')}

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  text-align : center;
  /* or 150% */

  color:${({ second }) => (second ? '#F57906' : '#191919')} ;
`;

const WhatIsMbti = styled.div`
  position: absolute;
  width: 92px;
  height: 36px;
  left: 141px;
  top: 516px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 36px;
  /* identical to box height, or 225% */

  text-decoration-line: underline;

  color: #989898;
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
  height: 56px;
  left: 16px;
  top: 656px;

  background: #f57906;

  color: #ffffff;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 20px;
`;

export default Mbti;
