import React, { Component } from 'react';
class EducationText extends Component{
    render(){
        let TextObj = JSON.parse(localStorage.getItem('cv'));
        return(
            <div className="col-12 profie-heading row justify-content-center">
                <div className="col-3 bg-warning pull-right line align-self-center">
                </div>      
                <h1 className="col-3 profile-para-head text-center">
                                            Education
                </h1>
                <div className="col-3 bg-warning pull-right   line  align-self-center">
                </div>
                <div className="col-10 profile-desc row justify-content-start">
                        <div className="col-6">
                            <h4 className="Job-Title col-12 deg-title">BS({TextObj[1].DegreeTitle1})</h4>
                            <h5 className="Job-Title col-12 bggray">{TextObj[1].Institute1}</h5>
                            <h6 className="col-12 bggray">({TextObj[1].YearOfGraduation1})</h6>
                        </div>
                        <div className="col-6">
                            <h4 className="Job-Title col-12 deg-title">{TextObj[1].DegreeTitle2}</h4>
                            <h5 className="Job-Title col-12 bggray">{TextObj[1].Institute2}</h5>
                            <h6 className="col-12 bggray">({TextObj[1].YearOfGraduation2})</h6>
                        </div>
                </div>
            </div>
        )
    }
}
export default EducationText;