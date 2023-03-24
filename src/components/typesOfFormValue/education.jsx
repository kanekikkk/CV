import React, { Component } from "react";

export default class Education extends Component{

    constructor(props){

        super(props);

        if(this.props.prevValues.course === undefined){

            this.state = {

                institudeName: '',
                course: '',
                startedDate: '',
                endingDate: '',
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

        }, ()=>this.props.formUpdate(this.state, 'education', this.props.id))

    }

    render(){

        return(

            <div className="content">

                <input type="text" name="institudeName" placeholder="Institude Name" value={this.state.institudeName} onChange={this.updateState} required />
                <input type="text" name="course" placeholder="Course" value={this.state.course} onChange={this.updateState} required />
                <div>
                    <label htmlFor="startedTime">Started Date</label>
                    <input type="month" name="startedDate" id="startedTime" value={this.state.startedDate} onChange={this.updateState} required />
                </div>
                <div>
                    <label htmlFor="endingTime">Ending Date</label>
                    <input type="month" name="endingDate" id="endedTime" value={this.state.endingDate} onChange={this.updateState} required />
                </div>

                <textarea name="discription" cols="30" rows="10" required onChange={this.updateState} value={this.state.discription} placeholder="Describe what you study......"></textarea>

            </div>

        )

    }

}