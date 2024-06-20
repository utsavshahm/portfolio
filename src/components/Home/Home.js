import { Box, Stack } from "@mui/material";
import React from "react";
import heroimg from "../../assets/bgimg.png";
import { ArrowOutwardOutlined } from "@mui/icons-material";
import SubmitButton from "../SubmitButton";
import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

function Home() {
  return (
    <div id="home">
      <Box
        className="hero-section-container"
        display={"flex"}
        alignItems={"flex-start"}
        justifyContent={"space-around"}
        // border={"2px solid red"}
      >
        <Stack
          direction={"row-reverse"}
          justifyContent={"space-around"}
          alignItems={"center"}
          className="hero-section"
          width={"80vw"}
          flexWrap={"wrap"}
          // bgcolor={'red'}
        >
          <Stack>
            <Box
              sx={{
                backgroundImage: `url(${heroimg})`,
                backgroundSize: "cover",
              }}
              // border={"2px solid red"}
              className="hero-img"
            ></Box>
          </Stack>
          <Stack
            direction={"column"}
            // border={"2px solid red"}
          >
            <Stack
              direction={"column"}
              height={"fit-content"}
              gap={3}
              className="hero-text"
              padding={"20px"}
            >
              <Stack direction={"row"} gap={2}>
                <a
                  href="https://linkedin.com/in/shahutsavm"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    className="social-media-icons lin"
                    icon={faLinkedin}
                  />
                </a>

                <a
                  href="https://instagram.com/utsavmshah"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    className="social-media-icons ig"
                    icon={faInstagram}
                  />
                </a>

                <a
                  href="https://github.com/utsavshahm"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    className="social-media-icons git"
                    icon={faGithub}
                  />
                </a>

                <a
                  href="mailto:shah.utsavm@gmail.com"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    className="social-media-icons mail"
                    icon={faEnvelope}
                  />
                </a>
              </Stack>

              <Stack direction={"column"} gap={1}>
                <h3 className="greeting-text">{"\u{1F44B}"} Hey there, </h3>
                <h2 className="name-text">I'm Utsav Shah... </h2>

                <p className="about-text">
                  I'm a curious student pursuing a Bachelor's degree in Computer
                  Science and Engineering at the{" "}
                  <b>Indian Institute of Technology, Goa</b>. I'm passionate
                  about software development, data science, and machine
                  learning. I'm always eager to learn new things and work on
                  challenging projects.{" "}
                </p>
                <a
                  href="https://drive.google.com/file/d/1DiRynVhZqGtArcIV1HgLMeiFBuPc_jy8/view?usp=sharing"
                  rel="noreferrer"
                  target="_blank"
                >
                  <SubmitButton className="sub-btn">
                    My Resume <ArrowOutwardOutlined />{" "}
                  </SubmitButton>
                </a>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </div>
  );
}

export default Home;
