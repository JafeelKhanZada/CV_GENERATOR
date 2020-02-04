import React, { Component } from 'react';
import ProfileText from './ProfileText';
import EducationText from './EducationText';
import Experience from './Experience';
class RightContent extends Component{
    render(){
        return(
            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12 bg-light container-fluid">
                <div className="row align-items-center">
                    <ProfileText />          
                    <Experience />
                    <EducationText />
                </div>
        </div>
        )
    }
}
export default RightContent;