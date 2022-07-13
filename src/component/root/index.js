import React from 'react'
import { Redirect, useLocation } from 'react-router-dom'


async function login(){

    const response = await fetch('http://localhost:8080/login', {
        method : 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify({
            username : 'mujahed8',
            password : 'password'
        }),
        mode: 'cors'
    });

    return await response.json()
}

async function onClick (ev) {

    console.log("clicked")
 
    const data = await login();
    
    console.log(data)
}



export default (props) => {

    console.log(props)
    const location = useLocation();
    console.log(location.pathname)

    if( location.pathname !== '/' ) {
        return <Redirect to="/" push />
    }

    return <div>
        <h1>Landing Page </h1>
        <p>This page will be at base url of the page <code>/</code>. Here app info for visitor to understand
        about this App. Doctors can understand by this info that how this app can ease their practice. We need
        to collect and summarize such information fot doctors or any one who works in health care domain</p>
        <button onClick={onClick} >Submit</button>
    </div>
}