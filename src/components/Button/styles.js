import styled from "styled-components";
import { Link } from "react-router-dom"

export const Container = styled.div`
button{
    width: 100%;
    height: 3rem;
    padding: 0.75rem 2rem;

    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.3rem;

    border: none; 
    background: ${({theme}) => theme.COLORS.RED_100};
    color: ${({theme}) => theme.COLORS.WHITE};
    
}

`