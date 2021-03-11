import styled from 'styled-components';
import { Link } from 'react-router-dom';
const StyledPage = styled.main`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center; 
div {
    display: flex; 
    img, section {
        margin: 20px;
    }
    section {
        max-width: 500px; 
    }
}
@media(max-width: 1100px) {
    div {
        flex-wrap: wrap;
        justify-content: center; 
        align-items: center 
    }
}
a {
    border: 1px solid #000;
    border-radius: 9px;
    padding: 10px; 
    margin-right: 15px;
    &:hover {
        background-color: #000;
        color: #fff;
    }
}

`;
export default function DetailPage(props) {

    return (
        <StyledPage>
            <div>
            <img style={{borderTop: props.movie.favorite && '10px solid red'}} src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`} alt={props.movie.original_title}/>  
            <section>
                <h1>{props.movie.original_title}</h1>
                <p>Released on: {new Date(props.movie.release_date).toLocaleDateString()}</p>
                    <p>{props.movie.overview}</p>
                    <Link to="/">Home</Link>
                    <Link to="/movies">All Movies</Link>
                    <Link to="" onClick={(e) => {
                        e.preventDefault();
                        props.handleFavorite(props.movie.id)
                    }}>Favorite ❤️</Link>
                </section>
                </div>
        </StyledPage>
    );
}