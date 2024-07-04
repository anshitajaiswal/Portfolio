import styled from "styled-components";

export const ContactStyles = styled.section`
  box-sizing: border-box; /* Use border-box for correct box model */
  margin: 0 auto; /* Shortcut for margin-left: auto; margin-right: auto; to center horizontally */

  input {
    height: calc(var(--gap) * 2);
    margin-bottom: 30px;
    width: 100%; /* Ensure inputs take full width */
    border: none;
    outline: 2px solid rgba(255, 255, 255, 0.15);
    border-radius: 8px;
    font-size: var(--p);
    font-weight: 700;
    padding: 25px;
    transition: outline 0.3s ease;

    &::placeholder {
      color: var(--inActive);
}
    &:focus {
      outline: 2px solid var(--primary);
    }
  }

  textarea {
    margin-bottom: 20px;
    width: 100%; /* Ensure textarea takes full width */
    border: none;
    outline: 2px solid rgba(255, 255, 255, 0.15);
    border-radius: 8px;
    font-size: var(--p);
    font-weight: 700;
   
    padding: 25px;
    transition: outline 0.3s ease;

    &::placeholder {
      color: var(--inActive);
    }

    &:focus {
      outline: 2px solid var(--primary);
    }
  }
`;
