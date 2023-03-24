import React, { Component } from "react";

export default class Personal extends Component{

    constructor(props){

        super(props);

        if(props.prevValues.length != 0){

            this.state = {

                ...this.props.prevValues[0]
    
            }

        }else{

            this.state = {

                address: "",
                countryCode: "",
                developerType: "",
                discription: "",
                email: "",
                github: "",
                name: "",
                phoneNo: "",

            }

        }

        this.updateState = this.updateState.bind(this);
        this.countrySelected = this.countrySelected.bind(this);

    }

    updateState(event){

        this.setState((preValue)=>{

            return{

                ...preValue,
                [event.target.name] : event.target.value

            }
        
        
        }, ()=>this.props.formUpdate(this.state, 'personal', this.props.id))
            
    }

    countrySelected(event){

        this.setState(prev=>{

            return{

                ...prev,
                countryCode: event.target.value

            }

        })

    }

    render(){

        return(

            <div className="content">


                    <input type="text" placeholder="Name" name="name" required onChange={this.updateState} value={this.state.name} />
                    <input type="text"  placeholder="Developer Type" name="developerType" required onChange={this.updateState} value={this.state.developerType} />
                    <input type="text" name="address" placeholder="Address" onChange={this.updateState} value={this.state.address} required />
                    <div className="phoneNumber flex">

                        <select onChange={this.countrySelected}>

                            <option value="+91">Indian</option>
                            <option value="+997">Nepal</option>
                            <option value="+92">Pakistan</option>

                        </select>

                        <input type="tel" name="phoneNo" placeholder="Phone Number" maxLength="10" onChange={this.updateState} value={this.state.phoneNo} required />

                    </div>
                    <input type="text" name="email" placeholder="Email Address" onChange={this.updateState} value={this.state.email} required />
                    <input type="text" name="github" placeholder="GitHub" onChange={this.updateState} value={this.state.github} required />
                    <textarea name="discription" cols="30" rows="10" required onChange={this.updateState} value={this.state.discription} placeholder="Describe yourself...."></textarea>


            </div>

        )

    }

}