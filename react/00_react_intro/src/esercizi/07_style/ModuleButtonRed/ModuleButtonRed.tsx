import './ButtonRed.module.scss';

interface IButton {
  label: string;
  onClickFn: () => void;
}

const ModuleButtonRed = (props: IButton) => {
  const { label, onClickFn } = props;

  return (
    <button className="button" onClick={onClickFn}>
      {label}
    </button>
  );
};

export default ModuleButtonRed;
