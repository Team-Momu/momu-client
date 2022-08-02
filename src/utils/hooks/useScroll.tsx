import { useState } from 'react';

const useScroll = () => {
  const [hasNext, setHasNext] = useState(false);
  const [percent, setPercent] = useState(0);

  const onScroll = (e: any) => {
    const a = e.target.scrollTop;
    const b = e.target.scrollHeight - e.target.clientHeight;
    const percent = Math.round((a / b) * 100);
    // console.log('🔥🔥🔥🔥', percent);
    if (percent === 100) {
      setHasNext(true);
      setPercent(percent);
    } else {
      setHasNext(false);
    }
  };

  return { hasNext, percent, onScroll };
};

export default useScroll;
