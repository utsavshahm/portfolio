import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import heroimg from "../assets/bgimg.png";
import {
  Email,
  GitHub,
  Instagram,
  LinkedIn,
} from "@mui/icons-material";
import { ArrowOutwardOutlined } from "@mui/icons-material";
import SubmitButton from "./SubmitButton";

function Home() {
  return (
    <Box
      id="#hero-section"
      sx={{ height: "80vh" }}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-around"}
    >
      <Stack
        direction={"row"}
        justifyContent={"space-around"}
        alignItems={"center"}
        
        width={"80vw"}
        height={"65vh"}
        flexWrap={"wrap-reverse"}
      >
        <Stack direction={"column"}>
          <Stack
            direction={"column"}
            height={"fit-content"}
            gap={3}
            width={"30vw"}
            padding={"20px"}
          >
            <Stack direction={"row"} className="social-media-icons" gap={2}>
              <LinkedIn fontSize="large" sx={{ fill: "#0077B5" }} />
              <Instagram fontSize="large" sx={{ fill: "#e1306c" }} />
              <GitHub fontSize="large" />
              <Email fontSize="large" sx={{ fill: "#249ee4" }} />
            </Stack>

            <Stack direction={"column"} gap={1}>
              <Typography
                variant={"h3"}
                fontFamily={"Inter Tight, sans-serif"}
                fontWeight={200}
              >
                {"\u{1F44B}"} Hey there,{" "}
              </Typography>
              <Typography
                variant={"h2"}
                fontFamily={"Inter Tight, sans-serif"}
                fontWeight={500}
              >
                It's Utsav Shah...{" "}
              </Typography>

              <p
                style={{
                  fontSize: "1.3rem",
                  letterSpacing: "1.5px",
                  wordSpacing: "2px",
                  fontFamily: "Inter Tight, sans-serif",
                  fontWeight: 400,
                  color: "rgb(130, 132, 150)",
                }}
              >
                I'm a curious student pursuing a Bachelor's degree in Computer
                Science and Engineering at the{" "}
                <b>Indian Institute of Technology, Goa</b>. I'm passionate about
                software development, data science, and machine learning. I'm
                always eager to learn new things and work on challenging
                projects.{" "}
              </p>

              <Stack direction={"row"} gap={2}>
                <SubmitButton>My Resume <ArrowOutwardOutlined/> </SubmitButton>
              </Stack>
            </Stack>
          </Stack>
        </Stack>

        <Stack className="heroimg">
          <Box
            sx={{
              height: "55vh",
              width: "55vh",
              backgroundImage: `url(${heroimg})`,
              backgroundSize: "cover",
              
            }}
          ></Box>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Home;
