import './Ex_02_style.scss'
import MessageWrapper from './MessageWrapper';

interface IMessage {
  id: number;
  text: string;
  type: 'success' | 'error' | 'warning';
}

const Ex_02_props_drilling_ = () => {
  const messages: IMessage[] = [
    { id: 1, text: 'Operazione completata con successo!', type: 'success' },
    { id: 2, text: 'Si è verificato un errore!', type: 'error' },
    { id: 3, text: 'Attenzione: controlla i dati inseriti.', type: 'warning' },
  ];

  return (
    <div>
      {messages.map((msg) => (
        <MessageWrapper key={msg.id} message={msg} /> // Utilizza l'id come chiave
      ))}
    </div>
  );
};

export default Ex_02_props_drilling_;