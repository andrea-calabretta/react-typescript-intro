import { useEffect, useRef, useState } from 'react';
import axios from 'axios';

const Ex_05_useRef = () => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [catImage, setCatImage] = useState<string | null>(null);

  // Funzione per ottenere un'immagine di un gatto dall'API
  const fetchCatImage = async () => {
    try {
      const response = await axios.get('https://api.thecatapi.com/v1/images/search');
      setCatImage(response.data[0].url); // Imposta l'URL dell'immagine
    } catch (error) {
      console.error("Errore nel recupero dell'immagine del gatto:", error);
    }
  };

  useEffect(() => {
    fetchCatImage(); // Ottieni l'immagine di un gatto al caricamento del componente
  }, []);

  const handleMouseEnter = () => {
    if (imgRef.current) {
      imgRef.current.style.transform = "scale(1.5)";
      imgRef.current.style.transition = "transform 0.5s";
    }
  };

  const handleMouseLeave = () => {
    if (imgRef.current) {
      imgRef.current.style.transform = "scale(1)";
    }
  };

  return (
    <div>
      {catImage ? (
        <img
          ref={imgRef}
          src={catImage}
          alt="Gatto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ width: '300px', height: '200px', cursor: 'pointer' }}
        />
      ) : (
        <p>Caricamento dell'immagine...</p>
      )}
    </div>
  );
};

export default Ex_05_useRef;
