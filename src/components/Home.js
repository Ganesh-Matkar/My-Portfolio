import React from "react";

function Home(){
    return (
        <div className="home" id="home">
            <div className="homeHeading">
                <h1>Ganesh Matkar</h1>
                <h3>A Full Stack Web Developer</h3>
            </div>
            <img className="homeImage" src="./Images/Background.jpg" alt="Background" />
            <img className="codingImage" src="./Images/coding.png" alt="coding"/>
        </div>
    );
}

export default Home;