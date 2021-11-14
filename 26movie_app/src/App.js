import React from "react";
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component{
  state = {
    isLoading: true,
    today: "",
    week: "",
    movies: []
  };



  onChange = async (e) => {
    this.setState({isLoading: true});
    const date = e.target.value;
    const Dt = String(date).replace(/-/gi, "");
    const {
      data: { boxOfficeResult }
    } = await axios.get(`https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=52d6b26b7077c87da340d932eb3d4d85&targetDt=${Dt}`);
    boxOfficeResult.weeklyBoxOfficeList.forEach(element => {
      element.poster = `https://file.cineq.co.kr/i.aspx?movieid=${element.movieCd}&size=210`;
    });
    const week = `${boxOfficeResult.yearWeekTime.slice(0, 4)}년 ${boxOfficeResult.yearWeekTime.slice(4)}주차 `;
    this.setState({movies: boxOfficeResult.weeklyBoxOfficeList, week, isLoading: false});
  }

  getMovies = async () => {
    const date = new Date();
    const date2 = date.getTime() - (7 * 24 * 60 * 60 * 1000);
    date.setTime(date2);
    const Dt = date.getFullYear() + ("0" + (date.getMonth()+1)).slice(-2) + ("0" + date.getDate()).slice(-2);
    const {
      data: {
        boxOfficeResult: { weeklyBoxOfficeList }
      }
    } = await axios.get(`https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=52d6b26b7077c87da340d932eb3d4d85&targetDt=${Dt}`);
    weeklyBoxOfficeList.forEach(element => {
      element.poster = `https://file.cineq.co.kr/i.aspx?movieid=${element.movieCd}&size=210`;
    });
    this.setState({movies: weeklyBoxOfficeList, today: `${date.getFullYear() + "-" + ("0" + (date.getMonth()+1)).slice(-2) + "-" + ("0" + date.getDate()).slice(-2)}`,week: "지난 ", isLoading: false});
  }

  componentDidMount(){
    this.getMovies();
  }

  render(){
    const { isLoading, movies, week, today } = this.state;
    return (
      <div className="container">
        <input type="date" max={today} onChange={this.onChange} />
        <h1>{week} 주말 박스오피스 순위</h1>
        {isLoading 
          ? (
            <div className="loader">
              <span className="loader__text">Loading...</span>
            </div>
          )
          : (
            <div className="movies">
              {movies.map(movie => (
                <Movie 
                  key={movie.rank}
                  rank={movie.rank} 
                  movieNm={movie.movieNm} 
                  poster={movie.poster} 
                />
              ))}
            </div>
            
          )}
      </div>
    );
  }
}


export default App;