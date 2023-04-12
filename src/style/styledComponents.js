import styled from "styled-components";
import { InputBase } from "@material-ui/core";

export const NetflixInput = styled(InputBase) `
    z-index: 15;
    background-color: #FFFFFF;
    color: #000000;
    text-transform: inherit;
    width: 200px;
    font-size: 1.1rem;
    padding: 8px 2px;
    border: none;
    outline: none;
    cursor: pointer;
    margin-right: 10px;
`

export const NetflixButton = styled.button `
    background-color: #DB0000;
    z-index: 15;
    color: #FFFFFF;
    text-transform: inherit;
    padding: 15px 0;
    width: 200px;
    font-size: 1.1rem;
    font-weight: 500;
    border: none;
    outline: none;
    cursor: pointer;
`