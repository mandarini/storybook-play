import React, { useState } from 'react';

export function Button() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-redundant-roles
    <button role="button" onClick={handleClick}>
      You've clicked me {count} times
    </button>
  );
}

export default Button;
