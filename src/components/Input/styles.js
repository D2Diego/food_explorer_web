import styled from "styled-components";

export const Container = styled.div`
   input{ 
    width: 100%;
    height: 3rem;
    padding: 0.75rem 0.87rem;

    background-color: ${({theme}) => theme.COLORS.BLACK_900};
    color: ${({theme}) => theme.COLORS.WHITE};
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;


    border: none; 
    outline: none;
   }
`