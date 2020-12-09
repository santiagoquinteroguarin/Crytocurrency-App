import React, { Fragment, useState } from 'react';

const useCoin = (label, initialState, options) => {

    // State de nuestro custom hook
    const [state, setUpdateState] = useState(initialState);

    // crear en PascalCase porque va ser un componente
    const Select = () => (
        <Fragment>
            <label>{label}</label>
            <select>
                <option value="">-- Seleccione --</option>
                {options.map(options => (
                    <option key={options.code} value={options.code}>{options.name}</option>
                ))}
            </select>
        </Fragment>
    )

    // retornar state, interfaz y function que modifica el state
    return [state, Select, setUpdateState];
}

export default useCoin;