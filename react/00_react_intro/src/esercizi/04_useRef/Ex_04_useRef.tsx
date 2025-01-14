import React, { useRef } from 'react';


const Ex_04_useRef = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const name = nameRef.current?.value;
    const email = emailRef.current?.value;

    if (!name || !email) {
      alert("Tutti i campi sono obbligatori!");
      return;
    }

    console.log(`Nome: ${name}, Email: ${email}`);
    // Qui puoi gestire l'invio del modulo
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={nameRef} type="text" placeholder="Nome" />
      <input ref={emailRef} type="email" placeholder="Email" />
      <button type="submit">Invia</button>
    </form>
  );
};

export default Ex_04_useRef;