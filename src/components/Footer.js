import React from "react";

function Footer(){
    return(
        <div className="footer" id="contact">
            <h1 className="contentHeading">Contact Me</h1>
            <div >
                    <h3>Ganesh Matkar</h3>
                    <h5>Address : </h5>
                    <p>Room No.-23, Yogesh Nivas, Nr. Smashan Bhumi, Dombivali(E), 421201</p><br />
                    <h5>Mobile No. : </h5>
                    <p>9623220247 / 7304700484</p><br />
                    <h5>Email : </h5>
                    <p>gmatkar0@gmail.com</p>
            </div>
            <footer>
                <a href="https://www.facebook.com/ganesh.matkar.31"><i class="fa fa-facebook fa-lg" /></a>
                <a href="https://accounts.google.com/signin/v2/identifier?flowName=GlifWebSignIn&flowEntry=ServiceLogin"><i class="fa fa-google fa-lg" /></a>
                <a href="https://github.com/"><i class="fa fa-github fa-lg" /></a>
                <br />
                © Copyright {new Date().getFullYear()} Ganesh Matkar
            </footer>
        </div>
    );
}

export default Footer;