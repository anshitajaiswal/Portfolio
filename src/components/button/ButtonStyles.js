import styled from "styled-components";

export const ButtonStyles = styled.button`
  color: #888;
  background-color: transparent;
  font-family: "Heebo", sans-serif;
  border: 0;
  text-decoration: none;
  padding: 0;
  transition: color 0.3s ease;
  text-transform: capitalize;
  font-size: 16px; /* Adjust font size as needed */
  font-weight: 700;
  position: relative;
  padding-bottom: 5px; /* Adjust spacing between text and underline */
  align-self: flex-start;
  display: inline-flex;
  align-items: center;

  &::after {
    content: "";
    display: block;
    position: absolute;
    height: 3px;
    left: 0;
    right: 0;
    bottom: 0; /* Align underline to the bottom of the button */
    background-color: #888; /* Use your primary color here */
    transition: width 0.3s ease, background-color 0.3s ease;
    width: 0; /* Initially hide the underline */
  }

  &:hover::after {
    width: 100%; /* Expand the underline on hover */
  }

  &:focus {
    outline: none; /* Remove default focus outline */
  }

  @media (hover: hover) {
    &:hover {
      cursor: pointer;
      color: #6EBDE7; /* Change text color on hover */
    }
  }
`;
