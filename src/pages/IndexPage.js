import styled from 'styled-components';
import { Link } from 'react-router-dom'; 
const StyledPage = styled.main`
display: flex;
justify-content: center;
flex-wrap: wrap;
align-items: center; 
img {
    margin: 2px;
}

`;
export default function IndexPage(props) {

    return (
        <StyledPage>
            {
                props.nowPlaying.map(movie => 
                    <Link key={movie.id} to={`/movies/${movie.id}`}>
                        <img style={{borderTop: movie.favorite && '10px solid red'}}src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.original_title}/>  
                    </Link>
                )
            }
        </StyledPage>
    );
}