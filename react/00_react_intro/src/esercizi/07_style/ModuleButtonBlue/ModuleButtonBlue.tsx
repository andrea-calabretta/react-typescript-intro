import s from './ButtonBlue.module.scss';

interface IButton {
  label: string;
  onClickFn: () => void;
}

const ModuleButtonBlue = (props: IButton) => {
  const { label, onClickFn } = props;

  return (
    <button className={s.button} onClick={onClickFn}>
      {label}
    </button>
  );
};

export default ModuleButtonBlue;
