const BASE_URL = '/api'; //domains are integrated

function fetchMovies(userId) {
    const url = userId ? BASE_URL + '/movies?userid=' + userId : BASE_URL + '/movies'
    return fetch(url).then(res => res.json());

}

//TODO: come back once we have auth 

function addFavorite(userId, movieId) {
    return fetch(BASE_URL + '/movies/favorites?movieid=' + movieId + '&userid=' + userId, {
        method: 'POST'
    }).then(res => res.json());
}

export {
    fetchMovies,
    addFavorite 
}