import {Box, Container, Grid, List} from "@mui/material";
import style from "../styles/shared-styles";
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';

const LinearProgressWithLabel = (props: LinearProgressProps & { value: number }) => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '100%', mr: 1, margin: '0 0' }}>
                <LinearProgress variant="determinate" {...props} />
            </Box>
        </Box>
    );
}

const Resume = () => {
  return (
    <>
      <Container style={style.container}>
        <h1 id="pageSection3" style={style.header}>
          RESUME
        </h1>
        <Grid container spacing={2} style={style.text}>
            <Grid item xs={6}>
                <h2>My Skills</h2>
                <Box sx={{ width: '90%' }}>
                    <h4>Angular</h4>
                    <LinearProgressWithLabel value={80} />
                    <h4>HTML/CSS</h4>
                    <LinearProgressWithLabel value={90} />
                    <h4>Typescript</h4>
                    <LinearProgressWithLabel value={88} />
                    <h4>React</h4>
                    <LinearProgressWithLabel value={70} />
                    <h4>React Native</h4>
                    <LinearProgressWithLabel value={50} />
                    <h4>Figma</h4>
                    <LinearProgressWithLabel value={60} />
                </Box>
            </Grid>
          <Grid item xs={6}>
            <h2>Operations Analyst</h2>
            <h2>Frontend Developer</h2>
            <h3>Comarch, July 2022 - January 2023</h3>
            <List>
              <ul>
                <li>
                  Designed and updated layouts to meet usability and performance
                  requirements.
                </li>
                <li>Produced websites compatible with multiple browsers.</li>
                <li>
                  Conducted unit testing to deliver optimal browser
                  functionality using Cypress.
                </li>
              </ul>
            </List>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Resume;
