import React from "react";
import axios from "axios";
import Movie from "../Component/Movie/Movie";



class Moviepage extends React.Component {
  state= {
    isLoading:true,
    movies: []
  };
  getMovies = async () => {
     const {data:{data:{movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");//api 데이터 가져옴
     /*axios는 작은 layer axios가 느리기 때문에 async를 씀*/
     this.setState({movies, isLoading: false });
  }
  componentDidMount(){  // render 하면 호출되는 life cycle method
    this.getMovies();

  }
  render() {
    const {isLoading, movies} = this.state;    
    return ( 
    <section className="container">
      {isLoading ? (
      <div className="loader">
        <span className="loader_text">Loading...</span>
    </div>):(
      <div className="movies">
        {movies&& movies.map(movie => (
           <Movie
            key={movie.id}
            id={movie.id}
            year={movie.year}
            title={movie.title}
            summary={movie.summary}
            poster={movie.medium_cover_image}
            genres={movie.genres}
            />
        ))}
      </div>
    )}
    </section>
    );
  }
}

export default Moviepage;
