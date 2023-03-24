import React, { Component } from "react";

export default class Tools extends Component{

    constructor(props){

        super(props);

        if(this.props.prevValues.tool === undefined){
            
            this.state = {

                tool: ''

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

        }, ()=>this.props.formUpdate(this.state, 'tools', this.props.id))

    }

    render(){

        return(

            <div className="content">
                <input type="text" name="tool" placeholder="Tool" value={this.state.tool} onChange={this.updateState} required />

            </div>

        )

    }

}