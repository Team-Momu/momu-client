import type { NextPage } from 'next';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
import styled from 'styled-components';
import { CSSProperties, useState } from 'react';

const Home: NextPage = () => {
  const [checked, setChecked] = useState(false);

  const mbti = useSelector((state: RootState) => state.mbti.mbti);
  return (
    <>
      {/*<div*/}
      {/*  style={{*/}
      {/*    textAlign: 'center',*/}
      {/*    border: '1px dotted black',*/}
      {/*    marginTop: '100px',*/}
      {/*  }}*/}
      {/*>*/}
      {/*  <h1>❌모무데브 개발 중❌</h1>*/}

      {/*  <div>당신의 먹비티아이는</div>*/}
      {/*  <h1>{mbti}</h1>*/}
      {/*  <div>입니다.</div>*/}
      {/*</div>*/}
      <SetProfileText>프로필 설정</SetProfileText>
      <ServiceDescriptionText>
        신촌, 홍대 지역 기반 맛집 큐레이션 서비스 모무입니다. 프로필 설정을 하고
        모무에서 활동을 시작해보세요!
      </ServiceDescriptionText>
      <NicknameText>닉네임</NicknameText>
      <NicknameInput />
      <ProfileImageText>프로필 사진</ProfileImageText>
      <NextButton checked={checked}>다음</NextButton>
    </>
  );
};

const testStyle: CSSProperties = {};

const SetProfileText = styled.div`
  position: absolute;
  width: 146px;
  height: 38px;
  left: 16px;
  top: 128px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;

  color: #f4851e;
`;

const ServiceDescriptionText = styled.div`
  position: absolute;
  width: 277px;
  height: 40px;
  left: 16px;
  top: 174px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  /* or 154% */

  color: #767676;
`;

const NicknameText = styled.div`
  position: absolute;
  width: 52px;
  height: 24px;
  left: 16px;
  top: 274px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  /* identical to box height */

  color: #191919;
`;

const NicknameInput = styled.input`
  box-sizing: border-box;

  position: absolute;
  width: 343px;
  height: 42px;
  left: 16px;
  top: 312px;

  background: #ffffff;
  border: 1px solid #191919;

  padding: 12px 0 12px 12px;
  &:focus {
    outline: none;
  }
`;

const ProfileImageText = styled.div`
  position: absolute;
  width: 92px;
  height: 24px;
  left: 16px;
  top: 394px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  /* identical to box height */

  color: #191919;
`;

const NextButton = styled.button<{ checked?: boolean }>`
  position: absolute;
  width: 343px;
  height: 56px;
  left: 16px;
  top: 656px;

  background: ${({ checked }) => (checked ? '#F57A08' : '#BFBFBF')};
`;

export default Home;
