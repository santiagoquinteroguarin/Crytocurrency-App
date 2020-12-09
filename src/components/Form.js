import React, {useEffect, useState} from 'react';
// ?1. 
import styled from '@emotion/styled';
// ?3. import hook creatend
import useCoin from '../hooks/useCoin';
import useCryptocurrency from '../hooks/useCryptocurrency';
import axios from 'axios';
import Error from '../components/Error';

// ?2.
const Button = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66A2FE;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #FFFFFF;
    transition: background-color .3s ease;
    outline: none;

    &:hover {
        background-color: #326AC0;
        cursor: pointer;
    }
`;

const Form = ({setSavedCryptocurrency, setSavedCoin}) => {

    // State del listado de criptomonedas
    const [listCrypto, setSavedCrypto] = useState([]);
    const [error, setSavedError] = useState(false);

    const COINS = [
        {code: 'USD', name: 'Dolar de Estados Unidos'},
        {code: 'MXN', name: 'Peso Mexicano'},
        {code: 'EUR', name: 'Euro'},
        {code: 'GBP', name: 'Libra Esterlina'},
    ]

    // Utilizar useMoney, estos se deben nombrar en PascalCase ya que va ser un component
    const [coin, Select] = useCoin('Elige tu moneda','', COINS);

    // Utilizar useCryptocurrency
    const [cryptocurrency, SelectCrypto] = useCryptocurrency('Elige tu Criptomoneda', '',listCrypto);

    // Ejecutar llamado a la API
    useEffect(() => {
        const queryAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const result = await axios.get(url);
            setSavedCrypto(result.data.Data);
        }
        queryAPI();
    }, []);

    // Cuando user submit
    const calculateCoin = e => {
        e.preventDefault();

        // validar si los campos estan llenos
        if(coin === '' || cryptocurrency === '') {
            setSavedError(true);
            return;
        }

        setSavedError(false);

        // pasar los datos al componente principal
        setSavedCoin(coin);
        setSavedCryptocurrency(cryptocurrency);
    }

    return (
        <form onSubmit={calculateCoin}>

            {error ? <Error message="Los campos son obligatorios"/> : null}

            <Select />

            <SelectCrypto />

            <Button
                type="submit"
                value="Calcular"
            />
        </form>
    );
}

export default Form;