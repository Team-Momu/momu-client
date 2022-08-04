import { ToastContainer, toast } from 'react-toastify';
const Test = () => {
  const onClick = () => {
    toast('🦄 Wow so easy!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <>
      <div>
        <button onClick={onClick}>누르면 토스트</button>
      </div>
    </>
  );
};

export default Test;
