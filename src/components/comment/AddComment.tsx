import { RootState, useAppDispatch, useAppSelector } from 'store/store';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import { getPlaceDatasThunk } from '@slices/comment/addCommentSlice';
import PlaceLists from './PlaceLists';

const AddComment = () => {
  const placeDatas = useAppSelector((state: RootState) => state.comments.data);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [whereToGo, setWhereToGo] = useState('');
  const [keyword, setWhere] = useState('');
  const [additionalComment, setAdditionalComment] = useState('');

  // isSelected true이면 input 텍스트, 모달 클로즈,
  const isSelected = useAppSelector(
    (state: RootState) => state.placechoice.isSelected
  );

  //input에서 placeName보여주기
  const placeName = useAppSelector(
    (state: RootState) => state.placechoice.place.place_name
  );

  const postId = router.query.id;
  console.log(postId);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const {
      target: { value },
    } = e;
    setWhereToGo(value);
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const {
      target: { value },
    } = e;
    console.log(value);
    if (value.length > 35) {
      alert('최대 35자까지 입력이 가능합니다.');
      setAdditionalComment(value.substr(0, 35));
    } else {
      setAdditionalComment(value);
    }
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

  //   useEffect(() => {
  //     setSelected(isSelected);
  //     setIsOpen(false);
  //   }, [selected]);

  console.log(modalIsOpen);
  console.log(keyword);
  useEffect(() => {
    dispatch(getPlaceDatasThunk(keyword));
  }, [keyword]);

  console.log(placeDatas);

  return (
    <Wrapper>
      <SearchPlace>
        <GuideText>큐레이션 식당 검색</GuideText>
        <form onSubmit={onSubmitPlace}>
          <PlaceInput
            type="text"
            onChange={handleInputChange}
            placeholder="원하는 식당을 검색해주세요!"
          ></PlaceInput>
        </form>
      </SearchPlace>
      <InnerContainer>
        <GuideText>사진 (선택)</GuideText>
        <ImgUploadButton>
          <PlusIcon src={'/img/upload/Upload.svg'} />
          <ButtonText>원하는 사진을 첨부해주세요!</ButtonText>
        </ImgUploadButton>
      </InnerContainer>

      <InnerContainer>
        <GuideText>큐레이션 작성</GuideText>
        <CommentTextInput
          onChange={handleTextareaChange}
          placeholder="자세하게 적어줄 수록 채택확률이 높아요!&#13;(최대 38자)"
        >
          {additionalComment}
        </CommentTextInput>
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
          <PlaceLists placeDatas={placeDatas} />
        </Modal>
      </div>
    </Wrapper>
  );
};
export default AddComment;
const Wrapper = styled.div`
  width: 375px;
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

const ImgUploadButton = styled.button`
  width: 343px;
  height: 206px;
  background: #ededed;
`;

const PlusIcon = styled.img`
  margin: auto;
`;
const ButtonText = styled.div`
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
