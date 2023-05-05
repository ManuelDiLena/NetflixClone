import styled from "styled-components";
import { InputBase } from "@material-ui/core";

const handleWidth = wide => {
    switch (wide) {
        case 'fullWidth' : return '100%'
        default : return '160px'
    }
}

export const NetflixInput = styled(InputBase) `
    z-index: 15;
    background-color: #FFFFFF;
    color: #000000;
    text-transform: inherit;
    width: 250px;
    font-size: 1.1rem;
    padding: 6px 10px;
    border: none;
    border-radius: 5px;
    outline: none;
    cursor: pointer;
    margin-right: 10px;
`

export const NetflixButton = styled.button `
    background-color: #DB0000;
    z-index: 15;
    color: #FFFFFF;
    text-transform: inherit;
    padding: 12px 0;
    width: 250px;
    font-size: 1.1rem;
    font-weight: 500;
    border: none;
    border-radius: 5px;
    outline: none;
    cursor: pointer;
    width: ${({wide}) => handleWidth(wide)}
`