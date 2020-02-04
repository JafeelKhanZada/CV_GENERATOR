import React, { Component } from 'react';
import LeftContent from './LeftContent';
import RightContent from './RightContent';
class Profile extends Component{
    render(){
        return(
            <div className="container bg-warning main">
                <div className="row">
                   <LeftContent />
                    <RightContent />
                </div>
            </div>
        )
    }
}
export default Profile;