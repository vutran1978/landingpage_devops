import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('https://your-backend.onrender.com/api/message')
      .then(res => res.json())
      .then(data => setMessage(data.text));
  }, []);

  return (
    <div className="App">
      <h1>Landing Page</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
