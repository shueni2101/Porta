import React from "react";
import styles from "./AboutMe.module.css"
import{ FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import imagen from "../../images/imagen.jpg";
import {faBootstrap, faCss3, faGit, faGithub, faHtml5, faJs, faNodeJs, faReact} from "@fortawesome/free-brands-svg-icons";
import {useTranslation} from "react-i18next";
function AboutMe (){
    const[t,i18n]= useTranslation("global");
return  ( 
    <div className={styles.containerPadre}>
        <div className={styles.container}>
            <div className={styles.hijoUno}>
                <div className={styles.imagenLautaro}>
                    <img className={styles.imagen} src={imagen} alt="Lautaro" /> 
                </div>
                <div className={styles.Title}>
                   
                    <h2 className={styles.aboutMeTitle}>{t("title.title")}</h2>
                </div>
            </div>
            <div className={styles.hijoDos}>   
                <div className={styles.containerPresentation}>
                        <div className={styles.englishPresentation}>  
                        <spam className={styles.spam1}>{t("header.1-line")}</spam>
                        <spam className={styles.spam2}>{t("header.2-line")} </spam>  
                        <spam className={styles.spam3}>{t("header.3-line")}</spam>
                        <spam className={styles.spam4}>{t("header.4-line")}</spam>
                        <spam className={styles.spam5}>{t("header.5-line")}</spam>
                        <spam className={styles.spam6}>{t("header.6-line")}</spam>
                        </div>
                </div>
                <div className={styles.butonLanguage}>
                    <button className={styles.button}  onClick={() => i18n.changeLanguage("es")}>
                    Spanish
                    </button>
                    <button className={styles.button} onClick={() => i18n.changeLanguage("en")}>
                    English
                    </button>
                </div>
                <div className={styles.containerPresentationResponsive}>
                    <p>
                    <spam className={styles.spamOculto}>{t("header.1-line")}</spam>
                        <spam className={styles.spamOculto}>{t("header.2-line")} </spam>  
                        <spam className={styles.spamOculto}>{t("header.3-line")}</spam>
                        <spam className={styles.spamOculto}>{t("header.4-line")}</spam>
                        <spam className={styles.spamOculto}>{t("header.5-line")}</spam>
                        <spam className={styles.spamOculto}>{t("header.6-line")}</spam>
                    </p>
                </div>
            </div>  
        </div>
            <div className={styles.container2}> 
            <h3>Skills</h3>
        <div className={styles.box2}
            > 
            <FontAwesomeIcon className={styles.icono1} icon={faHtml5}/>
            <FontAwesomeIcon className={styles.icono2} icon={faCss3}/>
            <FontAwesomeIcon className={styles.icono3} icon={faJs}/>
            <FontAwesomeIcon className={styles.icono4} icon={faReact}/>
            <FontAwesomeIcon className={styles.icono5} icon={faBootstrap}/>
            <FontAwesomeIcon className={styles.icono6} icon={faGithub}/>
            <FontAwesomeIcon className={styles.icono7} icon={faNodeJs}/>
            <FontAwesomeIcon className={styles.icono8} icon={faGit}/>
        </div>
            </div>
    </div>
);
}
export default AboutMe;