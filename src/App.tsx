import confetti from 'canvas-confetti';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
  }, []);

  return <h1>Hello World!!</h1>;
}

export default App;
