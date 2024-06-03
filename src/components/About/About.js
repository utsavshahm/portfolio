import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Box, Stack } from "@mui/material";

import ahmd from '../../assets/Ahmedabad-city.jpg';
import iitgoa from "../../assets/iitgoa.jpeg";
import dsa from "../../assets/dsadev.jpeg";
import skills from "../../assets/skills.png";
import experience from "../../assets/exp.png";
import github from "../../assets/git.png";
import myself from "../../assets/Utsav_Shah.jpg";
import poetry from "../../assets/poetry.avif";
import { useState } from "react";



function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}
const customStyles = {
  "&::-webkit-scrollbar": {
    display: "none",
  },
  "-ms-overflow-style": "none" /* IE and Edge */,
  "scrollbar-width": "none" /* Firefox */,
};

const cardStyles = {


  "&::after":{
    "content": `""`, 
    "height": "100%", 
    "width": "100%",
    "top": 0,
    "opacity" : 0,
    "position": "absolute", 
    "background": "rgb(0, 0, 0, 0.6)",
    "transition" : "all ease-in 0.3s"
  }, 
  "&:hover::after": {
    "opacity" : "1"
  }
}
export default function About() {

  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <Box
      height={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Stack sx={{ overflowY: "hidden" }}>
        <h1>About</h1>
        <ImageList
          sx={{
            ...customStyles,
            overflowY: "scroll",
            width: "65vw",
            height: "75vh",
            border: "1px solid black",
          }}
          variant="quillted"
          cols={8}
          gap={5}

          // rowHeight={120}

          // rowHeight={88}
        >
          {itemData.map((item, index) => (
            <ImageListItem
              key={item.img}
              cols={item.cols || 1}
              rows={item.rows || 1}
              sx={{ ...cardStyles, border: "1px solid black", height : "100%", width : "100%" }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                {...srcset(item.img, 90, item.rows, item.cols)}
                alt={item.desc}
                loading="lazy"
              />

              {hoveredIndex == index && (
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    transition : "all 0.3s ease-in",
                    color: "white",
                    fontSize : "18px",
                    textAlign: "left",
                    zIndex : 1
                  }}
                >
                  {item.desc}
                </Box>

              )}
            </ImageListItem>
          ))}
        </ImageList>
      </Stack>
    </Box>
  );
}

const itemData = [
  {
    img: experience,
    // title: "Linkedin",
    desc: "These are the representative posts which I have taken so far! I've also interned at a startup and currently an Internship Coordinator of CSE Branch.",
    rows: 3,
    cols: 2,
  },
  {
    img: ahmd,
    desc: `Aao kabhi Ahmedabad, dhokla khilaunga ${"\u{1F604}"} `,
    rows: 2,
    cols: 3,
  },
  {
    img: dsa,
    desc: `DSA, CP, aur DEV pr hi zindagi chal rhi he ${"\u{1F972}"}`,
    rows: 2,
    cols: 3,
  },
  {
    img: myself,
    desc: "Hi! I'm Utsav Shah, creator of this beautiful website! Well, this page has all information about myself, no need to write much :)",
    cols: 4,
    rows: 4,
  },
  {
    img: poetry,
    desc: "Arz kiya he... ",
    rows: 3,
    cols: 2,
  },
  {
    img: skills,
    desc: "Proficient in C/C++, Fullstack technologies, strong communication skills? Yeah.",
    rows: 3,
    cols: 2,
  },
  {
    img: github,
    desc: "Github Readme, have you checked it out? Go now!",
    rows: 3,
    cols: 2,
  },
  {
    img: iitgoa,
    desc: "The place where I am currently studying and creating best memories possible!",
    rows: 2,
    cols: 6,
  },
];
