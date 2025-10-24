import React from "react";
import { Image, ProjectImg } from "./Images";
import { SocialLinks } from "./Images";
import { FaAddressBook, FaCode, FaToolbox, FaTools } from "react-icons/fa";
import { StackImg } from "./Images";
import { ScatteredImg } from "./Images";
import { SiCss3, SiFacebook, SiGmail, SiHtml5, SiReact, SiTelegram, SiWhatsapp } from "react-icons/si";
import {BiSolidPhoneCall } from "react-icons/bi";
import calculator from "./assets/react.svg";
import viewImg from "./images/viewimg.png";

export function IntroBar (){
    return(
        <>
            <div className="IntroBar">
                <h2 className="Introh2">{"<JorseDev />"}</h2>
                <SocialLinks />
            </div>
        </>
    )
}
export function Body (){
   return(
    <>
    <div className="AboutMe">
            <SiReact
                className="
                React"
            />
            <SiHtml5
                className="Html"
            />
           <SiCss3 
                className="Css"
           />
           <div className="Info">
                <Image 
                    size={100} 
                />
               <span className="InfoTxt">
                    <h2 style={{color: " #00ff88"}}>Hi, I'm Ordu Jephthah <br /> Front-End Developer</h2>

                    <p className="AboutTxt">Creative and fast learning developer focused on writing clean code and building user-friendly experiences.</p>

                    <StackImg />
               </span>
           </div>
        </div>
        
        <hr />

        <div className="AboutInfo">
            <article className="AboutArt1">
            <h3 style={{display: "flex", gap: "15px",  alignItems: "center", fontSize: "1.1em", color: "white"}}>
                <FaAddressBook style={{color: " #00ff88", fontSize: "1.7em"}}/>
                About Me
            </h3>
            <p className="AboutTxt">
                I'm Ordu Jephthah Samuel, a young passionate Front-End Developer. I build clean and responsive web applications with modern technologies. Passionate about turning ideas into reality through code.
            </p>
            </article>

            <article className="AboutArt2">
                <h3 style={{display: "flex", gap: "15px", alignItems: "center", color: "white"}}>
                    <FaToolbox style={{color: " #00ff88", fontSize: "1.4em"}}/>
                    Skills
                </h3>
                <p className="AboutTxt">
                    I work with Html, CSS, Javascript and React to build responsive web applications. I am also currently learning Python to expand my development skills.
                </p>
            </article>
            
            <ScatteredImg />
        </div>
    </>
   )
}

export function Footer (){
    return(
        <>
        <div className="Contact">
                    <BiSolidPhoneCall
                        className="Icons"
                        style={{color: "white", fontSize: "0.9em"}}
                    />
                    <p style={{fontSize: "0.7em", color: "white"}}>Contact Me</p>
                </div>
            <div className="Footer">

                <div className="ContactIcn">
                    <a 
                        href="https://wa.me/+2349038323262" 
                        target="_blank" 
                        rel="noopener noreferrer">
                            <SiWhatsapp 
                                className="Icons"
                                style={{color: " rgb(0, 255, 0)"}}
                            />
                     </a>
                    <a 
                        href="https://www.facebook.com/jephthah.ordu" 
                        target="_blank"
                        rel="noopener noreferrer">
                            <SiFacebook 
                                className="Icons"
                                style={{color: "blue"}}
                            />
                    </a>
                    <a 
                        href="https://t.me/Jorsuel"
                        target="_blank" 
                        rel="noopener noreferrer">
                            <SiTelegram 
                            className="Icons"
                            style={{color: "#0088cc"}}
                        />
                     </a>
                     <a href="mailto:jephthahordu@gmail.com?subject=Job%20Application&body=Hello,%20I%20am%20ready20for%20any%20Front%20End%20Developer%20job" 
                     target="_blank"
                     rel="noopener noreferrer">
                        <SiGmail  
                        className="Icons"
                        style={{color: "#D14836"}}/>
                     </a>
                </div>

                <div className="ContactTxt">
                    <p style={{fontSize: "0.9em"}}>For collaborations and hiring <br /> I'm Just a call or chat away</p>
                </div>
            </div>
        </>
    )
}
export function Projects(){
    return(
        <>
        <div className="Contact">
                    <FaCode
                        className="Icons"
                        style={{color: "white", fontSize: "1em"}}
                    />
                    <p style={{fontSize: "0.7em", color: "white"}}>Projects</p>
                </div>
            <div className="Projects">
                <div className="ProjectCont">
                    <ProjectImg 
                        src={viewImg} 
                        width={230} 
                        height={170}
                        href={""}
                        name={"View"}
                        info={"A free, interesting, entertaining movie app focused on giving free movies to users to keep those who can't afford to buy movies."}
                        warning={
                            <p style={{color: "red", boxShadow: '0 0 5px white', display: "flex", width: "fit-content", padding: "5px", borderRadius: "9px", fontSize: "0.7em", alignItems: "center", gap: "8px"}}>
                                <FaTools color="red" className="Icons"/> Still Building
                            </p>
                        }
                    />
                    <ProjectImg 
                     src={calculator}
                     width={100}
                     height={100}
                     name={"Jorse Calculator"}
                     info={"Simple but effective free calculator"}
                     href={"https://jorse-calculator.vercel.app/"}
                     />
                </div>
            </div>
        </>
    )
}
export default function Jorse() {
    return(
        <>
            <IntroBar />
            <Body />
            <Projects />
            <Footer />
        </>
    )
}