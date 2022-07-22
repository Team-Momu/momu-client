import type { NextPage } from 'next';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
import styled from 'styled-components';
import { CSSProperties, useCallback, useEffect, useState } from 'react';
import snug from '@public/img/mbti/snug1.png';
import lively from '@public/img/mbti/lively1.png';
import defaultProfile from '@public/img/defaultProfile.png';
import camera from '@public/img/camera.png';
import Image from 'next/image';

const Home: NextPage = () => {
  const [nickname, setNickname] = useState('');
  const [active, setActive] = useState(false);
  const [imagePath, setImagePath] = useState('');
  const [createObjectURL, setCreateObjectURL] = useState(null);
  const onChangeInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.value.length) {
        setActive(true);
      } else {
        setActive(false);
      }
      if (e.target.value.length <= 10) {
        setNickname(e.target.value);
      }
    },
    []
  );

  const onChangeImages = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      // @ts-ignore
      const [file] = e.target.files;
      // @ts-ignore
      setCreateObjectURL(URL.createObjectURL(file));

      // const imageFormData = new FormData();
      // [].forEach.call(e.target.files, (f) => {
      //   imageFormData.append('image', f);
      // });
    },
    []
  );

  // useEffect(() => {
  //   console.log(createObjectURL);
  // }, [createObjectURL]);

  const onSubmit = useCallback(() => {
    const formData = new FormData();
    formData.append('nickiname', nickname);
    formData.append('image', imagePath);
  }, []);

  const example1 = 'https://unsplash.com/photos/z087QfkQu08';
  const example2 = 'https://unsplash.com/photos/lNgmT9RokOQ';

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

  return (
    <>
      <SetProfileText>프로필 설정</SetProfileText>
      <ServiceDescriptionText>
        신촌, 홍대 지역 기반 맛집 큐레이션 서비스 모무입니다. 프로필 설정을 하고
        모무에서 활동을 시작해보세요!
      </ServiceDescriptionText>
      <div style={NicknameText}>닉네임</div>
      <form action="">
        <NicknameInput
          value={nickname}
          onChange={onChangeInput}
          placeholder="10자 이내 영문으로 작성해주세요!"
        />
        <ProfileImageText>프로필 사진</ProfileImageText>
        <div style={ImagePositionBox}>
          <div style={RelativeBox}>
            <input
              type="file"
              id="image-upload"
              hidden
              onChange={onChangeImages}
              pattern="[a-zA-Z0-9]"
            />
            <label
              htmlFor="image-upload"
              style={{
                cursor: 'pointer',
                position: 'absolute',
                bottom: '5px',
                right: '0',
                zIndex: '1',
              }}
            >
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
      </form>
      <NextButton active={active}>다음</NextButton>
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

export default Home;
