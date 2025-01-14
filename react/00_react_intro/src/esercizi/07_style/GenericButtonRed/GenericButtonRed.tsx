import './GenericButtonRed.scss';

interface IButton {
  label: string;
  onClickFn: () => void;
}

const ButtonRed = (props: IButton) => {
  const { label, onClickFn } = props;

  return (
    <button className="button" onClick={onClickFn}>
      {label}
    </button>
  );
};

export default ButtonRed;
