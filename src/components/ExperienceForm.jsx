import React, { Component } from 'react';
import {Route, withRoute} from 'react-router-dom';
import { Link } from 'react-router-dom';
class ExperienceForm extends Component{
    SubmitRightData=()=>{
        let JobTitle1 = document.getElementById('Job-Title-1').value;
        let JobTitle2 = document.getElementById('Job-Title-2').value;
        let JobDesc1 = document.getElementById('Job-Desc-1').value;
        let JobDesc2 = document.getElementById('Job-Desc-2').value;
        let AboutText = document.getElementById('AboutText').value;
        var ObjLocalStorage = JSON.parse(localStorage.getItem('cv'));
        ObjLocalStorage.push({
            JobTitle1,
            JobDesc1,
            JobTitle2,
            JobDesc2,
            AboutText 
        })
        localStorage.setItem('cv',JSON.stringify(ObjLocalStorage))
    }
    render(){
        return(
            <div className="bg-warning formz">
            <h1>STEP 2:</h1>
            <form>
                <h1>Should you have any questions, please do not hesitate to contact me :</h1>
                <div className="contentform">
                <h2>Experience:</h2>
                <div className="leftcontact">
                    <div className="form-group">
                        <p>Job Title #1 <span>*</span></p>
                        <span className="icon-case"><i className="fa fa-user-circle"></i></span>
                        <input type="text" name="Job-Title-1" id="Job-Title-1"/>
                    </div> 
                    <div className="form-group">
                        <p>Job Description <span>*</span></p>
                        <span className="icon-case"><i className="fa fa-info"></i></span>
                        <textarea name="" id="Job-Desc-1" cols="30" rows="10"></textarea>
                    </div>
                    
                </div>
                <div className="rightcontact">  
                <div className="form-group">
                        <p>Job Title #2 <span>*</span></p>
                        <span className="icon-case"><i className="fa fa-user-circle"></i></span>
                        <input type="text" name="Job-Title-2" id="Job-Title-2"/>
                    </div> 
                    <div className="form-group">
                        <p>Job Description <span>*</span></p>
                        <span className="icon-case"><i className="fa fa-info"></i></span>
                        <textarea name="" id="Job-Desc-2" cols="30" rows="10"></textarea>
                    </div>
            </div>
            <div className="form-group">
                         <p>About <span>*</span></p>
                        <span className="icon-case"><i className="fa fa-info"></i></span>
                        <textarea name="" id="AboutText" cols="30" rows="10"></textarea>
                    </div>  
        </div>
            <Link className="link" to='/cv'><button type="button" onClick={this.SubmitRightData} className="bouton-contact">Next</button></Link>
        </form> 
    </div>
        )
    }
}
export default ExperienceForm;