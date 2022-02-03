
import './App.css';
import DesignerList from './DesignerList';
import CarList from './CarList';
import MovieList from './MovieList';
import TeamsList from './TeamsList';
import { useFetch } from './useFetch';


function App() {

  const {
    isDesignersLoading,
    cardDesigners,
    isCarsLoading,
    cars,
    isMoviesLoading,
    movies,
    isTeamsLoading,
    sportsTeams
  } = useFetch();

  return (
    <div className="App">
      { isDesignersLoading ? <h2>LOADING</h2> : <DesignerList cardDesigners={cardDesigners}/>}

      { isCarsLoading ? <h2>LOADING</h2> : <CarList cars={cars} />}

      { isMoviesLoading ? <h2>LOADING</h2> : <MovieList movies={movies} />}

      { isTeamsLoading ? <h2>LOADING</h2> : <TeamsList sportsTeams={sportsTeams} />}
    </div>
  );
}

export default App;
