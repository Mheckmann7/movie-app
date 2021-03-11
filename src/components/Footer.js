import styled from 'styled-components';

const StyledFooter = styled.footer`
display: flex;
align-items: center;
justify-content: center; 

`;
export default function Footer(props) {
  
    return (
        <StyledFooter>
            <p>Copyright &copy; All Rightws Reserved {new Date().getFullYear()}</p>
        </StyledFooter>
    );
}