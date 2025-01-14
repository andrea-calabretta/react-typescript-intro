import './GenericButton.scss';

interface IButton {
  label: string;
  onClickFn: () => void;
}

const Button = (props: IButton) => {
  const { label, onClickFn } = props;

  return (
    <button className="button" onClick={onClickFn}>
      {label}
    </button>
  );
};

export default Button;
