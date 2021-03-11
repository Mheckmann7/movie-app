import styled from 'styled-components';
const StyledPage = styled.main`
display: flex;
justify-content: space-evenly;
align-items: center;
`;

export default function HomePage(props) {

    return (
        <StyledPage>
            {
                props.topThree.map(movie => 
                    <img style={{borderTop: movie.favorite && '10px solid red'}} key={movie.id} src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`} alt={movie.original_title}/>  
                )
            }
        </StyledPage>
    );
}