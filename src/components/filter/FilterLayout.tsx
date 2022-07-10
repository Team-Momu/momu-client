interface DismissProps {
  onDismiss: () => void;
}

const FilterLayout = ({ onDismiss }: DismissProps) => {
  return (
    <>
      <div>hi</div>
      <button onClick={onDismiss}>Dismiss</button>
    </>
  );
};

export default FilterLayout;
