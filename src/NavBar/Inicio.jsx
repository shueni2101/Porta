import React from "react";
  import { NavLink } from "react-router-dom";
  import{ FontAwesomeIcon} from "@fortawesome/react-fontawesome";
  import{faAward, faBell, faPerson, faPhone} from "@fortawesome/free-solid-svg-icons"
  import{} from "@fortawesome/fontawesome-svg-core"
  import styles from "./Inicio.module.css";
  function Inicio (){
  return (
<div className={styles.container}>
  <div className={styles.containerSon}> 
    <div className={styles.header}>
      <div
      className={styles.motion}
     
      > <h5 className={styles.motionTitle}>L L</h5>
      </div> 
      <h5 className={styles.TitleResponsive}>L L</h5>
    </div>
  <div className={styles.main}>

    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li className="ps-4  ms-4 bd-highlight ">
          <NavLink to="/" className={styles.navLink}>
          <spam>Beggining </spam> 
          </NavLink>
        </li>
        <FontAwesomeIcon className={styles.icon} icon={faBell}/>

        <li className="ps-4 ms-4 bd-highlight">
          <NavLink to="/projects" className={styles.navLink}>
            <spam>Projects </spam> 
          </NavLink>
        </li>
        <FontAwesomeIcon className={styles.icon} icon={faAward}/>

        <li className="ps-4  ms-4 bd-highlight">
          <NavLink to="/aboutMe" className={styles.navLink}>
            <spam> About Me </spam>  
          </NavLink>
        </li>
        <FontAwesomeIcon className={styles.icon} icon={faPerson}/>

        <li className="ps-4  ms-4 bd-highlight">
          <NavLink to="/contactMe" className={styles.navLink}>
          <spam>Contac </spam>
          </NavLink>  
        </li>
        <FontAwesomeIcon className={styles.icon} icon={faPhone}/>     
      </ul>
    </nav>

    </div>
  </div>

</div>)
}
export default Inicio;