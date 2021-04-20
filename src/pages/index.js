import React from 'react';

//Styles
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import * as heroCSS from '../styles/hero.module.css';

//Gatsby Images
import { getImage } from 'gatsby-plugin-image';
import { convertToBgImage } from 'gbimage-bridge';
import BackgroundImage from 'gatsby-background-image';

//Components
import Layout from '../components/layout';
import Encuentra from '../components/encuentra';
import ListadoPropiedades from '../components/listadoPropiedades';

//Custom Hook
import useInicio from '../hooks/useInicio';


//Styled components
const BgStyled = styled(BackgroundImage)`
    margin-top: 0;
    height: 600px;
`;

const Index = () => {

    const inicio = useInicio();

    //Destructuring
    const { nombre, contenido, imagen } = inicio[0];

    //Obteniendo imagen con helper
    //En vez de hacer destructuring al objeto de imagen. imagen: { childImageSharp: { gatsbyImageData } }
    const imagenObtenida = getImage(imagen);

    //Para poder usar la imagen como un background
    const bgImagen = convertToBgImage(imagenObtenida);

    return (
        <Layout>
            <BgStyled
                tag="section"
                {...bgImagen}
            >
                <div className={heroCSS.imgbg}>
                    <h1 className={heroCSS.titulo}>Venta  de casas y departamentos exclusivos</h1>
                </div>
            </BgStyled>
            
            <main>
                <div css={css`
                    max-width: 800px;
                    margin: 0 auto;
                `}>
                    <h1>{nombre}</h1> 
                    <p css={css`
                        text-align: center;
                    `}>{contenido}</p>
                </div>
            </main>
           
            <Encuentra/>
            <ListadoPropiedades/>
        </Layout>
    );
};

export default Index;