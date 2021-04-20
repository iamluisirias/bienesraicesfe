//Dependencia para crear slugs para las paginas de las propiedades.
const urlSlug = require('url-slug');

//Creando páginas dinamicamente.
exports.createPages = async ({ actions, graphql, reporter }) => {
    const resultado = await graphql(`
        query {
            propiedades: allStrapiPropiedades {
                nodes {
                    id
                    nombre
                }
            }

            paginas: allStrapiPaginas {
                nodes {
                    nombre
                    id
                }
            }
        }   
    `);

    //console.log(JSON.stringify(resultado.data.propiedades));

    //Si no hay resultados
    if (resultado.errors) {
        reporter.panic('No hubo resultados', resultado.errors);
    }

    //Si hay resultados, se generan los archivos estáticos.
    const propiedades = resultado.data.propiedades.nodes;
    const paginas = resultado.data.paginas.nodes;

    //Creando templates de las propiedades
    propiedades.forEach(propiedad => {
        actions.createPage({
            path: urlSlug( propiedad.nombre ),
            component: require.resolve( './src/components/propiedad.js' ),
            context: {
                id: propiedad.id
            }
        })
    })

    //Creando templates de las paginas
    paginas.forEach(pagina => {
        actions.createPage({
            path: urlSlug( pagina.nombre ),
            component: require.resolve('./src/components/pagina.js'),
            context: {
                id: pagina.id
            }
        })
    })
}

