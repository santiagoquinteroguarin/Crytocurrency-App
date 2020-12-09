import React from 'react';

const Calculate = ({response}) => {

    if(Object.keys(response).length === 0) return null;

    return (
        <div>
            <p>El precio es: <span>{response.PRICE}</span></p>
            <p>El precio más alto del día es: <span>{response.HIGHDAY}</span></p>
            <p>El precio más bajo del día es: <span>{response.LOWDAY}</span></p>
            <p>Variación últimas 24 horas: <span>{response.CHANGEPCT24HOUR}</span></p>
            <p>Última Actualización: <span>{response.LASTUPDATE}</span></p>
        </div>
    );
}

export default Calculate;