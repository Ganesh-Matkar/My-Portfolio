import React from "react";

function About(){
    return(
        <div className="about" id="about">
            <h1 className="contentHeading">About Me</h1>
            <img className="myImage" src="./Images/ganesh.png" alt="myimage"></img>
            <h4 className="aboutMyself">I am Ganesh Matkar. I am a full stack web developer. I have completed my graduation from 
                Mumbai University from BSc Computer Science Stream. I can develope front-end as well as back-end
                of a website.
            </h4>
        </div>
    );
}

export default About;