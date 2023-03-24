import React, { Component } from "react";

export default class Languages extends Component{

    constructor(props){

        super(props);

        if(this.props.prevValues.languages === undefined){
            
            this.state = {

                languages: ''

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

        }, ()=>this.props.formUpdate(this.state, 'language', this.props.id))

    }

    render(){

        return(

            <div className="content">


                    <input type="text" placeholder="Language" name="languages" required onChange={this.updateState} value={this.state.languages}/>


            </div>

        )

    }

}