import styled from 'styled-components';
import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
// import Modal from 'react-modal';
import Modal from '@common/Modal';

import wrapper, {
  RootState,
  useAppDispatch,
  useAppSelector,
} from '../../store/store';
import { userInfo } from '@slices/user/userThunk';
import close from '@public/img/closeModal.png';
import Korea from '@public/img/mbti/korea1.png';
import Image from 'next/image';
import {
  Box,
  ButtonContainer,
  CloseButtonStyle,
  CloseStyle,
  ColorText,
  ContentText,
  HeaderBottomLine,
  HeaderText1,
  HeaderText2,
  LeftBox,
  LeftInnerBox,
  LeftInnerDownBox,
  LeftInnerUpBox,
  NoneColorText,
  RightBox,
  RightInnerBox,
  RightInnerDownBox,
  RightInnerUpBox,
  TitleText,
} from '@mbti/mbtiStyle';

import ResultLogo from '@public/img/mbti/ResultLogo.png';
import { modalSlice } from '@slices/Modal/modalSlice';
import axios from 'axios';

const Mbti = ({ data }: any) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  // const data = useAppSelector((state: RootState) => state.user.me);
  // @ts-ignore
  const modalState = useAppSelector(
    (state: RootState) => state.modal.searchModal
  );
  // useEffect(() => {
  //   dispatch(userInfo());
  // }, []);

  const [mbtiState, setMbtiState] = useState<string | undefined>('');
  const [type, setType] = useState<string | undefined>('');

  const mbti = data?.data?.mbti;

  useEffect(() => {
    console.log(data);
    if (data) {
      setMbtiState(data?.data?.mbti?.mbti);
      setType(data?.data?.mbti?.type);
    }
  }, [data]);

  const pushToFeed = useCallback(() => {
    router.push('/feed');
  }, []);

  const toggleSearchModal = () => {
    dispatch(modalSlice.actions.searchModalToggle());
  };

  return (
    <>
      <ImageContainer>
        <Image src={ResultLogo} width={160} height={38} />
      </ImageContainer>
      <CommentText>당신의 먹비티아이 유형은</CommentText>
      <CommentText second>
        {mbtiState}({type})<span style={{ color: '#191919' }}> 입니다.</span>
      </CommentText>
      <Description>{mbti?.description}</Description>
      <WhatIsMbti onClick={toggleSearchModal}>먹비티아이란?</WhatIsMbti>
      <MomuStartButton onClick={pushToFeed}>모무 시작하기</MomuStartButton>
      {modalState && (
        <Modal>
          <Wrapper>
            <Header>
              <ButtonContainer>
                <CloseStyle>
                  <CloseButtonStyle onClick={toggleSearchModal}>
                    <Image src={close} />
                  </CloseButtonStyle>
                </CloseStyle>
              </ButtonContainer>
              <HeaderText1>먹BTI는</HeaderText1>
              <HeaderText2>
                MBTI와 유사한 모무만의 맛집 취향 유형입니다.
              </HeaderText2>
              <HeaderBottomLine />
            </Header>
            <Article>
              {kindOfMbti.map((c) => {
                return (
                  <>
                    <Container>
                      <TitleText>{c.title}</TitleText>
                      <ContentText>{c.content}</ContentText>
                      <Box>
                        <LeftBox>
                          <LeftInnerBox>
                            <LeftInnerUpBox>
                              <ColorText>{c.typeLeft[0]}</ColorText>
                              <NoneColorText>
                                {c.typeLeft.slice(1)}
                              </NoneColorText>
                            </LeftInnerUpBox>
                            <LeftInnerDownBox>
                              {c.typeLeftDescription}
                            </LeftInnerDownBox>
                          </LeftInnerBox>
                        </LeftBox>
                        <RightBox>
                          <RightInnerBox>
                            <RightInnerUpBox>
                              <ColorText>{c.typeRight[0]}</ColorText>
                              <NoneColorText>
                                {c.typeRight.slice(1)}
                              </NoneColorText>
                            </RightInnerUpBox>
                            <RightInnerDownBox>
                              {c.typeRightDescription}
                            </RightInnerDownBox>
                          </RightInnerBox>
                        </RightBox>
                      </Box>
                    </Container>
                  </>
                );
              })}
            </Article>
          </Wrapper>
        </Modal>
      )}
    </>
  );
};

const Article = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
`;

const kindOfMbti = [
  {
    title: '새로움에 대한 자세',
    content: '새로운 음식, 도전하는 것을 즐기는가?',
    typeLeft: 'NEW',
    typeLeftDescription: '새로움을 추구하는',
    typeRight: 'CAREFUL',
    typeRightDescription: '신중한, 조심스러운',
  },
  {
    title: '선호하는 공간',
    content: '좋아하는 공간의 분위기, 특성이 어떤가요?',
    typeLeft: 'OPEN',
    typeLeftDescription: '개방적인, 활기찬',
    typeRight: 'INDIVIDUAL',
    typeRightDescription: '개인적인, 조용한',
  },
  {
    title: '만족의 기준',
    content: '음식의 맛이 중요한가요? 서비스, 분위기 등도 중요한가요?',
    typeLeft: 'TASTE',
    typeLeftDescription: '맛 중심',
    typeRight: 'MOOD',
    typeRightDescription: '분위기 중심',
  },
  {
    title: '매운 음식을 먹는 정도',
    content: '매운 음식을 잘 먹는가요? 잘 못 먹는가요?',
    typeLeft: 'MAEPJALR',
    typeLeftDescription: '맵잘알',
    typeRight: 'MAEPJJIL',
    typeRightDescription: '맵찔이',
  },
];

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
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

const ImageContainer = styled.div`
  margin-top: 212px;
  position: absolute;
  left: 28.53%;
`;

const CommentText = styled.span<{ second?: boolean }>`
  position: absolute;
  width: 325px;
  height: 72px;
  left: 25px;

  top: ${({ second }) => (second ? '340px;' : '300px;')};

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 22.5px;
  line-height: 36px;
  text-align: center;
  /* or 150% */

  color: ${({ second }) => (second ? '#F57906' : '#191919')};
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

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req }) => {
      const cookie = req ? req.headers.cookie : '';
      axios.defaults.headers.common['Cookie'] = '';
      if (cookie && req) {
        axios.defaults.headers.common['Cookie'] = cookie;
      }
      const { payload } = await store.dispatch(userInfo());
      const data = payload;
      return { props: { data, cookie } };
    }
);

export default Mbti;
