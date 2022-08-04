import { RootState, useAppDispatch, useAppSelector } from 'store/store';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
// import Modal from 'react-modal';
import Modal from '@common/Modal';
import styled from 'styled-components';
import {
  getPlaceDatasThunk,
  getPlaceSlice,
} from '@slices/comment/getPlaceSlice';
import PlaceLists from './PlaceLists';
import useCheckLength from 'utils/hooks/useCheckLength';
import {
  BackButton,
  BackIcon,
  HeaderContainer,
  HeaderLeftSide,
  Line,
} from 'styles/headerstyle/HeaderCommonStyle';
import axios from 'axios';
import { tryParsePattern } from 'next/dist/build/webpack/plugins/jsconfig-paths-plugin';
import useImage from '../../utils/hooks/useImage';
import Image from 'next/image';
import { resetPlaceData } from '@slices/comment/PlaceChoiceSlice';
import { addCommentThunk } from '@slices/comment/addCommentSlice';
import { modalSlice } from '@slices/Modal/modalSlice';
import ResetInputButton from '@public/img/search/ResetInput.png';
import { toast } from 'react-toastify';

const AddComment = () => {
  const { description, handleInputLength } = useCheckLength();
  const router = useRouter();
  const nullText = '';

  //input에서 placeName보여주기
  const placeName = useAppSelector(
    (state: RootState) => state.placechoice.place.place_name
  );
  const place_id = useAppSelector(
    (state: RootState) => state.placechoice.place.id
  );
  const searchModalState = useAppSelector(
    (state: RootState) => state.modal.searchModal
  );

  const [text, setText] = useState('');
  useEffect(() => {
    setText(placeName);
  }, [placeName]);

  const placeDatas = useAppSelector((state: RootState) => state.comments.data);
  const dispatch = useAppDispatch();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [whereToGo, setWhereToGo] = useState('');
  const [where, setWhere] = useState('');
  const {
    imagePath,
    createObjectURL,
    handleImagePath,
    setImagePath,
    setCreateObjectURL,
  } = useImage();

  const post = router.query.id;
  const postId = parseInt(post as string);

  //모든 데이터 입력 후에 완료 버튼 누르면 formData 전송.
  const onSubmit = async (e: React.SyntheticEvent) => {
    if (placeName === '') {
      toast('식당을 선택해주세요!', {
        position: 'top-center',
        autoClose: 2500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      router.push(`/feed/${postId}`);
      e.preventDefault();

      const formData = new FormData();
      formData.append('place_id', place_id);
      formData.append('place_img', imagePath);
      formData.append('description', description);

      dispatch(addCommentThunk({ formData, postId }));
    }

    dispatch(resetPlaceData({ nullText }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const {
      target: { value },
    } = e;
    setText(value);
    setWhereToGo(value);
  };

  const toggleSearchModal = () => {
    dispatch(modalSlice.actions.searchModalToggle());
  };

  const onSubmitPlace = useCallback(
    (e: React.SyntheticEvent) => {
      e.preventDefault();
      setWhereToGo('');
      setWhere(whereToGo);
      dispatch(modalSlice.actions.searchModalToggle());
    },
    [whereToGo]
  );

  useEffect(() => {
    if (where !== '') {
      dispatch(getPlaceSlice.actions.setKeyword(where));
      dispatch(getPlaceDatasThunk(where));
    }
  }, [where]);

  const onClickBack = () => {
    router.back();
    dispatch(resetPlaceData({ nullText }));
    setText('');
  };

  const showInputReset = () => {
    if (text) {
      return <Image src={ResetInputButton} width={24} height={24} />;
    } else {
      return <></>;
    }
  };

  const showImgReset = () => {
    if (imagePath) {
      return <Image src={ResetInputButton} width={24} height={24} />;
    } else {
      return <></>;
    }
  };

  const ResetInput = useCallback(() => {
    setText('');
    dispatch(resetPlaceData({ nullText }));
  }, []);

  const ResetImg = useCallback(() => {
    setImagePath('');
    setCreateObjectURL(null);
  }, []);

  return (
    <Wrapper>
      <>
        <HeaderContainer>
          <HeaderLeftSide>
            <BackButton onClick={onClickBack}>
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
        <ResetButton onClick={ResetInput}>{showInputReset()}</ResetButton>
      </SearchPlace>
      <InnerContainer>
        <GuideText>사진 (선택)</GuideText>
        <ImageWrapper>
          <form>
            <ImgUploadInput
              type="file"
              id="image-upload"
              hidden
              onChange={handleImagePath}
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
          <ImgResetButton onClick={ResetImg}>{showImgReset()}</ImgResetButton>
        </ImageWrapper>
      </InnerContainer>
      <InnerContainer>
        <GuideText>큐레이션 작성</GuideText>
        <CommentTextInput
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
            handleInputLength(e, 35);
          }}
          placeholder="자세하게 적어줄 수록 채택확률이 높아요!&#13;(최대 38자)"
          value={description}
          maxLength={35}
        ></CommentTextInput>
      </InnerContainer>

      {searchModalState && (
        <Modal>
          <button onClick={toggleSearchModal}>
            <ButtonContainer>
              <img src={'/img/modal/closeButton.svg'} />
            </ButtonContainer>
          </button>
          <PlaceLists
            text={text}
            closeModal={toggleSearchModal}
            placeDatas={placeDatas}
          />
        </Modal>
      )}
    </Wrapper>
  );
};
export default AddComment;
const Wrapper = styled.div`
  width: 343px;
  margin: 0;
  padding: 0;
`;
const ButtonContainer = styled.div`
  padding-left: 280px;
`;
const ImageWrapper = styled.div`
  height: 206px;
`;

const UploadedImg = styled.img`
  position: absolute;
  top: 0px;
  width: 343px;
  height: 206px;
  object-fit: cover;
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
  padding-right: 40px;
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

  //&:focus {
  //  outline: none;
  //  border: none;
  //  //border: 1px solid red;
  //}
`;

const ImgResetButton = styled.button`
  position: absolute;
  width: 24px;
  height: 24px;
  left: 335px;
  top: 262px;
  z-index: 2;
`;
const ResetButton = styled.button`
  position: absolute;
  width: 24px;
  height: 24px;
  left: 325px;
  top: 153px;
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

  &:hover {
    color: #f57a08;
  }
`;
