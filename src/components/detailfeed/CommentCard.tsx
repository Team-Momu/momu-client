import { FC, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { DivisionLine } from 'styles/commentstyle/CommentStyle';
import { RootState, useAppDispatch, useAppSelector } from 'store/store';
import {
  postSelectedStateThunk,
  deleteSelectedStateThunk,
} from '@slices/select/selectSlice';
import { userInfo } from '@slices/user/userThunk';
import defaultImage from '@public/img/defaultProfile.png';
import selectedButton from '@public/img/select/SelectedButton.svg';
import unselectedButton from '@public/img/select/unSelectedButton.svg';
import otherUserSelectedButton from '@public/img/select/OtherUserSelectedButton.svg';
import line from '@public/img/Line.png';

interface Props {
  userId: number;
  commentId: number;
  postId: number;
  selectedFlag: boolean;
  placeImg: string;
  writerName: string;
  writerProfile: string;
  writerMbti: string;
  description: string;
  placeName: string;
  placeAddress: string;
  placeCategory: string;
  createAt: string;
}

const CommentCard: FC<Props> = ({
  userId,
  postId,
  commentId,
  selectedFlag,
  placeImg,
  writerName,
  writerProfile,
  writerMbti,
  description,
  placeName,
  placeAddress,
  placeCategory,
  createAt,
}) => {
  const [selectedState, setSelectedState] = useState(selectedFlag);
  const dispatch = useAppDispatch();
  const user = useAppSelector((state: RootState) => state.user.me.data.id);
  console.log('user🥶', user);
  useEffect(() => {
    dispatch(userInfo());
  }, []);

  function ButtonChoice() {
    if (selectedState === true && user === userId) {
      return <Image src={selectedButton} />;
    } else if (selectedState === false && user === userId) {
      return <Image src={unselectedButton} />;
    }
    if (selectedState === true && user !== userId) {
      return <Image src={otherUserSelectedButton} />;
    } else if (selectedState === false && user !== userId) {
      return <></>;
    }
  }

  const onClick = useCallback(() => {
    if (selectedState === true && user === userId) {
      setSelectedState(false);
    } else if (selectedState === false && user === userId)
      setSelectedState(true);
    if (selectedState === true && user === userId) {
      dispatch(deleteSelectedStateThunk({ postId, commentId }));
    } else if (selectedState === false && user === userId)
      dispatch(postSelectedStateThunk({ postId, commentId }));
  }, [selectedState]);

  return (
    <>
      <Wrapper>
        <PlaceImgContainer>
          {placeImg === null ? (
            <></>
          ) : (
            <Image
              src={placeImg}
              width={'343'}
              height={'206'}
              objectFit="cover"
            />
          )}
        </PlaceImgContainer>
        <BottomContainer>
          <UserInfo>
            <UserContainer>
              <ProfileImgContainer>
                {writerProfile === null ? (
                  <Image
                    src={defaultImage}
                    width={'28'}
                    height={'28'}
                    objectFit="cover"
                  />
                ) : (
                  <Image
                    src={writerProfile}
                    width={'28'}
                    height={'28'}
                    objectFit="cover"
                  />
                )}
              </ProfileImgContainer>
              <UserNickName>{writerName}</UserNickName>
              <LineImg>
                <Image src={line} height={'15'} />
              </LineImg>
              <UserMbti>{writerMbti}</UserMbti>
            </UserContainer>
            <WrittenDate>{createAt}</WrittenDate>
          </UserInfo>
          <DescriptionText>{description}</DescriptionText>
          <PlaceInfoBox>
            <PlaceContainer>
              <CategoryContainer>
                <PlaceName>{placeName}</PlaceName>
                <CategoryName>{placeCategory}</CategoryName>
              </CategoryContainer>
              <PlaceAddress>{placeAddress}</PlaceAddress>
            </PlaceContainer>
            <ButtonContainer>
              <SelectedButton onClick={onClick}>
                {ButtonChoice()}
              </SelectedButton>
            </ButtonContainer>
          </PlaceInfoBox>
        </BottomContainer>
        <DivisionLine></DivisionLine>
      </Wrapper>
    </>
  );
};

export default CommentCard;

const Wrapper = styled.div``;
const PlaceImgContainer = styled.div`
  padding-top: 23px;
`;
const BottomContainer = styled.div``;

const UserContainer = styled.div`
  display: flex;
`;
const UserInfo = styled.div`
  margin: 12px 0;
  display: flex;
  justify-content: space-between;
`;
const ProfileImgContainer = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  overflow: hidden;
`;
const UserNickName = styled.div`
  padding-left: 10px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 28px;
  /* identical to box height */

  color: #191919;
`;

const LineImg = styled.div`
  padding: 2px 8px 0 8px;
  margin-top: 5px;
`;
const UserMbti = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 28px;
  /* identical to box height */

  color: #2260d8;
`;
const WrittenDate = styled.div`
  padding-right: 10px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 28px;

  color: #a09a9a;
`;

const DescriptionText = styled.div`
  padding-bottom: 20px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  /* or 150% */

  color: #191919;
`;

const PlaceInfoBox = styled.div`
  justify-content: space-between;
  display: flex;
  border-top: 1px solid #191919;
  border-bottom: 1px solid #191919;
  margin-bottom: 23px;
`;

const PlaceContainer = styled.div``;

const CategoryContainer = styled.div`
  display: flex;
`;

const CategoryName = styled.div`
  margin-top: 14px;
  margin-left: 5px;
  line-height: 20px;
  text-align: center;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  color: #878787;

  width: 33px;
  height: 20px;
  background: #ededed;
`;
const ButtonContainer = styled.div`
  border-left: 1px solid #191919;
  width: 74px;
  padding: 14px 0 0 19px;
`;

const PlaceName = styled.div`
  margin-top: 12px;
  padding-left: 3px;
  padding-bottom: 4px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  /* identical to box height */

  color: #191919;
`;
const PlaceAddress = styled.div`
  margin-bottom: 12px;
  padding-left: 3px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;

  color: #6f6a69;
`;
const SelectedButton = styled.button`
  width: 36px;
  height: 36px;
`;
