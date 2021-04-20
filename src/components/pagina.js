import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from '@emotion/styled';

//Components
import Layout from './layout';
import ListadoPropiedades from './listadoPropiedades';

//Styled components
const ContenidoPagina = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    width: 95%;

    @media(min-width: 768px) {
        display: grid;
        grid-template-columns: 2fr 1fr;
        column-gap: 5rem;
    }
`;

export const query = graphql`
    query ($id: String) {
        paginas: allStrapiPaginas( filter: { id: { eq: $id } } ) {
            pagina: nodes {
                nombre
                contenido
                imagen {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            }
        }
    }
`;


const Pagina = ( { data: { paginas: { pagina } } } ) => {

    //Destructuring
    const { nombre, contenido, imagen } = pagina[0];

    return (
        <Layout>
            <main className="contenedor">
                <h1>{nombre}</h1>
                <ContenidoPagina>
                    <GatsbyImage image={getImage(imagen)} alt={nombre}/>
                    <p>{contenido}</p>
                </ContenidoPagina>
                {
                    nombre === 'Propiedades' 
                    ?
                        (<ListadoPropiedades/>) 
                    : 
                        null
                }
            </main>
        </Layout>
    );
};

export default Pagina;