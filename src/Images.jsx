import React from "react";
import {FaCircle, FaCode, FaPalette, FaUpload, FaUserCircle} from "react-icons/fa";
import { FaShareFromSquare } from "react-icons/fa6";
import { SiCss3, SiFacebook, SiGit, SiGithub, SiHtml5, SiJavascript, SiLinkedin, SiPython, SiReact, SiWhatsapp } from "react-icons/si";
export function Image({size}) {
    return(
        <img 
            src="src/images/JorseDev - Copy.jpg" 
            alt="My Image" 
            width={size}
            height={size}
            className="IntroImg"
        />
    )
}
export function ProjectImg({src, width, height, name, info, href, warning}) {
    return(
        
        <div className="ProjectDemo">
            <div>
                {warning}
            </div>
            <img 
            src={src} 
            alt="My Project"
            width={width}
            height={height}
            className="ProjectImg"
            />
            <div className="Desc">
                <FaPalette color=" #00ff88" fontSize="1em"/>
                <p className="AboutTxt">Web App</p>
            </div>
            <div className="ProjectInfo">
                <h3 style={{color: " #00ff88", fontSize: "1.3em"}}>
                    {name}
                </h3>
                <p className="AboutTxt">
                    {info}
                </p>
            </div>
            <div className="TechStack">
                <div className="Txt">
                    <FaCode style={{color: "white"}}/> 
                    <p style={{color: "white", fontSize: "0.8em"}}>TECH STACK</p>
                </div>

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
                        <p className="StackName">Javascript</p>
                    </div>
                </div>
            </div>
            <a href={href} target="_self" rel="noopener noreferrer" style={{textDecoration: "none"}}>
                <button className="DemoBtn">
                    Live Demo <FaShareFromSquare />
                </button>
            </a>
        </div>
    )
}
export function SocialLinks (){
    return(
        <>
            <div className="SocialIcons">
                <a 
                    href="https://wa.me/+2349038323262" target="_blank" 
                    rel="noopener noreferrer">
                        <SiWhatsapp 
                        className="Whatsapp Icons"
                        style={{color: " rgb(0, 255, 0)"}}
                        />
                </a>
                <a 
                    href="https://github.com/Jephthah-spec" 
                    target="_blank" 
                    rel="noopener noreferrer">
                        <SiGithub 
                        className="Github Icons"
                        style={{color: "white"}}
                        />
                </a>
                <a 
                    href="https://www.facebook.com/jephthah.ordu" 
                    target="_blank" 
                    rel="noopener noreferrer">
                        <SiFacebook 
                        className="Facebook Icons"
                        style={{color: "blue"}}
                        />
                </a>
                <a 
                    href="https://www.linkedin.com/jephthah-ordu-4618bb7345" 
                    target="_blank" 
                    rel="noopener noreferrer">
                        <SiLinkedin
                        className="Facebook Icons"
                        style={{color: "blue"}}
                        />
                </a>
            </div>
        </>
    )
}

export function StackImg() {
    return(
        <>
            <div className="Stack">
               <div className="StackRoll">
               <div className="StackIcn">
                    <SiHtml5 
                        style={{color: "orange", fontSize: "1.2em"}}
                    />
                    <p className="StackName">Html5</p>
                </div>
                <div className="StackIcn">
                    <SiCss3
                        style={{color: "blue", fontSize: "1.2em"}}
                    />  
                    <p className="StackName">Css3</p>
                </div>
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
                    <p className="StackName">Javascript</p>
                </div>
                <div className="StackIcn">
                    <SiGit
                        style={{color: "rgb(235, 98, 56)", fontSize: "1.2em"}}
                    />  
                    <p className="StackName">Git</p>
                </div>
                <div className="StackIcn">
                    <SiGithub
                        style={{color: "white", fontSize: "1.2em"}}
                    />  
                    <p className="StackName">Github</p>
                </div>
                <div className="StackIcn">
                    <SiPython
                        style={{color: "#306998", fontSize: "1.2em"}}
                    />  
                    <p className="StackName">Python</p>
                </div>
               </div>
            </div>
        </>
    )
}

export function ScatteredImg() {
    return(
        <>
            <div className="Scattered">
                <SiHtml5 style={{color: "orange", fontSize: "1.6em"}}/>
                <SiCss3 style={{color: "blue", fontSize: "1.6em"}}/>
                <SiJavascript style={{color: "red", fontSize: "1.6em"}}/>
                <SiReact style={{color: "rgb(11, 170, 214)", fontSize: "1.6em"}}/>
                <SiGit style={{color: "rgb(235, 98, 56)", fontSize: "1.6em"}}/>
                <SiGithub style={{color: "white", fontSize: "1.6em"}}/>
                <SiPython style={{color: "#306998", fontSize: "1.6em"}}/>  
            </div>
        </>
    )
}