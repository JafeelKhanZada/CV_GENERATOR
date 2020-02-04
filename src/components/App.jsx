import React, { Component } from 'react';
import Profile from './Profile';
import Form from './FormMain';
import {Route, withRouter } from 'react-router-dom';
import ExperienceForm from './ExperienceForm';
import EducationForm from './EducationForm';
class App extends Component{
    render(){
        return(
            <div>
                <Route exact path="/" component = {Form} />
                <Route exact path="/step3" component = {ExperienceForm} />
                <Route exact path="/cv" component = {Profile} />
                <Route exact path="/step2" component = {EducationForm} />
            </div>
        )
    }
}   
export default App;