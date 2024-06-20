import { Box, Stack } from '@mui/material';
import React from 'react'
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

function Footer(props) {
  const wd = props.size[0];
  // const ht = props.size[1]
  return (
    <Box
      
      width={"100%"}
      height={wd >= 650 ? "10vh" : "15vh"}
      // border={"1px solid red"}
      boxShadow={`rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset`}
      mt={wd <= 920 && wd >= 650 ? "120vh" : "auto"}
      display={"flex"}
      flexDirection={"row"}
      justifyContent={"space-between"}
      padding={"10px"}
      flexWrap={"wrap"}
      gap={2}
    >
      <Stack
        direction={"row"}
        gap={5}
        width={wd >= 650 ? "40%" : "100%"}
        // border={1}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <a
          href="https://linkedin.com/in/shahutsavm"
          rel="noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon
          
            className="social-media-icons-footer lin"
            icon={faLinkedin}
          />
        </a>

        <a
          href="https://instagram.com/utsavmshah"
          rel="noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon
            className="social-media-icons-footer ig"
            icon={faInstagram}
          />
        </a>

        <a
          href="https://github.com/utsavshahm"
          rel="noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon
            className="social-media-icons-footer git"
            icon={faGithub}
          />
        </a>

        <a href="mailto:shah.utsavm@gmail.com" rel="noreferrer" target="_blank">
          <FontAwesomeIcon
            className="social-media-icons-footer mail"
            icon={faEnvelope}
          />
        </a>
      </Stack>
      <Stack
        direction={"row"}
        gap={5}
        width={wd >= 650 ? "40%" : "100%"}
        // border={1}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <h4 className="footer-text">
          Created and Designed by <b>Utsav Shah</b> {"\u{1F60E}"}
        </h4>
      </Stack>
    </Box>
  );
}

export default Footer