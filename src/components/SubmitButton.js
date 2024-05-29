import styled from "@emotion/styled/macro";
import { keyframes } from "@mui/material";
import React from "react";
import { Button } from "@mui/material";

// Style the button with the gradient animation
const Btn = styled(Button)`
  border-radius: 15px;
  text-transform: none;
  color: black;
  font-size: 1.1rem;
  padding: 10px 20px;
  border: 0.5px solid black;
  transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out;

  &::after {
    content: "";
    display: block;
    position: absolute;
    right: 0;
    height: 100%;
    border-radius: 15px;
    background: linear-gradient(to right, red, orange);
    width: 0;
    z-index: -1;
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
`;
function SubmitButton(props) {
  return <Btn variant="outlined">{props.children}</Btn>;
}

export default SubmitButton;
