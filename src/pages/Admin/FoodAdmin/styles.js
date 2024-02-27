import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../../styles/deviceBreakPoints";

export const Container = styled.div`
    height: 100vh;
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    a{
        color: var(--Light-Light-300, #E1E1E6);
        font-family: Poppins;
        font-size: 24px;
        font-weight: 700;
        display: flex;
        align-items: center;

        margin-top: 24px;
        margin-left: 7rem;


        @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
            margin-left: 3rem;
    }
    }

    .img-food{

        @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
            width: 300px;
            height: 300px;
            object-fit: contain;
        }
    }

    .name-food{
        color: var(--Light-Light-300, #E1E1E6);
        font-family: Poppins;
        font-size: 40px;
        font-weight: 500;
        line-height: 140%;

    }

    p{
        color: var(--Light-Light-300, #E1E1E6);

        font-family: Poppins;
        font-size: 24px;
        font-weight: 400;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 14px;
        margin: auto;
    }

    .description{
      margin: 0 20px 0 20px;
    }

    .box-mobile{

        width: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2.9rem;

        margin-top: 5rem;
        margin-bottom: 5.6rem;

        @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-self: center;
    }
    }

    .box-text{
        display: flex;
        flex-direction: column;
        gap: 24px;
        align-items: center;
        justify-content: center;

        @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-self: center; 
        
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-self: center; 
      
    }

    }

    .Tags{
        display: flex;
        gap: 0.5rem;
    }

    .price{
        display: flex;
        gap: 33px;
        margin-top: 3.25rem;
    }

    .icon{
        width: 24px;
        height: 24px;
    }

    .footer{
        width: 100%;
        align-self: flex-end;
    }
`