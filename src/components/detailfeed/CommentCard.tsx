import React from 'react';
import { FC, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { DivisionLine } from 'styles/commentstyle/CommentStyle';
import { RootState, useAppDispatch, useAppSelector } from 'store/store';
import {
  postSelectedStateThunk,
  deleteSelectedStateThunk,
  selectSlice,
} from '@slices/select/selectSlice';
import { userInfo } from '@slices/user/userThunk';
import defaultImage from '@public/img/defaultProfile.png';
import selectedButton from '@public/img/select/SelectedButton.svg';
import unselectedButton from '@public/img/select/unSelectedButton.svg';
import otherUserSelectedButton from '@public/img/select/OtherUserSelectedButton.svg';
import line from '@public/img/Line.png';
import {
  detailCurationPostSlice,
  getCurationByIdThunk,
} from '@slices/curation/detailCurationPostSlice';
import { useSelector } from 'react-redux';
import cardProfileMask from '@public/img/mask/cardProfileMask.svg';

interface Props {
  curationSelectedFlag: boolean;
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
  sameUser: boolean | null;
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
  curationSelectedFlag,
  sameUser,
}) => {
  const [selectedState, setSelectedState] = useState(selectedFlag);
  const [result, setResult] = useState<null | boolean>(null);
  const [final, setFinal] = useState<null | boolean>(null);
  const dispatch = useAppDispatch();
  // useEffect(() => {
  //   dispatch(userInfo());
  // }, []);
  const user = useAppSelector((state: RootState) => state.user.me.data?.id);
  const selectedCommentId = useSelector(
    (state: RootState) => state.select.selectedCommentId
  );
  // 질문 글을 쓴 유저 아이디
  const questionUserId = useAppSelector(
    (state: RootState) => state.detailCuration.data.user.id
  );
  const postError = useAppSelector(
    (state: RootState) => state.select.postError
  );
  const deleteError = useAppSelector(
    (state: RootState) => state.select.deleteError
  );

  // const testFlag = useAppSelector((state:RootState)=>state.)

  const onClick = () => {
    if (user != questionUserId) {
      return alert('큐레이션 작성자만 가능합니다.');
    }
    if (!curationSelectedFlag) {
      const ask = confirm('이 게시물을 채택하시겠습니까?');
      if (ask) {
        setSelectedState(true);
        dispatch(selectSlice.actions.setSelectedCommentId(commentId));
        dispatch(detailCurationPostSlice.actions.setCurationDone(true));
        dispatch(postSelectedStateThunk({ postId, commentId }));
      }
    } else {
      const ask = confirm('채택을 취소하시겠습니까?');
      if (ask) {
        setSelectedState(false);
        dispatch(detailCurationPostSlice.actions.setCurationDone(false));
        dispatch(deleteSelectedStateThunk({ postId, commentId }));
      }
    }
  };

  // useEffect(() => {
  //   if (commentId === selectedCommentId) {
  //     setResult(true);
  //   }
  // }, [selectedCommentId]);

  function TestFunction() {
    if (commentId === selectedCommentId) {
      return (
        <SelectedButton onClick={onClick}>
          <OtherUserSelcted>
            <Image src={otherUserSelectedButton} />
          </OtherUserSelcted>
        </SelectedButton>
      );
    }
    if (selectedFlag) {
      // 새로고침하면 얘로 시작
      return (
        <SelectedButton onClick={onClick}>
          <OtherUserSelcted>
            <Image src={otherUserSelectedButton} />
          </OtherUserSelcted>
        </SelectedButton>
      );
    }
  }

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
                <Mask>
                  <Image src={cardProfileMask} width={28} height={28} />
                </Mask>
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
              {curationSelectedFlag
                ? TestFunction()
                : user == questionUserId &&
                  questionUserId != userId && (
                    <SelectedButton onClick={onClick}>
                      <Image src={unselectedButton} />
                    </SelectedButton>
                  )}
            </ButtonContainer>
          </PlaceInfoBox>
        </BottomContainer>
        <DivisionLine></DivisionLine>
      </Wrapper>
    </>
  );
};

// selectedFlag && (
//   <SelectedButton onClick={onClick}>
//     <OtherUserSelcted>
//       <Image src={otherUserSelectedButton} />
//     </OtherUserSelcted>
//   </SelectedButton>
// )

export default CommentCard;

const Wrapper = styled.div``;
const PlaceImgContainer = styled.div`
  margin-top: 23px;
`;
const BottomContainer = styled.div``;

const UserContainer = styled.div`
  display: flex;
`;
const UserInfo = styled.div`
  position: relative;
  margin: 12px 0;
  display: flex;
  justify-content: space-between;
`;

const Mask = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  width: 28px;
  height: 28px;
  z-index: 1;
`;
const ProfileImgContainer = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 14px;
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
  padding: 0 6px;
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
  max-width: 215px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
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

const OtherUserSelcted = styled.div`
  margin-top: 3px;
`;
function componentDidMount() {
  throw new Error('Function not implemented.');
}
