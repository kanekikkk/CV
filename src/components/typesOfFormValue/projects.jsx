import React, { Component } from "react";

export default class Projects extends Component{

    constructor(props){

        super(props);

        if(this.props.prevValues.projectName === undefined){
            
            this.state = {

                projectName: '',
                description: '',
                projectType: '',
                projectSubDes: '',
                discription: ''

            }

        }else{

            this.state = {

                ...this.props.prevValues

            }

        }
        this.updateState = this.updateState.bind(this);

    }

    updateState(event){

        this.setState((preValue)=>{

            return{

                ...preValue,
                [event.target.name] : event.target.value

            }

        }, ()=>this.props.formUpdate(this.state, 'projects', this.props.id))

    }

    render(){

        return(

            <div className="content">

                <input type="text" name="projectName" placeholder="Project Name" value={this.state.projectName} onChange={this.updateState} required/>
                <input type="text" name="projectSubDes" placeholder="Project Sub Describe" value={this.state.projectSubDes} onChange={this.updateState} required/>
                <input type="text" name="projectType" placeholder="Project Type" value={this.state.projectType} onChange={this.updateState} required/>
                <textarea name="discription" cols="30" rows="10" required onChange={this.updateState} value={this.state.discription} placeholder="Describe your project...."></textarea>

            </div>

        )

    }

}