import React, { Fragment, useState } from 'react';

const useMoney = () => {

    // State de nuestro custom hook
    const [state, setUpdateState] = useState('');

    const select = () => (
        <Fragment>
            <label>Moneda</label>
            <select>
                <option value="MXN">Peso Mexicano</option>
            </select>
        </Fragment>
    )

    // retornar state, interfaz y function que modifica el state
    return [state, select, setUpdateState];
}

export default useMoney;