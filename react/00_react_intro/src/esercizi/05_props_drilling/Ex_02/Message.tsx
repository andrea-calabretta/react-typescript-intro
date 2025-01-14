interface IMessageProps {
  text: string;
  type: 'success' | 'error' | 'warning';
}

//Componente figlio
const Message = (props: IMessageProps) => {
  const { text, type } = props;
  const getClassName = () => {
    switch (type) {
      case 'success':
        return 'message-success';
      case 'error':
        return 'message-error';
      case 'warning':
        return 'message-warning';
      default:
        return '';
    }
  };

  return <div className={getClassName()}>{text}</div>;
};

export default Message;