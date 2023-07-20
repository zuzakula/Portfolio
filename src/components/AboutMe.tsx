import "../styles/shared-styles";
import style from "../styles/shared-styles";
import styledAboutMe from "../styles/AboutMe.styled";
import { Container, Grid } from "@mui/material";
import React from "react";
import image from "../img/main_photo.jpg";

const AboutMe = () => {
  return (
    <>
      <Container style={style.container}>
        <h1 id="pageSection1" style={style.header}>
          ABOUT ME
        </h1>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <div style={style.text}>
              I'm a computer science student from Poland, currently studying at
              the Technical University of Lodz. Passionate about frontend
              development, I enjoy crafting interactive interfaces using HTML,
              CSS, and JavaScript. Recently I've taken part in Erasmus program
              in Dornbirn, Austria, which enriched my perspectives and
              appreciation for diversity. As I embark on my journey, I seek
              challenging projects to grow and improve. Beyond coding, I find
              joy in photography and exploring nature. Welcome to my portfolio,
              where I showcase my work and experiences. <br></br>
              <strong>
                Let's connect and create together in the exciting world of
                frontend development!
              </strong>
            </div>
          </Grid>
          <Grid item xs={6} style={styledAboutMe.imgContainer}>
            <img src={image} style={styledAboutMe.image} alt="" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default AboutMe;
