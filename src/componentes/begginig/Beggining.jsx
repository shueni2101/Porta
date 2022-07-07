import React from "react";
import "../../App.css"
import {
 useNavigate
} from "react-router-dom";
function Beginning (){
const Navigate = useNavigate();
const CambioRuta =(ruta)=>{
Navigate(ruta)
console.log(Navigate)
console.log(ruta)
}
return <div className="padre">
  <div className="containerDivs">
    <div className="containerDivsSun">
    <div className="presentation">
      <p>
      Welcome to Lautaro's page
      </p>
    </div>
    <div className="divOculto">
      <button className="boton" onClick={()=>CambioRuta("/aboutMe")}>
      <spam>HI! Click me </spam>
      </button>
    </div>
    </div>
  </div>
</div>
}
export default Beginning;