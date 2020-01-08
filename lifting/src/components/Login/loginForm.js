import React from 'react';
import {BrowserRouter as Router,Route,Link } from "react-router-dom";
import styled from 'styled-components';
import "./styles.css"
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTwitter,faFacebook,faInstagram,faSnapchat} from '@fortawesome/free-brands-svg-icons'
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
    height:40vh;
    
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
    width:19em;
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
    font-size: 0.9em;
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
                      <div className="forgotPassword">
                        <input id="remember" type="checkbox"/><span>Remember me</span><a href="#">Forgot Password?</a>
                     </div>
                      <Button type="submit">Log in</Button>
                      <p>Need an account?  <a href="#">Sign up</a></p>
                  </Form>
             </Container>
             {/* <!-- SHARE BUTTON --> */}
            <div id ="share" className="hover"><span >SHARE&nbsp;<FontAwesomeIcon icon="coffee" /></span>
                <a className="social-link" href="https://www.twitter.com/" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
                <a className="social-link" href="https://www.facebook.com/" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a>
                <a className="social-link" href="https://www.snapchat.com/" target="_blank"><FontAwesomeIcon icon={faSnapchat}/></a>
                <a className="social-link" href="https://www.instagram.com/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
            </div> 
    {/* <!-- end of share button --> */}
        </Main>
    )
}

export default LoginForm;