import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';

const FormStyled = styled.form`
    width: 100%;
    display: flex;
    margin-top: 2rem;
    border: 1px solid #e1e1e1;
    max-width: 1200px;
    margin: 2rem auto 0 auto;
`;

const SelectStyled = styled.select`
    flex: 1;    //Para que crezca a lo largo del formulario.
    padding: 1rem;
    appearance: none;
    border: none;
    font-family: 'Lato', sans-serif;
`;

const useFiltro = () => {

    //Definiendo el state de este custom hook
    const [ categoria, setCategoria ] = useState('');

    const resultado = useStaticQuery(graphql`
        query {
            allStrapiCategorias {
                nodes {
                    nombre
                    id
                }
            }
        }
    `)

    const categorias = resultado.allStrapiCategorias.nodes;

    const FiltroUI = () => (
        <FormStyled>
            <SelectStyled
                onChange={e => setCategoria(e.target.value)}
                value={categoria}
            >
                <option value="">--- Filtrar ---</option>
                {
                    categorias.map(opcion => (
                        <option 
                            value={opcion.nombre}
                            key={opcion.id}
                        >{opcion.nombre}</option>
                    ))
                }
            </SelectStyled>
        </FormStyled>
    )

    return {
        categoria,
        FiltroUI
    }
};

export default useFiltro;