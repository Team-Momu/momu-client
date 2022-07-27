import { FC, useCallback, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { DivisionLine } from 'styles/commentstyle/CommentStyle';
import { RootState, useAppDispatch, useAppSelector } from 'store/store';
import {
  postSelectedStateThunk,
  deleteSelectedStateThunk,
} from '@slices/select/selectSlice';

interface Props {
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
  const me = useAppSelector((state: RootState) => state.user.me);

  const onClick = useCallback(() => {
    selectedState && me ? setSelectedState(false) : setSelectedState(true);
    selectedState && me
      ? dispatch(deleteSelectedStateThunk({ postId, commentId }))
      : dispatch(postSelectedStateThunk({ postId, commentId }));
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
                {/* src writerProfile로 바꿔야함. */}
                {writerProfile === null ? (
                  <Image
                    src={'/img/defaultProfile.png'}
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
              <LineImg src={'/img/Line.png'} />
              <UserMbti>{writerMbti}</UserMbti>
            </UserContainer>
            <WrittenDate>{createAt}</WrittenDate>
          </UserInfo>
          <DescriptionText>{description}</DescriptionText>
          <PlaceInfoBox>
            <PlaceContainer>
              <PlaceName>{placeName}</PlaceName>
              <PlaceAddress>{placeAddress}</PlaceAddress>
            </PlaceContainer>
            <ButtonContainer>
              <SelectedButton onClick={onClick}>
                {selectedState && me ? (
                  <img src={'/img/select/SelectedButton.svg'} />
                ) : (
                  <img src={'/img/select/unSelectedButton.svg'} />
                )}
                {selectedState && !me ? (
                  <img src={'/img/select/OtherUserSelectedButton.svg'} />
                ) : (
                  <></>
                )}
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

const LineImg = styled.img`
  padding: 2px 8px 0 8px;
  height: 15px;
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
