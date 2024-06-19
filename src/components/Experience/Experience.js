import { Box, Stack } from '@mui/material';
import React from 'react'
import './experience.css'
import ExperienceCarasoul from './ExperienceCarasoul';

function Experience(props) {
  const { size } = props;
  const ht = size[1]; const wd = size[0];
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
          marginTop: wd > 920 ? 2 : (ht > 800 ? "88vh" : "90vh"),
          height: "100vh",
        }}
      >
        <Stack
          direction={"column"}
          sx={{ width: size > 1200 ? "80vw" : size > 1100 ? "85vw" : "80vw" }}
          gap={4}
          //   padding={2}
        >
          <h3 className="exp-page-heading">Experiences</h3>
          <p className="exp-page-text">
            I've interned as a Fullstack Developer 🚀 at{" "}
            <strong>Webanav</strong>, a Nashik-based startup. During my time
            there, I created an analytics dashboard feature from scratch 📊,
            which tracks user activity and generates reports based on test
            scores and time spent, using sockets to extract data from the
            frontend.
            <br />
            <br />
            Additionally, I've served as the Web Development Team Lead at{" "}
            <strong>Ecell, IIT Goa</strong> 🌐, where I revamped the official
            website. Currently, I am the Student Internship Coordinator for the
            CSE branch 🧑‍💼, helping peers secure valuable industry experience.
            
          </p>
        </Stack>
        <Stack direction={'row'} gap={4}>
          <ExperienceCarasoul size={wd} />
        </Stack>

      </Box>
    </>
  );
}

export default Experience