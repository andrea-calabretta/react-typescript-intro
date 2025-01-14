import { useRef, useEffect } from 'react';

const Ex_01_useRef = () => {

    const inputRef = useRef<HTMLInputElement>(null);
  
    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.focus(); // Mette il focus sul campo input al montaggio
      }
    }, []);
  
    return (
      <div>
        <input ref={inputRef} placeholder="Focus automatico" />
      </div>
    );
  };


export default Ex_01_useRef



