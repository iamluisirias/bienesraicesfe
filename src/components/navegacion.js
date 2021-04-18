import { Link } from 'gatsby';
import React from 'react';
import styled from '@emotion/styled';

//Styled Components
const NavStyled = styled.nav`
    display: flex;
    flex-direction: column;
    padding-bottom: 2rem;

    @media (min-width: 768px) {
        flex-direction: row;
        padding: 0;
    }
`;

const LinkStyled = styled(Link)`
    color: #fff;
    font-weight: 700;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    padding: .5rem;
    margin-right: 1rem;

    &:last-of-type {
        margin-right: 0;
    }

    &.pagina-actual {
        border-bottom: 2px solid #fff;
    } 
   
`;

const Navegacion = () => {
    return (
        <NavStyled>
            <LinkStyled 
                to={'/'}
                activeClassName="pagina-actual"
            >Inicio</LinkStyled>
             <LinkStyled 
                to={'/nosotros'}
                activeClassName="pagina-actual"
            >Nosotros</LinkStyled>
             <LinkStyled 
                to={'/propiedades'}
                activeClassName="pagina-actual"
            >Propiedades</LinkStyled>
        </NavStyled>
    );
};

export default Navegacion;