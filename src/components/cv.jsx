import React, { Component } from "react";
import './style/cv.css';
import { format, isAfter, parseISO } from 'date-fns';

export default class CV extends Component{

    constructor(){

        super();
        this.state={

            hide: false

        }

    }

    render(){

        let info = JSON.parse(localStorage.getItem('data'));
        
        let phoneNo = '';
        for(let i = 0; i < info.data.personal[0].phoneNo.length; i++){

            if(i === 3 || i === 7){

                phoneNo += '-';

            }
            phoneNo += info.data.personal[0].phoneNo.charAt(i);

        }
        
        return(

            <div id="cv" className="container">

                <div id="personal">

                    <h1 className="name">{info.data.personal[0].name}</h1>
                    <h2 className="developerType">{info.data.personal[0].developerType}</h2>

                </div>
                <div className="Socials flex">

                    <div className="phoneNo flex">

                        <h3>Phone :</h3>
                        <h3 className="value">{info.data.personal[0].countryCode} {phoneNo}</h3>

                    </div>
                    <div className="email flex">

                        <h3>Email :</h3>
                        <h3 className="value">{info.data.personal[0].email}</h3>

                    </div>
                    <div className="github flex">

                        <h3>Github :</h3>
                        <h3 className="value">{info.data.personal[0].github}</h3>

                    </div>

                </div>

                <div className="personalDescription">

                    <p>{info.data.personal[0].discription}</p>

                </div>

                <div className="Skills grid">

                    <div className="Languages">
                        <h2>Languages</h2>
                        <div className="coloum">

                            <ul>

                                {info.data.language.map((val, index)=>{

                                    return <li key={index}>{val.languages}</li>

                                })}

                            </ul>

                        </div>

                    </div>
                    <div className="frameWork">

                    <h2>FrameWork/Library</h2>
                    <div className="coloum">
                        <ul>

                            {info.data.frameWork.map((val, index)=>{

                                return <li key={index}>{val.frameWork}</li>

                            })}
                            
                        </ul>

                    </div>

                    </div>
                    <div className="tools">

                        <h2>Tools</h2>
                        <ul>

                            {info.data.tools.map((val, index)=>{

                                return <li key={index}>{val.tool}</li>

                            })}

                        </ul>

                    </div>

                </div>

                <div className="projects">

                    <h2 className="title">Projects</h2>
                    {info.data.projects.map((val, index)=>{

                        return <div key={index} className="project cvContent">

                            <div className="header">

                                <div className="flex">

                                    <h3 className="projectName">{val.projectName},</h3>
                                    <p>{val.projectSubDes}</p>

                                </div>

                            </div>

                            <h4 className="projectType">{val.projectType}</h4>

                            <p className="discription">{val.discription}</p>

                        </div>

                    })}

                </div>

                <div className="educations">

                    <h2 className="title">Education</h2>

                        {info.data.education.map((val, index)=>{

                            return <div key={index} className="education cvContent">

                                <div className="header">

                                    <div className="flex">

                                        <h3 className="institudeName">{val.institudeName},</h3>
                                        <p>{val.course}</p>

                                    </div>

                                </div>

                                <div className="date">

                                    <div className="date flex">

                                        <h3 className="startDate">{format(parseISO(val.startedDate), 'MMM yyyy')} -</h3>
                                        <h3 className="endingDate"> {

                                            isAfter(parseISO(val.endingDate), new Date(1987, 1, 11))? 'Current': format(parseISO(val.endingDate), 'MMMMMMM-yyyy')

                                        }</h3>

                                    </div>

                                </div>

                                <p className="discription">{val.discription}</p>

                            </div>

                        })}                    

                </div>

                <div className="experiences">

                    <h2 className="title">Experience</h2>
                    {info.data.experience.map((val, index)=>{

                        return <div key={index} className="experience cvContent">

                            <div className="header">

                                <div className="flex">

                                    <h3 className="jobName">{val.jobTitle},</h3>
                                    <p>{val.companyName}</p>

                                </div>  

                            </div>

                            <div className="date flex">

                                <h3 className="startDate">{format(parseISO(val.startedDate), 'MMM yyyy')}</h3>
                                <h3 className="endingDate"> - {isAfter(parseISO(val.endingDate), new Date(1987, 1, 11))? 'Current': format(parseISO(val.endingDate), 'MMMMMMM-yyyy')}</h3>

                            </div>
                            <p className="discription">{val.discription}</p>

                        </div>

                    })}

                </div>

                <div className="edit flex">
                    <button onClick={()=>{
                        localStorage.setItem('formFill',JSON.stringify({
                            formFilled: false
                        }))
                        this.props.edit();
                    
                    }}>Edit</button>
                    <button onClick={()=>{
                            localStorage.setItem('data', JSON.stringify({data:{
        
                                personal: [],
                                education: [],
                                projects: [],
                                frameWork: [],
                                language: [],
                                experience: [],
                                tools: []
                        
                            }}));
                            localStorage.setItem('formFill',JSON.stringify({
                                formFilled: false
                            }))

                    }}>New</button>
                </div>

            </div>

        )

    }

}