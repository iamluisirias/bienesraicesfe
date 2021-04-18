import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { convertToBgImage } from 'gbimage-bridge';
import BackgroundImage from 'gatsby-background-image';
import styled from '@emotion/styled';
import * as heroCSS from '../styles/hero.module.css'

const BackgroundStyled = styled(BackgroundImage)`
    height: 300px;
`

const Encuentra = () => {

    //Consulta graphql
    const { imagen } = useStaticQuery(graphql`
        query {
            imagen: file(relativePath: {eq: "encuentra.jpg"}) {
                childImageSharp {
                    gatsbyImageData(width: 1500)
                }   
            }
        }
    `)

    //Obteniendo la imagen a partir del resultado de la consulta de graphql.
    const imagenObtenida = getImage(imagen)

    //Convirtiendo la imagen a una que pueda utilizarse como background de una seccion de la pagina.
    const bgimg = convertToBgImage(imagenObtenida);

    return (
        <BackgroundStyled 
            Tag="section"
            {...bgimg} //"Desplegando la imagen como atributo del backgroundImage"
        >
            <div className={heroCSS.imgbg}>
                <h3 className={heroCSS.titulo}>Encuentra la casa de tus sueños</h3>
                <p>Más de quince años de experiencia</p>
            </div>
        </BackgroundStyled>
    );
};

export default Encuentra;