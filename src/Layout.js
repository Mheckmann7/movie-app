import { useEffect, useState } from 'react';

import styled from 'styled-components';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import IndexPage from './pages/IndexPage';
import DetailPage from './pages/DetailPage';

import { fetchMovies, addFavorite } from './services/movieService';
import { auth } from './services/firebaseService';


const StyledLayout = styled.div`
display: flex;
min-height: 100vh;
flex-direction: column;
main {
  flex-grow: 1; 
}
`; 
function Layout(props) {

  const [userData, setUserData] = useState({
    user: null
  }); 

  const [movieData, setMovieData] = useState({
    topThree: [],
    nowPlaying: {
      dates: {
        minimum: null, 
        maximun: null 
      },
      page: null,
      results: [],
      total_pages: null, 
      total_results: null 
    }
  });
  useEffect(() => {
    async function getMovieData(userId) {
      const {data} = await fetchMovies(userId);
      setMovieData({
        topThree: getTopThree(data.results),
        nowPlaying: data
      });
    }
    getMovieData();
    const unsubscribe = auth.onAuthStateChanged(user => setUserData({ user }));
    if (userData.user) {
      getMovieData(userData.user.iud)
      props.history.push('/movies');
    } else {
      getMovieData()
      props.history.push('/');
    }
    return () => unsubscribe(); //whenever the app is removed from the browser we need to free up memory, this will destroy the subscription
  }, [props.history, userData.user]);

  function getTopThree(arr) {
    return arr.sort((a, b) => b.vote_average - a.vote_average).slice(0, 3);  
  }

  async function handleFavorite(movieId) { 
    try {
      const { data } = await addFavorite(userData.user.uid, movieId)
      setMovieData({
        topThree: getTopThree(data.results),
        nowPlaying: data
      });
    } catch (error) {
      
    }
  }

  async function handlePagination(pageNum) {
    try {
      const {data} = await fetchMovies(userData.user.uid, pageNum);
      setMovieData(prevState => ({
        ...prevState, 
        nowPlaying: data
      }));
    } catch (error) {
      
    }
  }

  return (
    <StyledLayout>
      <Header user={userData.user} /> 
      <Switch>
        <Route exact path="/" render={props =>
          <HomePage {...props} topThree={movieData.topThree} />
        } /> 
        <Route exact path="/movies" render={props => {
          if (!userData.user) return <Redirect to='/' /> 
          return <IndexPage
            {...props}
            nowPlaying={movieData.nowPlaying.results}
            page={movieData.nowPlaying.page}
            totalPages={movieData.nowPlaying.total_pages}
            handlePagination={handlePagination}
          />
           }
          
        } /> 
        <Route exact path="/movies/:id" render={props => {
            if (!userData.user) return <Redirect to='/' /> 
          return <DetailPage
            {...props}
            movie={movieData.nowPlaying.results.find(movie => movie.id === Number(props.match.params.id))}
            handleFavorite={handleFavorite}
          />
           }
        } /> 
      </Switch>
      <Footer /> 
    </StyledLayout>
  );
}


export default withRouter(Layout); 