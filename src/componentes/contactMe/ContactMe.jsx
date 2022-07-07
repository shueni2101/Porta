import React from "react";
import styles2 from "./ContactMe.module.css"
import{ FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import{} from "@fortawesome/fontawesome-svg-core";
import{} from "@fortawesome/free-regular-svg-icons";
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
function ContactMe (){
return  (
    <div className={styles2.containerPadre}>
        <div className={styles2.container}>
            <div className={styles2.titlee}>
                <h2>Let's work together!</h2>
            </div>

            <div className={styles2.email}>
                <p>My email:</p>
                <a href="mailto:lautarolopardo95@outlook.es" title="email-page">
                lautarolopardo95@outlook.es</a>
            </div>

            <div className={styles2.socialMedia}>
                <p>Social Media</p>
                
                <div className={styles2.a}>
                    <a href="https://www.linkedin.com/in/lautaro-marcelo-lopardo-546203206/">
                        <FontAwesomeIcon className={styles2.icono1} icon={faLinkedin}/>
                    </a>

                    <a href="https://www.facebook.com/lautarolopardo/">
                        <FontAwesomeIcon className={styles2.icono2} icon={faFacebook}/>
                    </a>

                    <a href="https://www.instagram.com/lautarolopardo/">
                        <FontAwesomeIcon className={styles2.icono3} icon={faInstagram}/>
                    </a>
                </div>
            </div>
        </div>
    </div>
);

}
export default ContactMe;