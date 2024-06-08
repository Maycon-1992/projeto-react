import React, { useState, useEffect } from 'react';

function TypingSign() {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const delay = 100; // Ajuste o atraso conforme desejado

  const textToType = 'Conheça a Fatec';

  useEffect(() => {
    const interval = setInterval(() => {
      setText(textToType.substring(0, index));
      setIndex((prevIndex) => (prevIndex + 1) % (textToType.length + 1));
    }, delay);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <>
      <h1>{text}</h1>

    </>
  );
}

export default TypingSign;
