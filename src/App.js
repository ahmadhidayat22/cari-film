
import './App.css';
import { getMovieList, searchMovie } from "./api"
import { useEffect , useState} from "react";
import Youtube from "react-youtube";

const App = () => {
  const [popularMovies, setPopularMovies] = useState([])


  useEffect(() => {
    getMovieList().then((result)=> {
      setPopularMovies(result)

    })
  }, [])
  
  const PopularMoviesList = () => {
    return popularMovies.map((movie,i )=> {
      return(
        <div className="Movie-wrapper" key= {i} onClick={() => {lihat(movie.title)}} >
              <img className="Movie-image" src = {`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}/>
              <div className="Movie-title">{movie.title}</div>
              {/* <div className="Movie-date">Release: {movie.release_date}</div>
              <div className="Movie-rating">⭐{movie.vote_average}</div> */}
              {/* <button onClick={}>Play Trailer</button> */}
          </div>
       
       )
    })
  }
  const search = async(q)=> {
    if (q.length > 3){
      const query =await searchMovie(q)
      // console.log({query : query})
      setPopularMovies(query.results)
    }
   
  }
  
  const lihat = (q)=>{
    console.log({filmApa: q})
  }
  return (
    <div className="App">
      <header className="App-header">
        <navbar>
        <h1>Cari Film Kuyy</h1>
        

        {/* <Youtube 
          videoId='
          385687'
          
        
        /> */}

       
        <input 
          placeholder="Cari Film...." 
          className="Movie-search" 
          onChange={({target}) => 
          search (target.value)} 
        />

        </navbar>

        <div className="movie-container">
          <PopularMoviesList />
        
          
        </div>

      </header>
    </div>
  );
}


export default App;
