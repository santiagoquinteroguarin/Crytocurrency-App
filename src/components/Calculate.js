import React from 'react';
import styled from '@emotion/styled';

const ResponseDiv = styled.div`
    color: #FFF;
    font-family: Arial, Helvetica, sans-serif;
`;

const Info = styled.p`
    font-size: 18px;

    span {
        font-weight: bold;
    }
`;

const Price = styled.p`
    font-size: 30px;

    span {
        font-weight: bold;
    }
`;

const Calculate = ({response}) => {

    if(Object.keys(response).length === 0) return null;

    return (
        <ResponseDiv>
            <Price>El precio es: <span>{response.PRICE}</span></Price>
            <Info>El precio más alto del día es: <span>{response.HIGHDAY}</span></Info>
            <Info>El precio más bajo del día es: <span>{response.LOWDAY}</span></Info>
            <Info>Variación últimas 24 horas: <span>{response.CHANGEPCT24HOUR}</span></Info>
            <Info>Última Actualización: <span>{response.LASTUPDATE}</span></Info>
        </ResponseDiv>
    );
}

export default Calculate;