import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { login, logout } from '../services/firebaseService';

const StyledHeader = styled.header`
display: flex;
align-items: center;
justify-content: space-between; 
background-color: #000;
color: #fff;
box-shadow: 1px 1px 7px 1px;
padding: 0 15px; 
nav {
    display: flex;
}
ul {
    list-style: none; 
    display: flex;
}
li {
    margin-right: 10px;
}
a {
    font-weight: 600;
    font-size: 20px;
}
`;

export default function Header(props) {
    const authOptions = props.user ? 
    <li>
        <Link to="" onClick={logout}>Logout</Link>
    </li>
        :
    <li>
        <Link to="" onClick={login}>Login</Link>
    </li>
    return (
        <StyledHeader>
            <Link to="/">
                <h1>Now Playing</h1>
            </Link>
        
            <nav>
                <ul>
                    <li>
                        <Link to="/movies">All Movies</Link> 
                    </li>
                    {authOptions}
                </ul>
            </nav>
        </StyledHeader>
    );
}