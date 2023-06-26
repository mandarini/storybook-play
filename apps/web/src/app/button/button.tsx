import React, { useState } from 'react';

function Button() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return <button onClick={handleClick}>You've clicked me {count} times</button>;
}

export default Button;
