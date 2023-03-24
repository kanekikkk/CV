import React, { Component } from "react";
import './style/form.css';
import Personal from "./typesOfFormValue/personal.jsx";
import Projects from "./typesOfFormValue/projects.jsx";
import Education from "./typesOfFormValue/education.jsx";
import FrameWork from "./typesOfFormValue/frameWork.jsx";
import Languages from "./typesOfFormValue/languages.jsx";
import Experience from "./typesOfFormValue/experience.jsx";
import Tools from "./typesOfFormValue/tools.jsx";

export default class Form extends Component{

    constructor(){

        super();
        let data = JSON.parse(localStorage.getItem('data'));

        this.state = {

            ...data.data

        }

        this.fieldAdding = this.fieldAdding.bind(this);
        this.addMore = this.addMore.bind(this);
        this.formSubmit = this.formSubmit.bind(this);

    }
    fieldAdding(values, stateType, id){

        this.setState(preValue=>{

            return{

                ...preValue,
                [stateType]: [...preValue[stateType].slice(0,parseInt(id)), values, ...preValue[stateType].slice(parseInt(id + 1), -1)]             

            }

        }, ()=>console.log(this.state))

    }
    addMore(type){

        this.setState(preValue=>{

            return{

                ...preValue,
                [type]: [...preValue[type], {}]

            }

        }, ()=>console.log(this.state));

    }

    formSubmit(event){

        event.preventDefault();
        console.log(this.state);
        this.props.formFilledCheck(this.state);

    }

    render(){

        return(

            <div className="container">

                <form onSubmit={this.formSubmit}>
                    
                    <fieldset>

                        <h1>Personal</h1>
                        <Personal key={0} id={0} formUpdate={this.fieldAdding} prevValues={this.state.personal}/>            

                    </fieldset>

                    <fieldset>

                        <div className="flex">

                            <h1>Education</h1>
                            <div onClick={()=>this.addMore('education')} className="addButton">Add</div>

                        </div>

                        {
                            (this.state.education).map((value, index) =>{

                                return <Education key={index} id={index} formUpdate={this.fieldAdding} prevValues={this.state.education[index]}/>     

                            })
                        }

                    </fieldset>

                    <fieldset>

                        <div className="flex">

                            <h1>Projects</h1>
                            <div onClick={()=>this.addMore('projects')} className="addButton">Add</div>

                        </div>
                        {
                            (this.state.projects).map((value, index) =>{

                                return <Projects key={index} id={index} formUpdate={this.fieldAdding} prevValues={this.state.projects[index]} />

                            })
                        }

                    </fieldset>   

                    <fieldset>

                        <div className="flex">

                            <h1>Experience</h1>
                            <div onClick={()=>this.addMore('experience')} className="addButton">Add</div>

                        </div>

                        {
                            this.state.experience.map((value, index) =>{

                                return <Experience key={index} id={index} formUpdate={this.fieldAdding} prevValues={this.state.experience[index]} />

                            })
                        }

                    </fieldset>   

                    <fieldset>

                        <div className="flex">

                            <h1>Framework/Library</h1>
                            <div onClick={()=>this.addMore('frameWork')} className="addButton">Add</div>

                        </div>

                        {
                            (this.state.frameWork).map((value, index) =>{

                                return <FrameWork key={index} id={index} formUpdate={this.fieldAdding} prevValues={this.state.frameWork[index]} />

                            })
                        }

                    </fieldset>

                    <fieldset>

                        <div className="flex">

                            <h1>Languages</h1>
                            <div onClick={()=>this.addMore('language')} className="addButton">Add</div>

                        </div>

                        {
                            this.state.language.map((value, index) =>{

                                return <Languages key={index} id={index} formUpdate={this.fieldAdding} prevValues={this.state.language[index]} />

                            })
                        }

                    </fieldset>   

                    <fieldset>

                        <div className="flex">

                            <h1>Tools</h1>
                            <div onClick={()=>this.addMore('tools')} className="addButton">Add</div>

                        </div>

                        {
                            this.state.tools.map((value, index) =>{

                                return <Tools key={index} id={index} formUpdate={this.fieldAdding} prevValues={this.state.tools[index]} />

                            })
                        }

                    </fieldset>   

                    <button>Submit</button>                

                </form>                

            </div>

        )


    }

}