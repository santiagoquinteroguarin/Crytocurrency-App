import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #FFFFFF;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
`;

const SelectTag = styled.select`
    width: 100%;
    display: block;
    padding: 1rem;
    --webkit-appearance: none;
    border-radius: 10px;
    border: none;
    outline: none;
    font-size: 1.2rem;
`;

const useCoin = (label, initialState, options) => {

    // State de nuestro custom hook
    const [state, setUpdateState] = useState(initialState);

    // crear en PascalCase porque va ser un componente
    const Select = () => (
        <Fragment>
            <Label>{label}</Label>
            <SelectTag
                onChange={e => setUpdateState(e.target.value)}
                value={state}
            >
                <option value="">-- Seleccione --</option>
                {options.map(options => (
                    <option key={options.code} value={options.code}>{options.name}</option>
                ))}
            </SelectTag>
        </Fragment>
    )

    // retornar state, interfaz y function que modifica el state
    return [state, Select, setUpdateState];
}

export default useCoin;