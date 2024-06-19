import {
  faBuildingColumns,
  faGraduationCap,
  faSchool,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { Box, Grid, Stack } from "@mui/material";
import webanavLogo from "../../assets/black_logo_w.svg";
import React, { useState } from "react";
import EducationCard from "./EducationCard";
import c from '../../assets/c++.png'
import js from '../../assets/js.png'
import gitLogo from '../../assets/gitLogo.png'
import next from '../../assets/next-js.png'
import python from '../../assets/python.png'
import redux from '../../assets/redux.png'
import react from '../../assets/react.png'
import node from '../../assets/nodejs.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNodeJs, faPython, faReact } from "@fortawesome/free-brands-svg-icons";

const educationDetails = [
  {
    id: 1,
    icon: faGraduationCap,
    edu: "BTech, CSE",
    year: "2022-2026",
    org: "Indian Institute of Technology, Goa",
    gridSize: 4,
  },
  {
    id: 2,
    icon: faBuildingColumns,
    edu: "12th HSC",
    year: "2020-2022",
    org: "Navkar Public School, Gujarat",
    gridSize: 4,
  },
  {
    id: 3,
    icon: faSchool,
    edu: "10th SSC",
    year: "2019-2020",
    org: "SKM School, Kodinar",
    gridSize: 4,
  },
];
const experienceDetails = [
  {
    id: 1,
    icon: webanavLogo,
    edu: "Fullstack Developer Intern",
    year: "2024",
    org: "Webanav Pvt. Ltd",
    gridSize: 4,
    svg: true,
    type: "exp",
  },
  {
    id: 2,
    icon: faUserTie,
    edu: "Internship Coordinator",
    year: "2024",
    org: "CDC, IIT Goa",
    gridSize: 4,
    type: "exp",
  },
  {
    id: 3,
    icon: faBuildingColumns,
    edu: "Web Dev Lead",
    year: "2023-24",
    org: "ECell, IIT Goa",
    gridSize: 4,
    type: "exp",
  },
  {
    id: 4,
    icon: faBuildingColumns,
    edu: "Core Member",
    year: "2019-2020",
    org: "Architechs (Webd club)",
    gridSize: 4,
    type: "exp",
  },
];

const icons = [
  [
    { img: c, id: 1 },
    { img: js, id: 2 },
    { img: python, id: 3 },
    { img: react, id: 4 },
  ],
  [
    { img: next, id: 1 },
    { img: node, id: 2 },
    { img: redux, id: 3 },
    { img: gitLogo, id: 4 },
  ],
];

const data = [educationDetails, experienceDetails]
const heads = ["Education", "Experience", "Skills"]

function ExperienceCarasoul(props) {
  const { size } = props;
  const [selectedCard, setSelectedCard] = useState(1);
  return (
    <>
      <Grid container columns={8} width={"80vw"} maxWidth={"100%"} padding={"20px 0"}>
        <Grid item xs={12} md={4} height={size > 500 ? "50vh" : "35vh"}>
          <Card
            content={"Where have I done my Education?"}
            id={1}
            selectedCard={selectedCard}
            setSelectedCard={setSelectedCard}
            size={size}
          />
          <Card
            content={"What Experience do I have?"}
            id={2}
            selectedCard={selectedCard}
            setSelectedCard={setSelectedCard}
            size={size}
          />
          <Card
            content={"What tech stack am I proficient in?"}
            id={3}
            selectedCard={selectedCard}
            setSelectedCard={setSelectedCard}
            size={size}
          />
        </Grid>

        <Grid
          item
          xs={12}
          md={4}
          sx={{
            boxShadow: `rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px`,
          }}
          height={"50vh"}
        >
          <Stack
            direction={"column"}
            height={"20%"}
            borderBottom={"1px solid grey"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <h2 style={{ fontWeight: 500, fontSize : size >=1000 ? "28px" : (size>=450 ? "24px" : "20px") }}>{heads[selectedCard - 1]}</h2>
          </Stack>
          <Grid container columns={4} height={"80%"}>
            {selectedCard != 3 ? (
              data[selectedCard - 1].map((eduItem) => {
                return <EducationCard details={eduItem} key={eduItem.id} />;
              })
            ) : (
              <SkillCard icons={icons} size={size} />
            )}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default ExperienceCarasoul;

function Card(props) {
  const { content, id, setSelectedCard, selectedCard, size } = props;
  return (
    <Stack
      key={id}
      height={"33%"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{
        fontSize: size >= 450 ? "1.2rem" : "1rem",
        boxShadow:
          selectedCard != id
            ? `rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px`
            : `rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset`,
        fontFamily: "Inter Tight, sans-serif",
        "&:hover": {
          cursor: "pointer",
          transform: "scale(0.99)",
          transition: "all 0.1s ease-in",
        },
      }}
      onClick={() => {
        setSelectedCard(id);
      }}
    >
      {content}
    </Stack>
  );
}


function SkillCard(props) {
  const { icons, size } = props;
  return (
    <>
      {icons.map((iconList, index) => {
        return (
          <Grid
            key={index}
            item
            xs={12}
            md={4}
            height={"50%"}
            // border={1}
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"center"}
          >
            {/* <Grid xs={12} md={4} height={"80%"}> */}

            {iconList.map((icon) => {
              return (
                <Grid
                  key={icon.id}
                  item
                  xs={3}
                  md={1}
                  // border={1}
                  boxShadow={` rgba(0, 0, 0, 0.18) 0px 2px 4px`}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <img src={icon.img} height={size >= 1000 ? "70px" : (size >=450 ? "55px" : "45px") } />
                </Grid>
              );
            })}
            {/* </Grid> */}
          </Grid>
        );



      })}

    </>
  );
}

