import type { NextPage } from 'next';
import { useSelector } from 'react-redux';
import wrapper, { RootState, useAppDispatch } from 'store/store';
import styled from 'styled-components';
import { CSSProperties, useCallback, useEffect, useState } from 'react';
import defaultProfile from '@public/img/defaultProfile.png';
import camera from '@public/img/camera.png';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { setProfile } from '@slices/profileSet/profileSetThunk';
import { userInfo } from '@slices/user/userThunk';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import useImage from '../../utils/hooks/useImage';
import Spinner from '@common/Spinner';

// @ts-ignore
const Home: NextPage = ({ data }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [nickname, setNickname] = useState('');
  const [active, setActive] = useState(false);
  const status = useSelector((state: RootState) => state.profileSet.status);
  const { imagePath, createObjectURL, handleImagePath } = useImage();

  useEffect(() => {
    dispatch(userInfo());
  }, []);

  // 서버사이드 유저 인증 과정
  // useEffect(() => {
  //   // 닉네임은 설정했고 mbti 안하면
  //   if (data.nickname && data.mbti !== '') {
  //     router.push('/feed');
  //   }
  //   // 닉네임, mbti 모두 설정했으면
  //   if (data.nickname && data.mbti === '') {
  //     router.push('/profile/1');
  //   }
  // }, [data]);

  const onChangeInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      // 정규 표현식 이용하여 한글 입력 방지
      const notEngExp = /[^A-Za-z]/g;
      const isNotEng = notEngExp.test(e.target.value);
      if (isNotEng) {
        alert('영어를 입력해주세요!');
        e.preventDefault();
        return;
      }

      // 버튼 색깔 바꿔주기
      if (e.target.value.length) {
        setActive(true);
      } else {
        setActive(false);
      }

      // 값이 10자 이내면 저장
      if (e.target.value.length <= 10) {
        setNickname(e.target.value);
      }
    },
    [active, nickname]
  );

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const ask = confirm(`${nickname}으로 등록하시겠습니까?`);
    if (ask) {
      const formData = new FormData();

      formData.append('nickname', nickname);
      formData.append('profile_img', imagePath);

      dispatch(setProfile(formData));
    }
  };

  const myLoader = ({ src, width, quality }: any) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  const defaultImageStyle: CSSProperties = {
    borderRadius: '50%',
    background: '#EDEDED',
  };
  const ImagePositionBox: CSSProperties = {
    position: 'absolute',
    width: '88px',
    height: '88px',
    left: '16px',
    top: '432px',
  };
  const RelativeBox: CSSProperties = {
    position: 'relative',
  };
  const labelStyle: CSSProperties = {
    cursor: 'pointer',
    position: 'absolute',
    bottom: '5px',
    right: '0',
    zIndex: '1',
  };

  return (
    <>
      {data ? (
        <Spinner />
      ) : (
        <>
          <SetProfileText>프로필 설정</SetProfileText>
          <ServiceDescriptionText>
            신촌, 홍대 지역 기반 맛집 큐레이션 서비스 모무입니다. 프로필 설정을
            하고 모무에서 활동을 시작해보세요!
          </ServiceDescriptionText>
          <div style={NicknameText}>닉네임</div>
          <form
            onSubmit={onSubmit}
            encType="multipart/form-data"
            autoComplete="off"
          >
            <NicknameInput
              value={nickname}
              onChange={onChangeInput}
              placeholder="10자 이내 영문으로 작성해주세요!"
              required
            />
            <ProfileImageText>프로필 사진</ProfileImageText>
            <div style={ImagePositionBox}>
              <div style={RelativeBox}>
                <input
                  type="file"
                  id="image-upload"
                  hidden
                  onChange={handleImagePath}
                  pattern="[a-zA-Z0-9]"
                />
                <label htmlFor="image-upload" style={labelStyle}>
                  <Image width={25} height={20} src={camera}></Image>
                </label>
                <Image
                  loader={myLoader}
                  src={createObjectURL || defaultProfile}
                  width={100}
                  height={100}
                  style={defaultImageStyle}
                  objectFit="cover"
                ></Image>
              </div>
            </div>
            <NextButton active={active} disabled={!active}>
              다음
            </NextButton>
          </form>
        </>
      )}
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

const NicknameText: CSSProperties = {
  position: 'absolute',
  width: '52px',
  height: '24px',
  left: '16px',
  top: '274px',

  fontFamily: 'Pretendard',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '20px',
  lineHeight: '24px',

  color: '#191919',
};

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

const NextButton = styled.button<{ active?: boolean }>`
  position: absolute;
  width: 343px;
  height: 56px;
  left: 16px;
  top: 656px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  /* identical to box height, or 100% */

  color: #ffffff;

  background: ${({ active }) => (active ? '#F57A08' : '#BFBFBF')};
`;

// export const getServerSideProps = wrapper.getServerSideProps(
//   (store) =>
//     async ({ req, res }) => {
//       const { payload } = await store.dispatch(userInfo());
//
//       const { data } = payload;
//       return { props: { data } };
//     }
// );

export default Home;
