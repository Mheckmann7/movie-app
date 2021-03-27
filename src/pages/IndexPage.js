import styled from 'styled-components';
import { Link } from 'react-router-dom'; 
const StyledPage = styled.main`
display: flex;
flex-direction: column;
align-items: center;
margin: 0 auto; 
section:first-child {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center; 
    img {
        margin: 2px;
    }
}
section:last-of-type {
    display:flex;
    justify-content: space-evenly;
    width: 100%;
    margin: 20px 0;
    button {
        padding: 10px;
        width: 100px;
        border-radius: 7px;
        background-color: #000000;
        color: #ffffff
    }
}

`;
export default function IndexPage(props) {

    return (
        <StyledPage>
            <section>
                {
                props.nowPlaying.map(movie => 
                    <Link key={movie.id} to={`/movies/${movie.id}`}>
                        <img style={{borderTop: movie.favorite && '10px solid red'}}src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.original_title}/>  
                    </Link>
                )
                }
            </section>
            <section>
                <button onClick={() => props.handlePagination(props.page)}>Previous</button>
                <button onClick={() => props.handlePagination(props.page)}>Next</button>
            </section>
        </StyledPage>
    );
}