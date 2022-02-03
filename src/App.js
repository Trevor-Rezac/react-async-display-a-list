
import './App.css';
import { useState, useEffect } from 'react';
import { getCardDesigners, getCars, getMovies, getSportsTeams } from './services/fetch-utils.js';
import DesignerList from './DesignerList';
import CarList from './CarList';
import MovieList from './MovieList';


function App() {
  const [cardDesigners, setCardDesigners] = useState([]);
  const [isDesignersLoading, setIsDesignersLoading] = useState(false);
  const [cars, setCars] = useState([]);
  const [isCarsLoading, setIsCarsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [isMoviesLoading, setIsMoviesLoading] = useState(false);
  const [sportsTeams, setSportsTeams] = useState([]);
  const [isTeamsLoading, setIsTeamsLoading] = useState(false);

  
  console.log('||', sportsTeams);

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

  async function fetchMovieData() {
    setIsMoviesLoading(true);

    const data = await getMovies();

    setIsMoviesLoading(false);
    setMovies(data);
  }

  async function fetchTeamData() {
    setIsTeamsLoading(true);

    const data = await getSportsTeams();

    setIsTeamsLoading(false);
    setSportsTeams(data);
  }

  useEffect(() => {
    fetchDesignersData();
    fetchCarData();
    fetchMovieData();
    fetchTeamData();
  }, []);


  return (
    <div className="App">
      {
        isDesignersLoading ? <h2>LOADING</h2> : <DesignerList cardDesigners={cardDesigners}/>
      }

      { isCarsLoading ? <h2>LOADING</h2> : <CarList cars={cars} />}

      { isMoviesLoading ? <h2>LOADING</h2> : <MovieList movies={movies} />}
    </div>
  );
}

export default App;
