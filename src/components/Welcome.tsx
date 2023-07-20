import styledWelcome from "../styles/Welcome.styled";
import { Box, Button, Container } from "@mui/material";
import { FaArrowCircleDown } from "react-icons/fa";
import { useEffect } from "react";

const Welcome = () => {
  let aboutSection;
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    aboutSection = document.getElementById("pageSection1");
  }, []);

    const scrollTo = (section) => {
        if(section) {
            window.scrollTo({
                top: section.offsetTop,
                behavior: "smooth",
            })
        }
    };

  return (
    <Container style={styledWelcome.welcomeContainer}>
      <Box style={styledWelcome.welcomeText}>
        <h1>Hi!</h1>
        <h1>I'm Zuza Kula&#128075;</h1>
      </Box>
      <Box style={styledWelcome.scrollDown}>
        <Button onClick={() => scrollTo(aboutSection)}>
          <FaArrowCircleDown></FaArrowCircleDown>
        </Button>
      </Box>
    </Container>
  );
};

export default Welcome;
