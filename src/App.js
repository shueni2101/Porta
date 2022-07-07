import {
  useLocation
} from "react-router-dom";
import RutasAnimadas from "./NavBar/RutasAnimadas";
import Burger from "./componentes/Burger/Burger";
import "./App.css";
import React from "react";
import Inicio from "./NavBar/Inicio";
function App (){
const location= useLocation();
return (
<>
  {location.pathname==="/"?null:<>
  <div className="burger" >
  <Burger />
    </div>
  <Inicio />
  </> }
<RutasAnimadas/>         
</>
  )
}
export default App;