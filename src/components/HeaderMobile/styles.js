import styled from "styled-components";
import { DEVICE_BREAKPOINTS} from "../../styles/deviceBreakPoints"

export const Container = styled.div`
width: auto;

  .line{

    padding: 3.75rem 1.75rem 1.75rem 1.75rem ;
    background-color: ${({theme}) => theme.COLORS.BLACK_700};

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  h1{
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    h1{
        font-size: 20px;
    }
  }
   
`