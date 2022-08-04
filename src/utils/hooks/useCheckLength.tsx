import { useState } from 'react';
import { toast } from 'react-toastify';
const useCheckLength = () => {
  const [description, setAdditionalComment] = useState('');

  const handleInputLength = (
    e:
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLInputElement>,
    maxLength: number
  ): void => {
    const {
      target: { value },
    } = e;

    if (value.length > maxLength) {
      toast(`최대 ${maxLength}자까지 입력이 가능합니다.`, {
        position: 'top-center',
        autoClose: 2500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      setAdditionalComment(value.substr(0, maxLength - 1));
    } else {
      setAdditionalComment(value);
    }
  };

  return { description, handleInputLength };
};

export default useCheckLength;
