import React, { Component } from 'react';
import {Route, withRoute} from 'react-router-dom';
import { Link } from 'react-router-dom';
class EducationForm extends Component{
    SubmitData(){
        let DegreeTitle1 = document.getElementById('Degree-Title1').value;
        let DegreeTitle2 = document.getElementById('Degree-Title2').value;
        let InstituteName1 = document.getElementById('Institute-1').value;
        let InstituteName2 = document.getElementById('Institute-2').value;
        let YearOfGraduation1 = document.getElementById('Year-of-Graduation-1').value;
        let YearOfGraduation2 = document.getElementById('Year-of-Graduation-2').value;
        let Facebook = document.getElementById('Facebook').value;
        let LinkedIn = document.getElementById('Linkedin').value;
        let Twitter = document.getElementById('Twitter').value;
        let Instagram = document.getElementById('Instagram').value;
        var EducationObj = JSON.parse(localStorage.getItem('cv'));
        EducationObj.push({
            DegreeTitle1,
            DegreeTitle2,
            InstituteName1,
            InstituteName2,
            YearOfGraduation1,
            YearOfGraduation2,
            Facebook,
            Instagram,
            Twitter,
            LinkedIn 
        })
        localStorage.setItem('cv',JSON.stringify(EducationObj))
    }
    render(){
        return(
            <div className="bg-warning formz">
            <h1>CV BUILDER</h1>
            <h1>STEP 1:</h1>
            <form>
                <h1>Should you have any questions, please do not hesitate to contact me :</h1>
                <div className="contentform">
                    <h2>Education</h2>
                <div className="leftcontact">
                    <div className="form-group">
                        <p>Degree Title #1<span>*</span></p>
                        <span className="icon-case"><i className="fa fa-user"></i></span>
                        <input type="text" name="Degree-Title1" id="Degree-Title1"/>
                    </div> 
                    <div className="form-group">
                        <p>Institute Name <span>*</span></p>
                        <span className="icon-case"><i className="fa fa-at"></i></span>
                        <input type="text" name="Institute-1" id="Institute-1"/>
                    </div>
                    <div className="form-group">
                        <p>Year Of Graduation <span>*</span></p>    
                        <span className="icon-case"><i className="fa fa-info"></i></span>
                        <input type="text" name="Year-of-Graduation-1" id="Year-of-Graduation-1" />
                    </div> 
                    <div className="form-group">
                        <p>Social Links <span>*</span></p>    
                        <span className="icon-case"><i className="fa fa-facebook-square"></i></span>
                        <input type="email" name="Facebook" id="Facebook" />
                    </div> 
                    <div className="form-group">
                        <span className="icon-case"><i className="fa fa-instagram"></i></span>
                        <input type="email" name="Instagram" id="Instagram" />
                    </div> 
                </div>
                <div className="rightcontact">  
                    <div className="form-group">
                        <p>Degree Title #2 <span>*</span></p>
                        <span className="icon-case"><i className="fa fa-user"></i></span>
                        <input type="text" name="Degree-Title-2" id="Degree-Title2"/>
                    </div>  
                    <div className="form-group">
                        <p>Institute Name <span>*</span></p>  
                        <span className="icon-case"><i className="fa fa-at"></i></span>
                        <input type="text" name="Institute-2" id="Institute-2"/>
                    </div>
                    <div className="form-group">
                        <p>Year Of Graduation <span>*</span></p>
                        <span className="icon-case"><i className="fa fa-info"></i></span>
                        <input type="text" name="Year-of-Graduation-2" id="Year-of-Graduation-2"/>
                    </div>
                    <div className="form-group">
                        <p>Social Links <span>*</span></p>    
                        <span className="icon-case"><i className="fa fa-linkedin"></i></span>
                        <input type="email" name="Linkedin" id="Linkedin" />
                    </div> 
                    <div className="form-group">
                        <span className="icon-case"><i className="fa fa-twitter"></i></span>
                        <input type="email" name="Twitter" id="Twitter" />
                    </div> 
            </div>
        </div>
            <Link className="link" to='/step3'><button type="button" onClick={this.SubmitData} className="bouton-contact">Next</button></Link>
        </form> 
    </div>
        )
    }
}
export default EducationForm;