import React from 'react';
import {BrowserRouter as Router,Route,Link } from "react-router-dom";
import styled from 'styled-components';
import "./styles.css"
const Main=styled.div`
    width:100%;
    background-image:url("https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1266&q=80");
    background-position:center;
    background-repeat:no-repeat;
    background-size:cover;
    display:flex;
    justify-content: center;
    align-items:center;
    text-align:center;
    font-family:Helvetica;
`
const Container=styled.div`
    border-radius:20px;
    background-color:#ffffffa6;
    justify-content: center;
    align-items:center;
    align-content:center;
    width:30em;
    height:35vh;
`
const Form=styled.form`
    display:flex;
    flex-direction:column;
    width:50%;
    padding-left:25%;
    justify-content:center;
    align-items:center;
    
`
const Input=styled.input`
    margin:5%;
    width:20em;
    height:3vh;
    border-radius:50px;
`
const Button=styled.button`
    border-radius:25px;
    border: none;
    display: block;
    text-align: center;
    cursor: pointer;
    text-transform: uppercase;
    outline: none;
    overflow: hidden;
    position: relative;
    color: #fff;
    font-weight: 700;
    font-size: 15px;
    background-color: #222;
    padding: 17px 60px;
    margin: 0 auto;
    margin-top:5%;
    box-shadow: 0 5px 15px rgba(0,0,0,0.20);
`

function LoginForm(props){
    return(
        <Main>
            <Container>
                <Form>
                      <h3>Log In to Your Account</h3>
                      <label htmlFor="login"><h4>Username</h4></label>
                      <Input id="login" type="text" placeholder=" Enter email or Username" name="username"/>
                      <Input id="login" type="password" placeholder=" Password" name="Password"/>
                      <Button type="submit">Log in</Button>
                  </Form>
             </Container>
        </Main>
    )
}

export default LoginForm;