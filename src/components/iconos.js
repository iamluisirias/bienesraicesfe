import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from '@emotion/styled';

const UlStyled = styled.ul`
    display: flex;
    justify-content: space-between;
    flex: 1;
    max-width: 500px;
    margin: 3rem auto 0 auto;
    
    li {
        display: flex;

       img {
           margin-right: 1rem;
       }
    }
`;

const Iconos = ({ habitaciones, wc, estacionamiento, nombre }) => {

    const { iconos } = useStaticQuery(graphql`
        query {
            iconos: allFile(filter: {relativeDirectory: {eq: "iconos"}}) {
                edges {
                    node {
                        publicURL
                        id
                    }
                }
            }
        }
    `)

    const imagenesIconos = iconos.edges;

    return (
        <UlStyled>
           <li>
               <img src={imagenesIconos[2].node.publicURL} alt={`Baños que posee ${nombre}`}/>
               <p>{wc}</p>
           </li>
           <li>
               <img src={imagenesIconos[1].node.publicURL} alt={`Baños que posee ${nombre}`}/>
               <p>{estacionamiento}</p>
           </li>
           <li>
               <img src={imagenesIconos[0].node.publicURL} alt={`Baños que posee ${nombre}`}/>
               <p>{habitaciones}</p>
           </li>
        </UlStyled>
    );
};

export default Iconos;