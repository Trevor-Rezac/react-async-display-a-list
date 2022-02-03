
import './App.css';
import { useState, useEffect } from 'react';
import { getCardDesigners, getCars } from './services/fetch-utils.js';
import DesignerList from './DesignerList';
import CarList from './CarList';


function App() {
  const [cardDesigners, setCardDesigners] = useState([]);
  const [isDesignersLoading, setIsDesignersLoading] = useState(false);
  const [cars, setCars] = useState([]);
  const [isCarsLoading, setIsCarsLoading] = useState(false);
  
  console.log('||', cardDesigners, cars);

  async function fetchDesignersData() {
    setIsDesignersLoading(true);
    
    const data = await getCardDesigners();

    setIsDesignersLoading(false);
    setCardDesigners(data);
  }

  async function fetchCarData() {
    setIsCarsLoading(true);

    const data = await getCars();

    setIsCarsLoading(false);
    setCars(data);
  }

  useEffect(() => {
    fetchDesignersData();
    fetchCarData();
  }, []);


  return (
    <div className="App">
      {
        isDesignersLoading ? <h2>LOADING</h2> : <DesignerList cardDesigners={cardDesigners}/>
      }

      { isCarsLoading ? <h2>LOADING</h2> : <CarList cars={cars} />}
    </div>
  );
}

export default App;
