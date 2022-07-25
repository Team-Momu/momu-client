import { RootState, useAppDispatch, useAppSelector } from 'store/store';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import { getPlaceDatasThunk } from '@slices/comment/getPlaceSlice';
import PlaceLists from './PlaceLists';
import useCheckLength from 'utils/hooks/useCheckLength';
import {
  BackButton,
  BackIcon,
  HeaderContainer,
  HeaderLeftSide,
  Line,
} from 'styles/headerstyle/HeaderCommonStyle';

const AddComment = () => {
  const { additionalComment, handleInputLength } = useCheckLength();
  const router = useRouter();
  // isSelected true이면 input 텍스트, 모달 클로즈,
  const isSelected = useAppSelector(
    (state: RootState) => state.placechoice.isSelected
  );

  //input에서 placeName보여주기
  const placeName = useAppSelector(
    (state: RootState) => state.placechoice.place.place_name
  );
  const place = useAppSelector((state: RootState) => state.placechoice.place);
  console.log(place);

  const [text, setText] = useState('');
  useEffect(() => {
    setText(placeName);
  }, [placeName]);

  const placeDatas = useAppSelector((state: RootState) => state.comments.data);
  const dispatch = useAppDispatch();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [whereToGo, setWhereToGo] = useState('');
  const [keyword, setWhere] = useState('');

  const [imagePath, setImagePath] = useState('');
  const [createObjectURL, setCreateObjectURL] = useState(null);

  //이미지 업로드를 위한 코드
  const onChangeImages = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      //@ts-ignore
      const [file] = e.target.files;
      // @ts-ignore
      setCreateObjectURL(URL.createObjectURL(file));
    },
    []
  );
  const post = router.query.id;
  const postId = parseInt(post as string);

  console.log(postId);

  //모든 데이터 입력 후에 완료 버튼 누르면 formData 전송.
  const onSubmit = () => {
    const comment = new FormData();
    comment.append('image', imagePath);
    //@ts-ignore
    comment.append('place', place);
    comment.append('additionalComment', additionalComment);

    for (const [name, value] of comment) {
      console.log(`🍓name : ${name}`);
      console.log(` 🍓value: ${value}`);
    }

    //const comment=useAppSelector((state:RootState)=>)
    //const comment = Object.assign(place:{place}, formData, additionalComment);
    //console.log(comment);

    //dispatch(addCommentThunk({ postId, comment }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const {
      target: { value },
    } = e;
    setText(value);
    setWhereToGo(value);
  };

  console.log(additionalComment);

  const onSubmitPlace = useCallback(
    (e: React.SyntheticEvent) => {
      e.preventDefault();
      setWhereToGo('');
      setWhere(whereToGo);

      setIsOpen(true);
    },
    [whereToGo]
  );

  function closeModal() {
    setIsOpen(false);
  }

  console.log(keyword);

  useEffect(() => {
    dispatch(getPlaceDatasThunk(keyword));
  }, [keyword]);

  console.log(placeDatas);

  return (
    <Wrapper>
      <>
        <HeaderContainer>
          <HeaderLeftSide>
            <BackButton onClick={() => router.back()}>
              <BackIcon src={'/img/header/backbutton.svg'} />
            </BackButton>
          </HeaderLeftSide>
          <SubmitButton onClick={onSubmit}>완료</SubmitButton>
        </HeaderContainer>
        <Line></Line>
      </>
      <SearchPlace>
        <GuideText>큐레이션 식당 검색</GuideText>
        <form onSubmit={onSubmitPlace}>
          <PlaceInput
            type="text"
            onChange={handleInputChange}
            placeholder="원하는 식당을 검색해주세요!"
            value={text}
          ></PlaceInput>
        </form>
      </SearchPlace>
      <InnerContainer>
        <GuideText>사진 (선택)</GuideText>
        <ImageWrapper>
          <form action="">
            <ImgUploadInput
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
                // position: 'absolute',
                // bottom: '5px',
                // right: '1px',
                // zIndex: '1',
              }}
            >
              <ImageUploadArea>
                <UploadedImg src={createObjectURL || undefined} />
                <PlusIcon src={'/img/upload/Upload.svg'} />
                <ButtonText>원하는 사진을 첨부해주세요!</ButtonText>
              </ImageUploadArea>
            </label>
          </form>
        </ImageWrapper>
      </InnerContainer>
      <InnerContainer>
        <GuideText>큐레이션 작성</GuideText>
        <CommentTextInput
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
            handleInputLength(e, 35);
          }}
          placeholder="자세하게 적어줄 수록 채택확률이 높아요!&#13;(최대 38자)"
          value={additionalComment}
        ></CommentTextInput>
      </InnerContainer>

      <div style={{ position: 'relative' }}>
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
              top: '72px',

              margin: 'auto',
            },
          }}
        >
          <button onClick={closeModal}>close</button>
          <PlaceLists closeModal={closeModal} placeDatas={placeDatas} />
        </Modal>
      </div>
    </Wrapper>
  );
};
export default AddComment;
const Wrapper = styled.div`
  width: 343px;
  margin: 0;
  padding: 0;
`;

const ImageWrapper = styled.div`
  height: 206px;
`;

const UploadedImg = styled.img`
  position: absolute;
  top: 0px;
  width: 343px;
  height: 206px;
`;
const ImageUploadArea = styled.div`
  padding-top: 70px;
  position: absolute;
  width: 343px;
  height: 206px;
  left: 16px;
  top: 262px;

  background: #ededed;
`;

const PlaceInput = styled.input`
  padding-left: 45px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  /* identical to box height, or 112% */

  width: 343px;
  height: 42px;
  border: 1px solid #191919;
  background-image: url('/img/search/searchIcon.svg');
  background-repeat: no-repeat;
  background-position: 17px center;
  &:placeholder-shown {
    padding-left: 45px;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    /* identical to box height, or 143% */

    color: #767676;
  }
`;

const SearchPlace = styled.div`
  padding-top: 36px;
`;
const GuideText = styled.div`
  margin-bottom: 14px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  /* identical to box height */

  color: #191919;
`;

const InnerContainer = styled.div`
  margin-top: 40px;
`;

const ImgUploadInput = styled.input``;

const PlusIcon = styled.img`
  margin: auto;
`;
const ButtonText = styled.div`
  text-align: center;
  padding-top: 16px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  color: #767676;
`;

const CommentTextInput = styled.textarea`
  padding: 16px;
  width: 343px;
  height: 80px;
  border: 1px solid #191919;
  resize: none;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  overflow: auto;
  line-height: 24px;

  /* or 150% */

  color: #191919;
  &:placeholder-shown {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 143% */

    color: #767676;
  }
`;

const SubmitButton = styled.button`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 20px;
  /* identical to box height, or 100% */

  color: #999999;
  margin-right: 24px;
`;
