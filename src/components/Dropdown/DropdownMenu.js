import React, { useEffect, useState } from "react";
import {Stack } from "@mui/material";
import "./Dropdown.css";

function Dropdown(props) {
  const { state, children } = props;
    const [visible, setVisible] = useState(state ? true : false);
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    if (state) {
      setVisible(true);
      setAnimationClass("fade-in");
    } else {
      setAnimationClass("fade-out");
    }
  }, [state]);

  const handleAnimationEnd = () => {
    if (!state) {
      setVisible(false);
    }
  };

  return (
    
    visible && (
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        width="100%"
        height="30vh"
        gap={3}
        marginTop={10}
        fontSize={20}
        position={"fixed"}
        backgroundColor={'rgba(255, 255, 255, 0.95)'}
        boxShadow={1}
        className={animationClass}
        onAnimationEnd={handleAnimationEnd}
        sx={{
          display: "flex",
        }}
      >
        {children}
      </Stack>
    )
  );
}

export default Dropdown;
