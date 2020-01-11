import React, {useState} from 'react';
import styled, {keyframes} from 'styled-components';
import {Link} from 'react-router-dom'
import {connect} from "react-redux"
import {getSignedUp} from '../actions/loginandsign'
import {fadeIn } from 'react-animations';

let fadeAnimation = keyframes`${fadeIn}`;


 const Container=styled.div`
   width:100%;
    background-image:url("https://images.unsplash.com/photo-1544033527-b192daee1f5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80");
     background-position:center;
     background-repeat:repeat;
     background-size:cover;
     display:flex;
     justify-content: center;
     align-items:center;
     text-align:center;
     
`
const Div=styled.div`
    border-radius:30px;
    background-color:#ffffffa6;
    justify-content: center;
    align-items:center;
    align-content:center;
    width:50em;
   
    margin:auto;
`
const Form=styled.form`
    display:flex;
    flex-direction:column;
    width:50%;
    padding-left:25%;
    justify-content:space-evenly;
    align-items:center;
    
`
const Input=styled.input`
    margin:5%;
    width:20em;
    height:3vh;
    border-radius:20px;
    font-size:20px;

`
const Button=styled.button`
    border-radius:25px;
    border: none;
    display: block;
    text-align: center;
    cursor: pointer;
    text-transform: uppercase;
 
    overflow: hidden;
    position: relative;
    color: #fff;
    font-weight: 700;
    font-size: 15px;
    background-color: black;
    padding: 17px 60px;
    margin: 0 auto;
    margin-top:5%;
    margin-bottom:5%
    
`
const Word=styled.h3`
animation:3s ${fadeAnimation}
font-size:35px;
text-decoration: underline;
`

function SignUpForm(props){
        const [user, setUser] = useState({
          username: '',
          password: ''
        });

        const handleChanges = e => {
            setUser({
              ...user,
              [e.target.id]: e.target.value
            });
          };

          const handleSubmit = e => {
            e.preventDefault();
              props.getSignedUp(user);
                    setUser({
                ...user,
                username: "",
                password: "",
              });  
        props.history.push("/workout");
      
            
      }


    return(
         <Container>
            <Div>
                <Form onSubmit={handleSubmit} >
                <Word> Why wait ? </Word>
                <Word> Sign Up Now! </Word>
                      <Input id='username' type="text" placeholder="Username" name="username" value={user.username} onChange={handleChanges} />
                      <Input id='password' type="password" placeholder=" Password" name="password" value={user.password} onChange={handleChanges} />
                      <Button type="submit">Sign Up</Button>
                      <Link to="/login"><h2>Already Registered?</h2></Link>
                  </Form>
             </Div>
         </Container>
    )
}

const mapStatetoProps = state => {
    return state;
}

export default connect(mapStatetoProps, {getSignedUp})(SignUpForm);

