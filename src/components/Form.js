import React from 'react';
// ?1. 
import styled from '@emotion/styled';
// ?3. import hook creatend
import useMoneda from '../hooks/useMoney';

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

    &:hover {
        background-color: #326AC0;
        cursor: pointer;
    }
`;

const Form = () => {

    // Utilizar useMoney, estos se deben nombrar en PascalCase ya que va ser un component
    const [money, Select, setUpdateState] = useMoneda();

    return (
        <form>

            <Select />

            <Button
                type="submit"
                value="Calcular"
            />
        </form>
    );
}

export default Form;