import React from "react";

function Skills(){
    return(
        <div className="skills" id="skills">
            <h1 className="contentHeading">My Skills</h1>
            <h3>HTML : </h3><progress max="100" value="90" /><br />
            <h3>CSS : </h3><progress max="100" value="80" /><br />
            <h3>Java Script : </h3><progress max="100" value="80" /><br />
            <h3>PHP : </h3><progress max="100" value="80" /><br />
            <h3>JQuery : </h3><progress max="100" value="70" /><br />
            <h3>Bootstrap : </h3><progress max="100" value="80" /><br />
            <h3>Node Js : </h3><progress max="100" value="70" /><br />
            <h3>Express : </h3><progress max="100" value="80" /><br />
            <h3>Mongo DB : </h3><progress max="100" value="80" /><br />
            <h3>MySQL : </h3><progress max="100" value="70" /><br />
            <h3>React Js : </h3><progress max="100" value="60" /><br />
        </div>
    );
}

export default Skills;