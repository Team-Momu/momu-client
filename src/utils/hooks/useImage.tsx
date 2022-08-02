import { useState } from 'react';

const useImage = () => {
  const [imagePath, setImagePath] = useState<Blob | string>('');
  const [createObjectURL, setCreateObjectURL] = useState<string | null>(null);

  const handleImagePath = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      // 값이 존재하면 백엔드로 보낼 데이터 업데이트
      setImagePath(e.target.files[0]);

      // Image src 에 들어갈 값 업데이트
      const [file] = e.target.files;
      if (file) {
        setCreateObjectURL(URL.createObjectURL(file));
      } else {
        setCreateObjectURL(null);
      }
    }
  };

  return {
    imagePath,
    createObjectURL,
    handleImagePath,
    setImagePath,
    setCreateObjectURL,
  };
};

export default useImage;
