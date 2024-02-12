import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";



export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2.5rem;
    height: 6.5rem;
    width: 100%;
   padding: 15px;
    


    background-color: ${({theme}) => theme.COLORS.BLACK_600};
   

   .logo{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;
   }

   .svg-logo{
  margin-bottom: 0;
   }

   ${({ $IsAdmin }) => $IsAdmin && `
   .svg-logo{
      margin-bottom: 20px;
   }
   `}

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
      height: 48px;
      width: 553px;

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    width: 283px;
    }

   }

   .icon{
    width: 32px;
    height: 32px;

}

span{
   color: var(--Tints-Cake-200, #82F3FF);
   font-family: Roboto;
   font-size: 12px;
   font-style: normal;
   font-weight: 400;
   line-height: 160%;
   margin-left: 105px;
}
`