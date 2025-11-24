import React from "react";
import { Image, ProjectImg } from "./Images";
import { SocialLinks } from "./Images";
import { FaAddressBook, FaCode, FaToolbox, FaTools } from "react-icons/fa";
import { StackImg } from "./Images";
import { ScatteredImg } from "./Images";
import { SiCss3, SiFacebook, SiGmail, SiHtml5, SiJavascript, SiReact, SiTelegram, SiWhatsapp } from "react-icons/si";
import {BiSolidPhoneCall } from "react-icons/bi";
import calculator from "./assets/react.svg";
import viewImg from "./images/viewimg.png";
import cocoyamMarketplace from "./images/cocoyam-marketplace.jpg";

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

            <div className="ContactTxt">
                    <p style={{fontSize: "0.9em"}}>For collaborations and hiring <br /> I'm Just a call or chat away</p>
                </div>
                
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
                     <a href="mailto:jephthahordu@gmail.com?subject=Job%20Application&body=Hello,%20I%20am%20ready%20for%20any%20Front%20End%20Developer%20job" 
                     target="_blank"
                     rel="noopener noreferrer">
                        <SiGmail  
                        className="Icons"
                        style={{color: "#D14836"}}/>
                     </a>
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
                    info={"A free, interesting, entertaining movie app focused on giving free movies to users who can't afford to buy movies."}
                    warning={
                        <p style={{color: "red", boxShadow: '0 0 5px white', display: "flex", width: "fit-content", padding: "5px", borderRadius: "9px", fontSize: "0.7em", alignItems: "center", gap: "8px"}}>
                            <FaTools color="red" className="Icons"/> Still Building
                        </p>
                        }
                    techstack={
                        <div className="Icns">
                            <div className="StackIcn">
                                <SiReact 
                                    style={{color: "rgb(11, 170, 214)", fontSize: "1.2em"}}
                                />
                                <p className="StackName">React</p>
                            </div>
                            <div className="StackIcn">
                                <SiJavascript
                                    style={{color: "red", fontSize: "1.2em"}}
                                />
                                <p className="StackName">JavaScript</p>
                            </div>
                        </div>
                        }
                    />
                    <ProjectImg 
                     src={calculator}
                     width={100}
                     height={100}
                     name={"Jorse Calculator"}
                     info={"Simple but effective free calculator"}
                     href={"https://jorse-calculator.vercel.app/"}
                     techstack={
                        <div className="Icns">
                            <div className="StackIcn">
                                <SiReact 
                                    style={{color: "rgb(11, 170, 214)", fontSize: "1.2em"}}
                                />
                                <p className="StackName">React</p>
                            </div>
                            <div className="StackIcn">
                                <SiJavascript
                                    style={{color: "red", fontSize: "1.2em"}}
                                />
                                <p className="StackName">JavaScript</p>
                            </div>
                        </div>
                        }
                     />
                     <ProjectImg 
                     src={cocoyamMarketplace}
                     width={100}
                     height={100}
                     name={"Cocoyam Marketplace"}
                     info={"An online marketplace where farmers sell their farm produce directly to consumers"}
                     href={""}
                     techstack={
                        <div className="Icns">
                            <div className="StackIcn">
                                <SiHtml5 
                                    style={{color: "orange", fontSize: "1.2em"}}
                                />
                                <p className="StackName">Html</p>
                            </div>
                            <div className="StackIcn">
                                <SiCss3
                                    style={{color: "blue", fontSize: "1.2em"}}
                                />
                                <p className="StackName">Css</p>
                            </div>
                            <div className="StackIcn">
                                <SiJavascript
                                    style={{color: "red", fontSize: "1.2em"}}
                                />
                                <p className="StackName">JavaScript</p>
                            </div>
                        </div>
                        }
                     />
                </div>
            </div>
        </>
    )
}

export function Practice({onClick, onPlay}) {
    return(
        <div>
            <Button onClick={onClick}>
                Click Me
            </Button>
            <Button onClick={onPlay}>
                Play Me
            </Button>
        </div>
    )
}
function Button({onClick, children}){
    return(
        <button onClick={onClick}>
            {children}
        </button>
    )
}
import { useState } from "react";
import { Sculpture } from "./Sculpture";
export function ImageCarousel (){
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false)
    const Next = index < Sculpture.length - 1;

    function handleNextClick() {
        if (Next) {
            setIndex(index + 1)
        }else{
            setIndex(0)
        }
    }

    function handleShowMore() {
        setShowMore(!showMore)
    }

    let sculpture = Sculpture[index]

    return(
        <div className="shoe">
            <button onClick={handleNextClick}>
                Next
            </button>
            <img 
                src={sculpture.src} alt={sculpture.name} 
            />
            <h3>
                {sculpture.name} from artist {sculpture.artist}
            </h3>
            <h3>
                {index + 1} of {Sculpture.length}
            </h3>

            <button onClick={handleShowMore}>
                {showMore ? "Hide" : "Show"} details
            </button>
            {showMore && <p>{sculpture.description}</p>}
        </div>

    )
}

export function Chat() {
    const [to, setTo] = useState("Jephthah")
    const [message, setMessage] = useState("");

    function handleSubmit(e) {
        e.preventDefault()
        setTimeout(()=>{
            alert(`You sent ${message} to ${to}`)
            setMessage("")
        }, 10000)
    }

    return(
        <div className="shoe">
            <form onSubmit={handleSubmit}>
                <label>
                    To: {" "}
                    <select 
                        value={to}
                        onChange={e => setTo(e.target.value)}
                    >
                        <option value="Alice">Alice</option>
                        <option value="Jephthah">Jephthah</option>
                    </select>
                </label>

                <textarea 
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    placeholder="Message"
                />

                <input type="submit" value="Send" />
            </form>
        </div>
    )
}
export default function Jorse() {
    return(
        <>
            <IntroBar />
            <Body />
            <Projects />
            <Footer />
            <Practice
             onClick={()=>alert("Clilcked, and playing")}
             onPlay={()=>alert("Actively playing")}
             />
             <ImageCarousel />
             <Chat />
        </>
    )
}