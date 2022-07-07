import Hamburger from 'hamburger-react';
import React from "react";
  import styles from "./Burger.module.css";

  import { NavLink } from "react-router-dom";
  import{} from "@fortawesome/fontawesome-svg-core"
import { useState } from 'react';
function Burger (){
  const [estado,setEstado]=useState("oculto")
  console.log(<Hamburger />)
    return (
  <div>
    <Hamburger  color='#CA391A'   onToggle={toggle=>{
      if(toggle){
      setEstado("mostrar")
      }
      else{
      setEstado("oculto")
      }
      }}>
    </Hamburger>

    <div className={(estado==="oculto"? styles.oculto: styles.mostrar)}>
      <div className={styles.container}>
        <NavLink to="/"className={styles.navLink} >
          <spam className={styles.spam1}>Beggining </spam> 
        </NavLink>

        <NavLink to="/projects" className={styles.navLink}>
          <spam>Projects </spam> 
        </NavLink>

        <NavLink to="/aboutMe" className={styles.navLink}>
          <spam> About Me </spam>  
        </NavLink>

        <NavLink to="/contactMe" className={styles.navLink}>
          <spam>Contac </spam>
        </NavLink>  
      </div>
    </div>

  </div>
    )
    }
    export default Burger;