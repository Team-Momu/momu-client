import { useRouter } from 'next/router';
import styled from 'styled-components';
import Modal from 'react-modal';
import { useCallback, useEffect, useState } from 'react';
import { getPlaceDatasThunk } from '@slices/comment/addCommentSlice';
import useInput from 'utils/hooks/useInput';
import { RootState, useAppDispatch, useAppSelector } from 'store/store';

const WriteComment = () => {
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
    },
    [whereToGo]
  );

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  console.log(keyword);
  useEffect(() => {
    dispatch(getPlaceDatasThunk(keyword));
  }, [keyword]);

  console.log(placeDatas);
  return (
    <>
      <h1>답변</h1>
      <form onSubmit={onSubmitPlace}>
        <PlaceInput
          type="text"
          onChange={handleInputChange}
          placeholder="식당검색. . ."
        ></PlaceInput>
      </form>
      <button onClick={openModal}>식당검색</button>

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
    </>
  );
};

export default WriteComment;

const PlaceInput = styled.input`
  width: 200px;
  height: 42px;
  border: 1px solid #191919;
`;
