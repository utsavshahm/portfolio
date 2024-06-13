import React, { useEffect, useState } from "react";
import "./about.css";
import ImageGrid from "./ImageGrid";
import HorizontalScroll from "./HorizontalScroll";
import { Box, Stack } from "@mui/material";

function About() {
        const [size, setSize] = useState(window.innerWidth);

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
    
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
                  gap: 2,
                  //   marginTop : size > 1000 ? 8 : 20,
                  marginTop : 4,
          height : "30vh"
        }}
      >
        <Stack
          direction={"column"}
          sx={{ width: size > 1200 ? "80vw" : size > 1100 ? "85vw" : "80vw" }}
          gap={4}
          //   padding={2}
        >
          <h3 className="about-page-heading">About Me</h3>
          <p className="about-page-text">
            Hi, I'm <strong>Utsav Shah</strong>, a <em>Fullstack Enthusiast</em>{" "}
            and third-year CSE student at <strong>IIT Goa</strong>. I have
            hands-on experience from an internship at <strong>Webanav</strong>,
            working with <em>Next.js</em>, <em>AWS S3</em>, <em>Node.js</em>,
            and <em>TypeScript</em>. I'm passionate about{" "}
            <strong>coding</strong> 💻, <em>competitive programming</em> 🏆, and
            solving <strong>algorithmic problems</strong> ⚙️. Based in{" "}
            <strong>Ahmedabad</strong>, I'm a <em>foodie</em> 🍕 at heart and
            always eager to explore new technologies.
            <br />
            <br />
            Below is a image grid containing everything about myself{" "}
            {"\u{1F609}"}!
          </p>
        </Stack>

      </Box>
          {size >= 920 ? <ImageGrid size={size} /> : <HorizontalScroll size={size} />}
    </>
  );
}

export default About;
