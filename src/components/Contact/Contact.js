import { Box, Stack } from "@mui/material";
import React from "react";
import contact from '../../assets/contact.png'

function Contact() {
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
          marginTop: 2,
          height: "100vh",
        }}
      >
        <h3 className="contact-page-heading">
          Contact <span style={{ fontWeight: 300 }}>Me</span>
        </h3>
        <Stack width={"80vw"} height={"60vh"} direction={'row'}justifyContent={'center'} alignItems={'center'} >
            <Box sx={{ backgroundImage : `url(${contact})`, backgroundSize : "cover", backgroundRepeat : "no-repeat"}} height={"100%"} width={"40%"}>
                  </Box>
                  <Stack direction={'column'} width={"50%"} height={"100%"} border={1}></Stack>
        </Stack>
      </Box>
    </>
  );
}

export default Contact;
