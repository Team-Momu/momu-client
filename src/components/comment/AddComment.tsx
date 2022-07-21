import { RootState, useAppDispatch, useAppSelector } from 'store/store';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import { getPlaceDatasThunk } from '@slices/comment/addCommentSlice';

const AddComment = () => {
  const placeDatas = useAppSelector((state: RootState) => state.comments.data);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [whereToGo, setWhereToGo] = useState('');
  const [keyword, setWhere] = useState('');

  const postId = router.query.id;
  console.log(postId);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const {
      target: { value },
    } = e;
    setWhereToGo(value);
  };

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
        <ImgUploadButton></ImgUploadButton>
      </InnerContainer>
      <InnerContainer>
        <GuideText>큐레이션 작성</GuideText>
        <CommentTextInput
          placeholder="자세하게 적어줄 수록 채택확률이 높아요! &#10;(최대 38자)"
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
          <div>I am a modal</div>
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

const CommentTextInput = styled.textarea`
  width: 343px;
  height: 80px;
  border: 1px solid #191919;
  resize: none;
  &:placeholder-shown {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 30px;
    /* identical to box height, or 143% */

    color: #767676;
  }
`;
