import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";


export const Container = styled.div`
width: 100%;
height: 292px;
margin: 10px 24px 100px 10px;


padding: 14px;

.Like{
    
    margin-left: 80px;

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
        margin-left: 190px;
    }
}

.body{

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.2rem;

    width: 210px;
    padding: 1.5rem;
    border-radius: 8px;

    background-color: ${({theme}) => theme.COLORS.BLACK_200};
    border: 1px solid var(--Dark-Dark-300, #000204);

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
        width: 160px;
        height: 260px;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
        width: 15.75rem;
    }
    

    img{
        width: 88px;
        height: 88px;
        object-fit: cover;

        @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
        width: 9rem;
        height: 9rem;
    }
    }

    h3{
        font-family: Poppins;
        font-size: 14px;
        font-weight: 500;
        line-height: 24px;
    }

    i{
        color: ${({theme}) => theme.COLORS.BLUE_100};
        font-family: Roboto;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
    }

    p{
        display: flex;
        width: 100px;
        height: 32px;
        padding: 4px 0px;
        justify-content: center;
        align-items: center;
        gap: 14px;
    }

    button{
        display: flex;
        width: 162px;
        height: 32px;
        gap: 8px;

        @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
        width: 130px;
            }
        }
}

.img-teste{
    width: 88px;
    height: 88px;
    object-fit: cover;
}


.custom-swiper {
  transition: opacity 0.5s ease;
}

.custom-swiper.fade-out {
  opacity: 0.5;
}
`