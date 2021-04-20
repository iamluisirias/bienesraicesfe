import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from '@emotion/styled';

//Components
import Layout from './layout';
import Iconos from './iconos';

//Styled Components
const Contenido = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    width: 95%;

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 2fr 1fr;
        column-gap: 5rem;
    }
`;

const Sidebar = styled.aside`
    .precio {
        font-size: 2rem;
        color: #75ab00; 
    }

    .agente {
        margin-top: 4rem;
        border-radius: 2rem;
        background-color: #75ab00;
        padding: 3rem;
        color: #fff;  

        p {
            margin: 0;
        }
    }
`;
  
export const query = graphql`
    query ($id: String) {
        propiedades: allStrapiPropiedades(filter: {id: {eq: $id}}) {
            propiedad: nodes {
                nombre
                descripcion
                wc
                estacionamiento
                habitaciones
                precio
                agentes {
                    nombre
                    telefono
                    email
                }
                imagen {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            }
        }
    }
`

const Propiedad = ({ data: { propiedades: { propiedad } } }) => {

    const { nombre, descripcion, wc, estacionamiento, habitaciones, precio, imagen, agentes } = propiedad[0];

    const agente = agentes.nombre;
    const { telefono, email } = agentes;

    return (
        <Layout>
            <>
                <h1>{nombre}</h1>
                <Contenido>
                    <main>
                        <GatsbyImage image={getImage(imagen)} alt={nombre}/>
                        <p>{descripcion}</p>
                    </main>
                    <Sidebar>
                        <p className="precio">{precio}</p>
                        <Iconos
                            wc={wc}
                            estacionamiento={estacionamiento}
                            habitaciones={habitaciones}
                        />
                        <div className="agente">
                            <h2>Vendedor</h2>
                            <p>{agente}</p>
                            <p>{telefono}</p>
                            <p>{email}</p>
                        </div>
                    </Sidebar>
                </Contenido>
            </>
        </Layout>
    );
};

export default Propiedad;