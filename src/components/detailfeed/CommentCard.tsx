import { FC } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

interface Props {
  selectedFlag: boolean;
  placeImg: string;
  writerName: string;
  writerProfile: string;
  writerMbti: string;
  description: string;
  placeName: string;
  placeAddress: string;
  placeCategory: string;
}

const CommentCard: FC<Props> = ({
  selectedFlag,
  placeImg,
  writerName,
  writerProfile,
  writerMbti,
  description,
  placeName,
  placeAddress,
  placeCategory,
}) => {
  return (
    <Wrapper>
      <PlaceImgContainer>
        {/* src placeImg로 변경 필요 */}
        {placeImg === null ? (
          <></>
        ) : (
          <Image
            src={'/img/TestImg.jpg'}
            width={'343'}
            height={'206'}
            objectFit="cover"
          />
        )}
      </PlaceImgContainer>
      <BottomContainer>
        <UserInfo>
          <ProfileImgContainer>
            {/* src writerProfile로 변경 필요 */}
            <Image
              src={'/img/ProfileTest.png'}
              width={'28'}
              height={'28'}
              objectFit="cover"
            />
          </ProfileImgContainer>
          <UserNickName>{writerName}</UserNickName>
          <UserMbti>ENFJ</UserMbti>
          <WrittenDate>2021.07.27</WrittenDate>
        </UserInfo>
        <DescriptionText>{description}</DescriptionText>
        <>
          <PlaceContainer>
            <PlaceName>{placeName}</PlaceName>
            <PlaceAddress>{placeAddress}</PlaceAddress>
          </PlaceContainer>
          <SelectedButton></SelectedButton>
        </>
      </BottomContainer>
    </Wrapper>
  );
};

export default CommentCard;

const Wrapper = styled.div``;
const PlaceImgContainer = styled.div``;
const BottomContainer = styled.div``;

const UserInfo = styled.div`
  height: 52px;
  display: flex;
`;
const ProfileImgContainer = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
`;
const UserNickName = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  color: #191919;
`;
const UserMbti = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  color: #2260d8;
`;
const WrittenDate = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 17px;

  color: #a09a9a;
`;

const DescriptionText = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  /* or 150% */

  color: #191919;
`;

const PlaceContainer = styled.div``;
const PlaceName = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  /* identical to box height */

  color: #191919;
`;
const PlaceAddress = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;

  color: #6f6a69;
`;
const SelectedButton = styled.button``;
