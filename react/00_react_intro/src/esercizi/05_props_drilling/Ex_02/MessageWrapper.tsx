import Message from "./Message";

interface IMessage {
  id: number;
  text: string;
  type: 'success' | 'error' | 'warning';
}

interface IMessageWrapper {
  message: IMessage;
}

//Componente padre
const MessageWrapper = (props: IMessageWrapper) => {
  const { message } = props;
  return (
    <div>
      <Message text={message.text} type={message.type} />
    </div>
  );
};

export default MessageWrapper;