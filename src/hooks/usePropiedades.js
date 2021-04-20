import { graphql, useStaticQuery } from 'gatsby';

const usePropiedades = () => {
    
    const resultado = useStaticQuery(graphql`
        query {
            allStrapiPropiedades {
                nodes {
                    nombre
                    descripcion
                    id
                    wc
                    precio
                    estacionamiento
                    habitaciones
                    categoria {
                        nombre
                    }
                    imagen {
                        childImageSharp {
                            gatsbyImageData(width: 600, aspectRatio: 1.5)
                        }
                    }
                    agentes {
                        nombre
                        telefono
                        email
                    }
                }
            }
        }
    `)

   return resultado.allStrapiPropiedades.nodes;
};

export default usePropiedades;