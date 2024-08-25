import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import typeit from '../../assets/typeit.png'
import ecell from '../../assets/ecell.png'
import spotify from '../../assets/spotify.png'
import './projects.css'

function Projects(props) {

  const projects = [
    {
      id: 1,
      img: typeit,
      name: "TypeIT - A Typing Website",
      desc: "TypeIT - A typing website which enables you to test your typing speed against time. This is a fullstack application made above MERN stack. ",
      link : "https://my-typeit.vercel.app"

    },
    {
      id: 1,
      img: ecell,
      name: "ECell - IIT Goa",
      desc: "The official website of Entrepreneurship Cell of IIT Goa. Made using HTML, CSS and JS. ",
      link : "https://iitgoa.ac.in/~students/ecell"
    },
    {
      id: 3,
      img: spotify,
      name: "Spotify Clone",
      desc: "This is a spotify clone made using HTML, CSS and JS.",
      link : "https://utsavshahm.github.io/Projects/spotify/spotifyUI.html"
    }
  ];
  const { size } = props;
  return (
    <>
      <div id="projects">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: 10,
            //   marginTop : size > 1000 ? 8 : 20,
            marginTop: 2,
            marginBottom : "200px",
            height: "100vh",
          }}
        >
          <Stack
            direction={"column"}
            sx={{ width: size > 1200 ? "80vw" : size > 1100 ? "85vw" : "80vw" }}
            gap={4}
            //   padding={2}
          >
            <h3 className="projects-page-heading">
              Recent <span style={{ fontWeight: 300 }}>Projects</span>
            </h3>
            <p className="projects-page-text">
              As a Fullstack Developer 🚀, I've worked on various projects,
              including the official Ecell website of IIT Goa (check it out! 👀)
              using <em>HTML</em> and <em>CSS</em>, and a Spotify clone 🎧 with{" "}
              <em>HTML</em>, <em>CSS</em>, and <em>JavaScript</em>. Currently,
              I'm building a typing test website that's both fun and technically
              complex! ⌨️ This project utilizes React, Material-UI, Node.js, and
              Express to create an interactive experience while also challenging
              your typing skills 🧠. My internship as a Fullstack Developer at a
              startup provided valuable real-world experience 📈.
              <br />
              <br />
              PS : Below card sizes are intentional 👀!
            </p>
          </Stack>

          <Stack
            direction={"row"}
            sx={{ width: size > 1200 ? "80vw" : size > 1100 ? "85vw" : "80vw" }}
            justifyContent={"space-evenly"}
            flexWrap={"wrap"}
            gap={size >= 1200 ? 5 : (size > 920 ? 3 : 6)}
          >
            {projects.map((project) => {
              return (
                <CardMusic key={project.id} size={size} details={project} />
              );
            })}
          </Stack>
        </Box>
      </div>
    </>
  );
}

export default Projects


export function CardMusic(props) {
  const { size, details } = props;
  return (
    <a href={details.link} target='_blank' rel='noreferrer' style={{textDecoration : 'none'}}>
      <Card
        sx={{
          width: size > 920 ? "24vw" : size >= 650 ? "50vw" : "75vw",
          maxWidth: "100%",
          borderRadius: "12px",
          padding: "15px 5px",
          boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
          height : "fit-content",
          transition: "all 0.2s",
          // height : size > 1000 ? "max-content" : "60vh"
          "&:hover": {
            transform: "scale(1.02)",
            cursor: "pointer",
          },
        }}
      >
        <CardMedia
          image={details.img}
          sx={{
            borderRadius: "6px",
            width: "100%",
            height: 0,
            paddingBottom: "min(75%, 240px)",
            backgroundColor: "rgba(0,0,0,0.08)",
          }}
        />
        <CardContent
          sx={{ display: "flex", flexDirection: "column", gap: "10px", height : "100%" }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{ fontFamily: "Inter Tight, sans-serif", fontSize: "1.3rem" }}
          >
            {details.name}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            fontSize={size > 1200 ? "1.1rem" : size > 920 ? "1rem" : "1.1rem"}
            sx={{ color: "rgb(130, 132, 150)" }}
          >
            {details.desc}
          </Typography>
        </CardContent>
      </Card>
    </a>
  );
}
