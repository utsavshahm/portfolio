import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import myself from '../../assets/Utsav_Shah.jpg'
import './projects.css'

function Projects(props) {
  const { size } = props;
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: 10,
          //   marginTop : size > 1000 ? 8 : 20,
          marginTop: 2,
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
            <em>HTML</em>, <em>CSS</em>, and <em>JavaScript</em>. Currently, I'm
            building a typing test website that's both fun and technically
            complex! ⌨️ This project utilizes React, Material-UI, Node.js, and
            Express to create an interactive experience while also challenging
            your typing skills 🧠. My internship as a Fullstack Developer at a
            startup provided valuable real-world experience 📈. 
          </p>
        </Stack>

        <Stack
          direction={"row"}
          sx={{ width: size > 1200 ? "80vw" : size > 1100 ? "85vw" : "80vw" }}
          justifyContent={'space-evenly'}
          flexWrap={'wrap'}
          gap={size >= 1200 ? 5 : 3}
        >

          <CardMusic size={size}/>
          <CardMusic  size={size}/>
          <CardMusic size={size}/>


        </Stack>

      </Box>
    </>
  );
}

export default Projects


export function CardMusic({size}) {
  return (
    <Card
      sx={{
        width: size > 920 ? "24vw" : (size >= 650 ? "50vw" : "75vw"),
        maxWidth: "100%",
        borderRadius: "12px",
        padding: 1.5,
        boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
      }}
    >
      <CardMedia
        image={myself}
        sx={{
          borderRadius: "6px",
          width: "100%",
          height: 0,
          paddingBottom: "min(75%, 240px)",
          backgroundColor: "rgba(0,0,0,0.08)",
        }}
      />
      <CardContent>
        <Typography variant="overline" display="block" gutterBottom>
          Myself
        </Typography>
        <Typography variant="h6" component="div">
          Utsav Shah
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Hi! Wanna chat?
        </Typography>
      </CardContent>
    </Card>
  );
}
