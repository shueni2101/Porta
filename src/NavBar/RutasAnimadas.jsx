import {
    useLocation,
    Routes,
    Route
  } from "react-router-dom";
  import Projects from '../componentes/projects/Projects';
  import Beginning from '../componentes/begginig/Beggining';
  import AboutMe from '../componentes/aboutMe/AboutMe';
  import ContactMe from '../componentes/contactMe/ContactMe';
import React from "react";
function RutasAnimadas (){
const location=useLocation();
return (
  <Routes location={location} key={location.pathname}> 
            <Route path="/" exact element={<Beginning/>} />
            <Route  path="/projects" exact element={ <Projects />} />
            <Route  path="/aboutMe" exact element={ <AboutMe />} />
            <Route   path="/contactMe" exact element={ <ContactMe />}/>
    </Routes>
)
}
export default RutasAnimadas;