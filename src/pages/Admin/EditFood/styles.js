// styles.js
import styled from 'styled-components';

export const Container = styled.div`
  
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  main{
    max-width: 1270px;
    margin: auto;
  }

  a{
    color: var(--Light-Light-300, #E1E1E6);
    font-family: Poppins;
    font-size: 24px;
    font-weight: 700;
    display: flex;
    align-items: center;
    margin-top: 41px;
  
  }



  .line_button{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 1rem;
  }

`;


export const FormSection = styled.section`
  border-radius: 0.375rem;
  margin: 2rem 0;
  padding: 2rem;
  h1 {
    margin-bottom: 1rem;
    color: var(--Light-Light-300, #E1E1E6);
    font-family: Poppins;
    font-size: 32px;
    font-weight: 500;
  }
  .first_line{
    display: grid;
    grid-template-columns: 1fr 3fr 2fr;
    gap: 2rem;
    align-content: center;

  }
  .second_line{
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2rem;
    align-content: center;
  }

  .input_file{
   
  }
  
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Input = styled.input`
  border-radius: 8px;
  background: var(--Dark-Dark-800, #0D161B);
  margin-top: 1rem;
  border: none;
  border-radius: 0.375rem;
  padding: 0.5rem 1rem;
  color: #E2E8F0;
  width: 100%;
  height: 3rem;

  &:focus {
    outline: none;
    border-color: #63B3ED;
  }

  &[type='file'] {
    border: none;
    
  }
`;

export const Select = styled.select`
  border-radius: 8px;
  background: var(--Dark-Dark-800, #0D161B);
  margin-top: 1rem;
  border: none;
  padding: 0.5rem 1rem;
  color: #E2E8F0;
  width: 100%;
  height: 3rem;
  font-size: 15px;
  &:focus {
    outline: none;
    border-color: #63B3ED;
  }
`;

export const TextArea = styled.textarea`
  margin-top: 1rem;
  border-radius: 8px;
  background: var(--Dark-Dark-800, #0D161B);
  padding: 0.5rem 1rem;
  border: none;
  resize: none;
  color: #E2E8F0;
  width: 100%;
  min-height: 120px;

  &:focus {
    outline: none;
    border-color: #63B3ED;
  }
`;
