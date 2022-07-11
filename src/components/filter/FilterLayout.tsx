interface DismissProps {
  onDismiss: () => void;
}

const FilterLayout = ({ onDismiss }: DismissProps) => {
  return (
    <>
      <div>필터 레이아웃 구현</div>
      <button onClick={onDismiss}>완료버튼</button>
    </>
  );
};

export default FilterLayout;
