import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.div`
    width: auto;
    height: 77px;
    padding: 1.5rem 5rem;
    background: var(--Dark-Dark-600, #00111A);
    
    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
        padding: 1.5rem 3rem
            }
   
   
        

    .Line{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

h1{
    color: var(--Light-Light-700, #4D585E);

    font-family: Roboto;
    font-size: 24px;
    font-weight: 700;

    display: flex;
    gap: 0.8rem;
    align-items: center;
    white-space: nowrap;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        font-size: 14px;
            }
}

span{
    color: var(--Light-Light-200, #FFFAF1);
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    white-space: nowrap;

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
        font-size: 11px;
            }
}
`