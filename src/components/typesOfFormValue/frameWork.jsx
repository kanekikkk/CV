import React, { Component } from "react";

export default class FrameWork extends Component{

    constructor(props){

        super(props);

        if(this.props.prevValues.frameWork === undefined){
            
            this.state = {

                frameWork: ''

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

        }, ()=>this.props.formUpdate(this.state, 'frameWork', this.props.id))

    }

    render(){

        return(

            <div className="content">
                <input type="text" name="frameWork" placeholder="Framework" value={this.state.frameWork} onChange={this.updateState} required />

            </div>

        )

    }

}