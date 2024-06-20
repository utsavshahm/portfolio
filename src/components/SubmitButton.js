import styled from "@emotion/styled/macro";
import React from "react";
import { Button } from "@mui/material";

// Style the button with the gradient animation
const Btn = styled(Button)`
  border-radius: 15px;
  text-transform: none;
  color: black;
  font-size: 1.1rem;
  width: fit-content;
  padding: 10px 20px;
  border: 0.5px solid black;
  transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out;
  margin-top : 20px;

  &::after {
    content: "";
    display: block;
    position: absolute;
    right: 0;
    height: 100%;
    border-radius: 15px;
    background: linear-gradient(to right, red, orange);
    width: 0;
    z-index: -100;
    transition: width 0.3s ease-in-out;
  }

  &:hover::after {
    left: 0;
    width: 100%;
  }
  &:hover {
    color: white;
    border-color : transparent;
  }

  @media (max-width: 920px) {
    font-size : 1rem;
  }
`;
function SubmitButton(props) {
  return <Btn variant="outlined" className={props.className} type="submit">{props.children}</Btn>;
}

export default SubmitButton;
