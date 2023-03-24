import React from "react";
import ReactDOM from "react-dom/client";
import App from './components/App.jsx'

if(localStorage.getItem('data') === null){

    localStorage.setItem('data', JSON.stringify({data:{
        
        personal: [],
        education: [],
        projects: [],
        frameWork: [],
        language: [],
        experience: [],
        tools: []

    }}))
    localStorage.setItem('formFill', JSON.stringify({
        
        formFilled: false
    
    }))

}

ReactDOM.createRoot(document.getElementById('root')).render(

    <App />

);