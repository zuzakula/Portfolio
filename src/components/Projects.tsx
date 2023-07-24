import {Container, ImageList, ImageListItem, ImageListItemBar} from "@mui/material";
import style from "../styles/shared-styles";
import styledProjects from "../styles/Projects.styled";
import project1 from '../img/project1.png'
import project2 from '../img/project2.png'

const imageData = [
    {
        img: project1,
        title: 'Car Dashboard',
        url: 'https://github.com/zuzakula/car-dashboard'
    },
    {
        img: project2,
        title: 'WebDziekanat',
        url: 'https://github.com/zuzakula/web-dziekanat'
    }
]

const Projects = () => {
    return (
        <>
            <Container style={style.container}>
                <h1 id="pageSection2" style={style.header}>PROJECTS</h1>
                <ImageList sx={{ width: 500, height: 450 }} style={{width: '100%', height: '100%'}}>
                    {imageData.map((item) => (
                        <ImageListItem key={item.img} style={styledProjects.imageItem}>
                            <img
                                src={`${item.img}`}
                                alt={item.title}
                                loading="lazy"
                                style={styledProjects.titleImage}
                            />
                            <ImageListItemBar
                                title={item.title.toUpperCase()}
                                subtitle={<span><a href={item.url}>{item.url}</a></span>}
                                position="below"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Container>
        </>
    );
};

export default Projects;
