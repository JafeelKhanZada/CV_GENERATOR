import React, { Component } from 'react';
class LeftContent extends Component{
    render(){
        let LocalObj = JSON.parse(localStorage.getItem('cv'))
        console.log(LocalObj[0])
        return(
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-10 left">
            <div className="row justify-content-center align-items-center">
                <div className=" col-7 img-profile">
                <img src={'./img/'+LocalObj[0].Gender}  className="Profile-Pic img-fluid bg-light" alt=""/>
                </div>
                <h1 className="text-center col-12 name">
                {LocalObj[0].FirstName}
                <br/>
                {LocalObj[0].LastName}
                </h1>
                <div className="col-10">
                    <h6 className="text-center mb-3">({LocalObj[0].DateBirth})</h6>
                </div>
                <div className="col-10 social">
                    <div className="row justify-content-center">
                        <ul className="col-10 row justify-content-center">
                            <li><a href={LocalObj[1].Facebook}><i className="fa fa-facebook"></i></a></li>
                            <li><a href={LocalObj[1].Instagram}><i className="fa fa-instagram"></i></a></li>
                            <li><a href={LocalObj[1].LinkedIn}><i className="fa fa-linkedin"></i></a></li>
                            <li><a href={LocalObj[1].Twitter}><i className="fa fa-twitter"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-12 title">
                <p className="title-text text-center text-warning">{LocalObj[0].JobTitle}</p>
                </div>
                <h1 className="text-center col-12 contact-head">Contact</h1>
                <div className="col-md-10 col-lg-10 col-xl-10 col-xs-12 col-sm-12 contact-details mx-auto">
                <ul>
                    <li><i className="fa fa-phone"></i><span>{LocalObj[0].PhoneNumber}</span></li>
                    <li><i className="fa fa-envelope"></i><span>{LocalObj[0].Email}</span></li>
                    <li><i className="fa fa-home        "></i><span>{LocalObj[0].Address}</span></li>
                    <li><i className="fa fa-globe"></i><span>{LocalObj[0].Website}</span></li>
                </ul>
            </div>
                <h1 className="text-center col-12 contact-head">
                Hobbies
                </h1>
                <div className="col-md-11 col-lg-11 col-xl-11 col-xs-12 col-sm-12 contact-hobbies    mx-auto">
                <ul>
                    <li className="col-6"><i className="fa fa-plane"></i><span>Traveling</span></li>
                    <li className="col-6"><i className="fa fa-book"></i><span>Reading</span></li>
                    <li className="col-6"><i className="fa fa-music        "></i><span>Music</span></li>
                    <li className="col-6"><i className="fa fa-pencil"></i><span>writing</span></li>
                </ul>
            </div>
            </div>
        </div>
        )
    }
}
export default LeftContent;