import { useState } from "react";

// Componente genitore: Sondaggio
interface Answer {
  questionId: number;
  response: string;
}
const Survey = () => {
  const [answers, setAnswers] = useState<Answer[]>([]);
  const handleAnswer = (answer: Answer) => {
    setAnswers((prevAnswers) => {
      const existingAnswer = prevAnswers.find(a => a.questionId === answer.questionId);
      if (existingAnswer) {
        // Aggiorna la risposta se la domanda è già stata risolta
        return prevAnswers.map(a =>
          a.questionId === answer.questionId ? answer : a
        );
      } else {
        // Aggiunge una nuova risposta
        return [...prevAnswers, answer];
      }
    });
  };
  return (
    <div>
      <h1>Survey</h1>
      <Question questionId={1} questionText="How satisfied are you with our service?" handleAnswer={handleAnswer} />
      <Question questionId={2} questionText="Would you recommend us to others?" handleAnswer={handleAnswer} />
      <div>
        <h2>Your Answers:</h2>
        <ul>
          {answers.map((answer) => (
            <li key={answer.questionId}>
              Question {answer.questionId}: {answer.response}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Componente figlio: Domanda
interface IQuestionProps {
  questionId: number;
  questionText: string;
  handleAnswer: (answer: Answer) => void;
}

const Question = ({ questionId, questionText, handleAnswer }: IQuestionProps) => {
  const [response, setResponse] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setResponse(e.target.value);
  };

  const submitAnswer = () => {
    handleAnswer({ questionId, response }); // Invia la risposta al genitore
  };

  return (
    <div>
      <p>{questionText}</p>
      <input type="text" value={response} onChange={handleChange} placeholder="Type your answer here" />
      <button onClick={submitAnswer}>Submit Answer</button>
    </div>
  );
};

export default Survey;