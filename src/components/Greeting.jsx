import { useState } from "preact/hooks";

export const Greeting = ({ messages }) => {
  const [randomIndex, setRandomIndex] = useState(0);

  const handleChangGreeting = () => {
    if (messages.length <= 1) return;

    // No duplicate!
    let currentIndex = randomIndex;
    let newIndex = randomIndex;

    while (newIndex === currentIndex) {
      newIndex = Math.floor(Math.random() * messages.length);
    }

    setRandomIndex(newIndex);
  };

  const message = messages?.[randomIndex] || "Oh crap!";

  return (
    <div>
      <h3>{message}! Thank you for visiting my blog!</h3>
      <button onClick={handleChangGreeting}>New greet!</button>
    </div>
  );
};
