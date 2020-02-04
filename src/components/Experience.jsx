import React, { Component } from 'react';
class Experience extends Component{
    render(){
        let TextObj = JSON.parse(localStorage.getItem('cv'));
        return(
            <div className="col-12 profie-heading row justify-content-center">
                <div className="col-3 bg-warning pull-right line align-self-center">
                </div>      
                <h1 className="col-3 profile-para-head text-center">
                                            Experience
                </h1>
                <div className="col-3 bg-warning pull-right   line  align-self-center">
                </div>
                <div className="col-10 profile-desc row justify-content-start">
                        <h3 className="Job-Title col-6">{TextObj[2].JobTitle1} :</h3>
                        <p className="Job-Desc col-12 text-left">{TextObj[2].JobDesc1}.</p>
                        <h3 className="Job-Title col-6">{TextObj[2].JobTitle2} :</h3>
                        <p className="Job-Desc col-12 text-left">{TextObj[2].JobDesc2}.</p>
                </div>
            </div>
        )
    }
}
export default Experience;