import React, { Component } from 'react';
import {Route, withRouter } from 'react-router-dom';
import { Link } from "react-router-dom"
class Form extends Component{
    SubmitLocal(){
        let Gender;
        let FirstName = document.getElementById('FirstName').value;
        let LastName = document.getElementById('SecondName').value;
        let Email = document.getElementById('email').value;
        let JobTitle = document.getElementById('JobTitle').value;
        let Address = document.getElementById('Address').value;
        let Website = document.getElementById('Website').value;
        let PhoneNumber = document.getElementById('phone').value;
        let DateBirth = document.getElementById('date').value;
        let Male = document.getElementById('Male');
        let Female = document.getElementById('Female');
        if(Female.checked){
            Gender = Female.value + '.png';
        }
        else{
            Gender = Male.value + '.png';
        }
        if(localStorage.getItem('cv')){
            localStorage.setItem('cv', "")
        }
        localStorage.setItem('cv', JSON.stringify([{FirstName, LastName, Email, JobTitle, Address, Website, PhoneNumber,DateBirth,Gender}]));
        let CheckBoxValue = 0;
        let CheckBoxes = document.getElementsByClassName('CheckBoxes');
        for(let i=0; i<CheckBoxes.length; i++){
            if(CheckBoxes[i].checked){
                CheckBoxValue++;
            }
        }
        console.log(CheckBoxValue)
    }
    render(){
        return(
            <div className="bg-warning formz">
            <h1>CV BUILDER</h1>
            <h1>STEP 1:</h1>
            <form>
                <h1>Should you have any questions, please do not hesitate to contact me :</h1>
                <div className="contentform">
                <div className="leftcontact">
                    <div className="form-group">
                        <p>First Name<span>*</span></p>
                        <span className="icon-case"><i className="fa fa-user"></i></span>
                        <input type="text" name="FirstName" id="FirstName"/>
                    </div> 
                    <div className="form-group">
                        <p>Job Title <span>*</span></p>
                        <span className="icon-case"><i className="fa fa-at"></i></span>
                        <input type="text" name="JobTitle" id="JobTitle"/>
                    </div>
                    <div className="form-group">
                        <p>E-mail <span>*</span></p>    
                        <span className="icon-case"><i className="fa fa-envelope-o"></i></span>
                        <input type="email" name="email" id="email" />
                    </div>  
                    <div className="form-group">
                        <p>Address <span>*</span></p>
                        <span className="icon-case"><i className="fa fa-location-arrow"></i></span>
                        <input type="text" name="Address" id="Address"/>
                    </div>
                    <div className="form-group">
                        <p>Website/Resumes <span>*</span></p>   
                        <span className="icon-case"><i className="fa fa-globe"></i></span>
                        <input type="text" name="Website" id="Website"/>
                    </div>  
                </div>
                <div className="rightcontact">  
                    <div className="form-group">
                        <p>Second Name <span>*</span></p>
                        <span className="icon-case"><i className="fa fa-user"></i></span>
                        <input type="text" name="SecondName" id="SecondName"/>
                    </div>  
                    <div className="form-group">
                        <p>Phone number <span>*</span></p>  
                        <span className="icon-case"><i className="fa fa-phone"></i></span>
                        <input type="text" name="phone" id="phone"/>
                    </div>
                    <div className="form-group">
                        <p>Date Of Birth <span>*</span></p>
                        <span className="icon-case"><i className="fa fa-info"></i></span>
                        <input type="date" name="date" id="date"/>
                    </div>
                    <div className="form-group row gender">
                        <p className="col-12">Gender <span>*</span></p>                    
                        <div className="row justify-content-center col-10">
                            <input type="radio" className="col-1" id="Male" name="Male" value="male" />
                            <span className="col-3">Male</span>
                            <input type="radio" className="col-1" id="Female" name="Female" value="female" />
                            <span className="col-2">Female</span>
                        </div>
                    </div>
                    <div className="form-group row">
                        <p className="col-12">Hobbies <span>*</span></p>                    
                        <div className="col-6">
                            <input type="checkbox" className="CheckBoxes" id="Traveling" name="Traveling" value="Apple" />
                            <label htmlFor="Traveling"><span>Traveling</span></label>
                        </div>
                        <div className="col-6">
                            <input type="checkbox" className="CheckBoxes" id="Snooker" name="Snooker" value="Apple" />
                            <label htmlFor="Snooker"><span>Snooker</span></label>
                        </div>
                        <div className="col-6">
                            <input type="checkbox" className="CheckBoxes" id="Gaming" name="Gaming" value="Apple" />
                            <label htmlFor="Gaming"><span>Gaming</span></label>
                        </div>
                        <div className="col-6">
                            <input type="checkbox" className="CheckBoxes" id="Reading" name="Reading" value="Apple" />
                            <label htmlFor="Reading"><span>Reading</span></label>
                        </div>
                        <div className="col-6">
                            <input type="checkbox" className="CheckBoxes" id="Writing" name="Writing" value="Apple" />
                            <label htmlFor="Writing"><span>Writing</span></label>
                        </div>
                        <div className="col-6">
                            <input type="checkbox" className="CheckBoxes" id="Coding" name="Coding" value="Apple" />
                            <label htmlFor="Coding"><span>Coding</span></label>
                        </div>
                    </div>
            </div>
        </div>
            <Link className="link" to='/step2'><button type="button" onClick={this.SubmitLocal} role="button" aria-disabled="true" className="disabled bouton-contact" >Next</button></Link>
        </form> 
    </div>
            )
    }
}
export default Form;