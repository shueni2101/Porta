import React,{useState} from "react"
import styles from "./Projects.module.css"
import Imagenes from "../../images/cielo.png";
import {Carousel} from 'react-bootstrap';
import toDo from "../../images/toDoReact.png";
function Projects (){ 
const [index, setIndex] = useState(0);

const handleSelect = (selectedIndex, e) => {
  setIndex(selectedIndex);
};

return (
<div className={styles.container}>
  <div className={styles.containerTitle}>
    <h2 className={styles.title}> My Projects </h2>
  </div>

  <div className={styles.containerCarousel}>
    <Carousel className={styles.carousel} activeIndex={index} interval={null} onSelect={handleSelect}>
      <Carousel.Item  className={styles.images}>
          <img
            id={styles.imagen1}
            className="d-block w-100"
            src={Imagenes}
            alt="Weather App"
          />
        <Carousel.Caption>
          <a href="https://joyful-jelly-7e41e1.netlify.app" className={styles.buton}>Weather App</a>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className={styles.images2}>
        <img 
          id={styles.imagen2}
          className="d-block w-100"
          src={toDo}
          alt="To Do App"
        />
        <Carousel.Caption >
         <a  href="https://todoaplautaro.netlify.app" className={styles.buton}>To Do App</a>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className={styles.images3}>
        <div className={styles.neon}>
          <span className={styles.text} data-text="Lauflix">Lauflix</span>
          <span className={styles.gradient}></span>
          <span className={styles.spotlight}></span>
        </div>
        <Carousel.Caption>
          <a href="https://lauflix.netlify.app" className={styles.buton}>Movies App</a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
</div>
);
}
export default Projects;
