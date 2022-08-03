import { userInfo } from '@slices/user/userThunk';
import { useEffect } from 'react';
import { RootState, useAppDispatch, useAppSelector } from 'store/store';
import styled from 'styled-components';
import Image from 'next/image';
import defaultImage from '@public/img/defaultProfile.png';
import mypageMask from '@public/img/mask/mypageMask.svg';

const ProfileCard = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state: RootState) => state.user.me.data);
  const profileImg = user?.profile_img;

  useEffect(() => {
    dispatch(userInfo());
  }, []);

  return (
    <>
      <Wrapper>
        <ImgContainer>
          <ProfileImg>
            <Image
              src={profileImg || defaultImage}
              width={80}
              height={80}
              objectFit="cover"
            />
          </ProfileImg>
          <Mask>
            <Image src={mypageMask} width={80} height={80} />
          </Mask>
        </ImgContainer>
        <UserInfo>
          <UserName>{user?.nickname}</UserName>
          <UserMbti>{user?.mbti.mbti}</UserMbti>
        </UserInfo>
        <BottomInfo>
          <UserLevel>
            <PlaceHolder>등급</PlaceHolder>
            <DetailUserInfo>{user?.level}등급</DetailUserInfo>
          </UserLevel>
          <UserSelected>
            <PlaceHolder>채택</PlaceHolder>
            <DetailUserInfo>{user?.select_count}</DetailUserInfo>
          </UserSelected>
        </BottomInfo>
        <Line></Line>
      </Wrapper>
    </>
  );
};

export default ProfileCard;

const Wrapper = styled.div`
  padding-top: 167px;
`;
const ProfileImg = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  overflow: hidden;
`;

const ImgContainer = styled.div`
  position: relative;
  margin-left: 8px;
  margin-bottom: 16px;
`;

const Mask = styled.div`
  z-index: 1;
  position: absolute;
  width: 80px;
  height: 80px;
  left: 0px;
  top: 0px;
`;

const UserInfo = styled.div`
  height: 38px;
  display: flex;
  line-height: 38px;
  margin-bottom: 14px;
`;

const UserName = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;

  color: #191919;
`;

const UserMbti = styled.div`
  margin-top: 6px;
  text-align: center;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 30px;

  color: #ffffff;

  margin-left: 10px;
  width: 62px;
  height: 30px;
  background: #2260d8;
`;
const UserLevel = styled.div`
  border: 1px solid #191919;
  height: 50px;
  width: 171px;
  display: flex;
  justify-content: space-between;
  padding: 14px 16px;
`;
const UserSelected = styled.div`
  border-top: 1px solid #191919;
  border-bottom: 1px solid #191919;
  border-right: 1px solid #191919;
  height: 50px;
  width: 170px;
  display: flex;
  justify-content: space-between;
  padding: 14px 16px;
`;

const PlaceHolder = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */

  color: #191919;
`;
const DetailUserInfo = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */

  color: #191919;
`;

const BottomInfo = styled.div`
  display: flex;
  width: 344px;
  margin-bottom: 39px;
`;
const Line = styled.div`
  border-bottom: 1px solid #191919;
  width: calc(100% + 16px * 2);
  margin: 0 16px 0 -16px;
`;
