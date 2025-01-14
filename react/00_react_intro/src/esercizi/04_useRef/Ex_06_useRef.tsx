import React, { useRef, useState } from 'react';

const DraggableItem = () => {
  const itemRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("text/plain", itemRef.current?.id || ""); // Imposta l'ID dell'elemento da trascinare
    setIsDragging(true); // Segna che il drag è in corso
  };

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    const newX = e.clientX; // Ottieni la posizione X del mouse
    const newY = e.clientY; // Ottieni la posizione Y del mouse
    setPosition({ x: newX, y: newY }); // Aggiorna la posizione
    setIsDragging(false); // Termina il drag
  };

  return (
    <div
      id="draggable"
      ref={itemRef}
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      style={{
        position: 'absolute', // Posiziona l'elemento in modo assoluto
        left: position.x,
        top: position.y,
        width: '100px',
        height: '100px',
        background: 'lightblue',
        cursor: 'grab',
        userSelect: 'none', // Disabilita la selezione del testo
        transition: isDragging ? 'none' : 'left 0.2s ease, top 0.2s ease', // Disabilita la transizione durante il drag
      }}
    >
      Trascinami
    </div>
  );
};

export default DraggableItem;
