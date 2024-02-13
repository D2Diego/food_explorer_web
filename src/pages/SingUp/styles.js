import styled from "styled-components";
import { DEVICE_BREAKPOINTS} from "../../styles/deviceBreakPoints"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 0.5rem;
    height: 100vh;

    .nameLogo{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.6rem;

        margin: 9.8rem 0 4.5rem 0;
    }

    form{
        width: 19.75rem;
        h1{
            display: none;
        }
    }

    Input{
        margin: 0.5rem 0 2rem 0;
    }

    a {
        text-decoration: none;
        display: flex;
        justify-content: center;

        color: ${({theme}) => theme.COLORS.WHITE};
        font-family: Poppins;

        margin-top: 2rem;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
  
        display: flex;
        flex-direction: row;
        gap: 15rem;
     

   .nameLogo{
    font-size: 40px;
    white-space: nowrap;
    margin-top: 1rem;
   }

   form{
    background-color: ${({theme}) => theme.COLORS.BLACK_700};
    width: 29rem;
    height: 38rem;
    padding: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    border-radius: 16px;

    h1{
        display: flex;
        justify-content: center;
        margin: 32px;
        font-family: Poppins;
    }

    a{
        font-size: 14px;
        font-family: Poppins;
        font-weight: 500;
    }
   }
}

.button-criar{
    width: 100%;
}
    
`