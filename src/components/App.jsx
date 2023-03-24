import React, { Component } from "react";
import Form from "./formFill.jsx";
import CV from "./cv.jsx";

export default class App extends Component{

    constructor(){

        super();
        this.state={

            formFilled: JSON.parse(localStorage.getItem('formFill')).formFilled,
            data: {}

        }

        this.formFilledCheck = this.formFilledCheck.bind(this);
        this.edit = this.edit.bind(this);

    }

    formFilledCheck(data){

        this.setState({

            formFilled: true,
            data: data

        }, ()=>{
            localStorage.setItem('data', JSON.stringify(this.state))
            localStorage.setItem('formFill',JSON.stringify({
                formFilled: true
            }))
        })

    }
    edit(){

        this.setState((preValue)=>{

            return {

                formFilled : false,
                ...preValue

            }

        }, window.location.reload())

    }

    render(){

        return(
            
            <div>

                {!this.state.formFilled ? <Form data={this.state.data} formFilledCheck={this.formFilledCheck}/>: <CV edit = {this.edit}/>}

            </div>

        )


    }

}