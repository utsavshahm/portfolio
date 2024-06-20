import { Box, Stack } from "@mui/material";
import React, { useRef, useState } from "react";
import contact from "../../assets/contact.png";
import "./contact.css";
import SubmitButton from "../SubmitButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";

import Footer from "../Footer/Footer";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios"

function Contact(props) {
  const { size } = props;
  const wd = size[0];
  const ht = size[1];

  const initialData = {
    name: "",
    email: "",
    msg: "",
  };

  const [formData, setFormData] = useState(initialData);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const reCAPTCHA = recaptcha.current.getValue();
    if (!reCAPTCHA) {
      alert("Please fill out the reCAPTCHA!");
      return;
    }
    console.log("form data: ", formData);

    const data = {
      name: formData.name, 
      email: formData.email, 
      msg: formData.msg, 
      recaptcha : reCAPTCHA
    }
    const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/contact`, data)

    if (response.data.success==='ok') {
      alert("Message sent successfully!")
    }
    else {
      alert("error occured!")
      return;
    }
    setFormData(initialData)
    recaptcha.current.reset();
    
    // Send to backend for query in sql
  };

  const recaptcha = useRef()
  return (
    <>
      <div id="contact">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: 2,
            marginTop: wd > 920 ? 4 : ht <= 620 ? "50vh" : "20vh",
            height: "100vh",
            mb:"200px"
          }}
        >
          <h3 className="contact-page-heading">
            Wanna <span style={{ fontWeight: 300 }}>Connect?</span>
          </h3>
          <Stack
            width={"80vw"}
            height={wd > 920 ? (wd >= 1100 ? "60vh" : "50vh") : "80vh"}
            direction={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            flexWrap={"wrap"}
          >
            {wd > 650 ? (
              <Box
                sx={{
                  backgroundImage: `url(${contact})`,
                  backgroundSize:
                    wd > 1000 ? "contain" : wd > 600 ? "cover" : "contain",
                  backgroundRepeat: "no-repeat",
                }}
                height={"100%"}
                width={wd > 920 ? "40%" : "100%"}
                mb={wd > 920 ? 0 : "150px"}
              />
            ) : (
              <p />
            )}

            <Stack
              direction={"column"}
              width={wd > 920 ? "50%" : "100%"}
              height={"100%"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={5}
            >
              <Stack
                component={"form"}
                direction={"column"}
                gap={5}
                onSubmit={handleSubmit}
                height={"100%"}
              >
                <Stack
                  direction={"row"}
                  width={"100%"}
                  gap={5}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <input
                    name="name"
                    placeholder="Your name"
                    className="input-field"
                    required
                    onChange={handleInputChange}
                    value={formData.name}
                  />
                </Stack>
                <Stack
                  direction={"row"}
                  width={"100%"}
                  gap={5}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <input
                    name="email"
                    placeholder="Your email"
                    className="input-field"
                    required
                    type="email"
                    onChange={handleInputChange}
                    value={formData.email}
                  />
                </Stack>
                <Stack
                  direction={"row"}
                  width={"100%"}
                  gap={5}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <textarea
                    name="msg"
                    placeholder="Enter your message"
                    className="input-field textarea"
                    required
                    onChange={handleInputChange}
                    value={formData.msg}
                  />
                </Stack>
                <ReCAPTCHA sitekey={ process.env.REACT_APP_SITE_KEY} ref={recaptcha}/>
                <SubmitButton className="contact-sub-btn">
                  Submit <FontAwesomeIcon icon={faPaperPlane} />
                </SubmitButton>
              </Stack>
            </Stack>
          </Stack>
        </Box>

        <Footer size={[wd, ht]} />
      </div>
    </>
  );
}

export default Contact;
