import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";



export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2.5rem;
    height: 6.5rem;
    width: auto;

    padding: 30px;


    background-color: ${({theme}) => theme.COLORS.BLACK_600};
   

   .logo{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;
   }

   h1{
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
       font-size: 17;
    }
   }
   input{
    width: 553px;
    height: 48px;
   }

   .icon{
    width: 32px;
    height: 32px;
    flex-shrink: 0;
   }
`