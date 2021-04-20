import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';

import * as estilosListado from '../styles/listado-propiedades.module.css';

//Components
import PropiedadPreview from './propiedadPreview';

//Custom Hook
import usePropiedades from '../hooks/usePropiedades';
import useFiltro from '../hooks/useFiltro';


const ListadoPropiedades = () => {
    
    //Usando nuestro custom hook.
    const datos = usePropiedades();

    //State local
    const [ propiedades ] = useState(datos);
    const [ filtradas, setFiltradas ] = useState([]);

    //Filtrado de propiedades por categoria
    const { categoria, FiltroUI } = useFiltro();

    //Cuando se monte la pagina guarda y setea las propiedades.
    useEffect(() => {
        if (categoria) {
            const datosFiltrados = propiedades.filter(propiedad => propiedad.categoria.nombre === categoria);
            setFiltradas(datosFiltrados);
        } else {
            setFiltradas(propiedades);
        }
    },[categoria, propiedades]) //Escuchara los cambios en el filtro de categoria.

    return (
        <>
            <h2 css={css`
                margin-top: 5rem;
            `}>Nuestras propiedades</h2>

            {
                FiltroUI()
            }

            <ul className={estilosListado.propiedades}>
                {
                    filtradas.map(propiedad => (
                        <PropiedadPreview 
                            key={propiedad.id}
                            propiedad={propiedad}
                        />
                    ))
                }
            </ul>
        </>
    );
};

export default ListadoPropiedades; 