import React, { Component } from 'react';
class ProfileText extends Component{
    render(){
        let TextObj = JSON.parse(localStorage.getItem('cv'));
        return(
            <div className="col-12      profie-heading row justify-content-center">
                <div className="col-3    bg-warning pull-right   line align-self-center">
                </div>      
                    <h1 className="col-3    profile-para-head    text-center">
                                            About   
                    </h1>
                    <div className="col-3    bg-warning pull-right   line  align-self-center">
                    </div>
                    <div className="col-12 profile-desc row justify-content-center">
                        <p className="col-10 ">
                                {TextObj[2].AboutText}
                                
                        </p>
                    </div>
                </div>
        )
    }
}
export default ProfileText;
