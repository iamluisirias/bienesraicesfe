import { graphql, useStaticQuery } from 'gatsby';

const useInicio = () => {

    const resultado = useStaticQuery(graphql`
        {
            allStrapiPaginas(filter: {nombre: {eq: "Inicio"}}) {
                nodes {
                    id
                    nombre
                    contenido
                    imagen {
                        childImageSharp {
                            gatsbyImageData(
                                width: 1500
                                placeholder: DOMINANT_COLOR
                                transformOptions: {duotone: {highlight: "#222222", shadow: "192550", opacity: 30}}
                            )
                        }
                    }
                }
            }
        }
    `);

    return resultado.allStrapiPaginas.nodes.map(inicio => ({
        nombre: inicio.nombre,
        contenido: inicio.contenido,
        imagen: inicio.imagen
    }))
};

export default useInicio;