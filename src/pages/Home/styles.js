import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";


export const Container = styled.div`
width: 100%;
height: 100vh;
padding: 0;
margin: 0;


.title{
font-family: Poppins;
font-size: 18px;
margin-left: 24px;
}
`

export const Box = styled.div`
    margin: 2.75rem auto 3.8rem auto;
    width: 23.5rem;
    height: 7.5rem;
    background: var(--Gradients-200, linear-gradient(180deg, #091E26 0%, #00131C 100%));

    display: flex;
    position: relative;

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        width: 40rem;
        height: 9rem;
        margin-top: 3.5rem;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
        width: 65rem;
        height: 16rem;
        margin-top: 10.5rem ;
    }

    .flavors-plus{
        display: none;

        @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
        display: block;
        position: absolute;
        bottom: 0px;
        left: -60px;
    }
    }
    .flavors{
        display: block;
        position: absolute;
        bottom: 0px;
        left: -25px;
   
        @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        width: 13rem;
        height: 13rem;
        object-fit: cover;
    }
        
        @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
       display: none;
    }
   

    }

    .textStart{
        margin-left: 9.9rem;
        margin-top: 2rem;

        @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
            margin-left: 13.9rem;
            margin-top: 2.5rem;
    }

        @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
            margin-left: 37rem;
            margin-top: 5.5rem;
    }
 }
    h2 {
        color: var(--Light-Light-300, #E1E1E6);
        font-family: Poppins;
        font-size: 18px;

        @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
            font-size: 1.5rem
    }

        @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {  
            font-size: 2.5rem
    }
    }
    
   

    span{
        color: var(--Light-Light-300, #E1E1E6);
        font-family: Poppins;
        font-size: 12px;

        @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
            font-size: 0.8rem
    }

        @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {  
            font-size: 1rem
    }
}

  
    
`