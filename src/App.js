
import './App.css';
import { useState, useEffect } from 'react';
import { getCardDesigners } from './services/fetch-utils.js';
import userEvent from '@testing-library/user-event';

function App() {
  const [cardDesigners, setCardDesigners] = useState([]);
  const [isDesignersLoading, setIsDesignersLoading] = useState(false);
  
  console.log('||', cardDesigners);

  async function fetchDesignersData() {
    setIsDesignersLoading(true);
    
    const data = await getCardDesigners();

    setIsDesignersLoading(false);
    setCardDesigners(data);
  }

  useEffect(() => {
    fetchDesignersData();
  }, []);

  
  return (
    <div className="App">
      <h1>LOREM IPSUM</h1>
    </div>
  );
}

export default App;
