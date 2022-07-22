import { useState } from 'react';
const useCheckLength = () => {
  const [additionalComment, setAdditionalComment] = useState('');

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
      alert(`최대 ${maxLength}자까지 입력이 가능합니다.`);
      setAdditionalComment(value.substr(0, 35));
    } else {
      setAdditionalComment(value);
    }
  };

  return { additionalComment, handleInputLength };
};

export default useCheckLength;
