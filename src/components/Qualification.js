import React from "react";

function Qualification(){
    return (
        <div className="qualification" id="Qualification">
        <h1 className="contentHeading">My Qualification</h1>
        <div className="row">
            <div className="col-lg-4">
                <div className="card">
                    <div className="card-header">BSC CS</div>
                    <div className="card-body">Mumbai University<br/>Kankavli College Kankavli<br/>Grade: A<br/>Year: May-2017</div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="card">
                    <div className="card-header">HSC</div>
                    <div className="card-body">Maharashtra State Board<br/>Kasarde Junior College<br/>Percentage: 66.31<br/>Year: Feb-2014</div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="card">
                    <div className="card-header">SSC</div>
                    <div className="card-body">Maharashtra State Board<br/>Shirgaon Highschool Shirgaon<br/>Percentage: 86.55<br/>Year: Mar-2012 </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Qualification;