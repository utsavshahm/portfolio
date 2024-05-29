import styled from "@emotion/styled/macro";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Close, Menu } from "@mui/icons-material";
import DropdownMenu from "./Dropdown/DropdownMenu";

const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: 500;
  letter-spacing: 2px;
  background: linear-gradient(to right, red, orange);
  background-clip: text;
  -webkit-background-clip: text;
  color: rgba(0, 0, 0, 1);

  transition: color 0.2s ease-in-out;

  &:hover {
    color: transparent;
  }

  &::after {
    content: "";
    display: block;
    width: 0;
    postion: absolute;
    bottom: 0;
    height: 2px;
    right: 100%;
    background: linear-gradient(to right, red, orange);
    transition: width 0.3s ease-in-out, right 0.3s ease-in-out;
  }

  &:hover::after {
    right: 0;
    width: 100%;
  }
`;

function Navbar() {
  const [ham, setHam] = useState(0);
  const [size, setSize] = useState(window.innerWidth);

  const [menu, setMenu] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (size <= 900) {
      // Compare with a number, not a string
      setHam(1);
    } else {
        setHam(0);
        setMenu(0)
    }
  }, [size]);
  return (
    <>
      <Stack
        direction={"row"}
        justifyContent={"space-around"}
        height={75}
        boxShadow={2}
        backgroundColor={"rgba(255, 255, 255, 1)"}
        // position={"fixed"}
      >
        <Stack
          alignItems={"center"}
          direction={"row"}
          fontSize={30}
          sx={{ wordSpacing: 2 }}
        >
          <Link to={'/'} style={{textDecoration : "none", color:'black'}}>
            <b>Utsav</b> <span style={{ fontWeight: 300 }}> Shah </span>
          </Link>
        </Stack>
        <Stack
          direction={"row"}
          justifyContent={"space-evenly"}
          gap={8}
          alignItems={"center"}
          fontSize={20}
          display={ham ? "none" : "flex"}
        >
          <NavLink> Home </NavLink>
          <NavLink> About </NavLink>
          <NavLink> Projects </NavLink>
          <NavLink> Contact </NavLink>
        </Stack>

        <Stack
          direction={"row"}
          alignItems={"center"}
          sx={{ display: ham ? "flex" : "none" }}
        >
          <IconButton
            children={menu ? <Close /> : <Menu />}
            onClick={() => {
              return setMenu(menu ^ 1);
            }}
          ></IconButton>
        </Stack>
      </Stack>

      <DropdownMenu state={menu}>
        <NavLink> Home </NavLink>
        <NavLink> About </NavLink>
        <NavLink> Projects </NavLink>
        <NavLink> Contact </NavLink>
      </DropdownMenu>
    </>
  );
}

export default Navbar;