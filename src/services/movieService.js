const BASE_URL = '/api'; //domains are integrated

function fetchMovies(userId, pageNum) {
    let url;
    if (userId && pageNum) {
        url = `${BASE_URL}/movies?userid=${userId}&page=${pageNum}`;
    } else if (userId) {
        url = `${BASE_URL}/movies?userid=${userId}`;
    } else {
        url = `${BASE_URL}/movies`;
    }

    return fetch(url).then(res => res.json());

}

function addFavorite(userId, movieId) {
    return fetch(BASE_URL + '/movies/favorites?movieid=' + movieId + '&userid=' + userId, {
        method: 'POST'
    }).then(res => res.json());
}

export {
    fetchMovies,
    addFavorite 
}