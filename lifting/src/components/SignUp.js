import React, {useState} from 'react';
import styled from 'styled-components';
import {connect} from "react-redux"
import {getSignedUp} from '../actions/loginandsign'

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
    border-radius:50px;
    background-color:#ffffffa6;
    justify-content: center;
    align-items:center;
    align-content:center;
    width:50em;
    height:100vh;
    margin:auto;
`
const Form=styled.form`
    display:flex;
    flex-direction:column;
    width:50%;
    padding-left:20%;
    justify-content:space-evenly;
    align-items:center;
    
`
const Input=styled.input`
    margin:5%;
    width:30em;
    height:6vh;
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
    
`

function SignUpForm(props){
        const [user, setUser] = useState({
          username: "",
          password: ""
        });

        const handleChanges = e => {
            setUser({
              ...user,
              [e.target.id]: e.target.value
            });
          };

          const handleSubmit = e => {
            e.preventDefault();
              props.getSignedUp({ username: user.username, password: user.password });
              props.history.push("/login");
              setUser({
                ...user,
                username: "",
                password: "",
              });
            
        }


    return(
         <Container>
            <Div>
                <Form onSubmit={handleSubmit} >
                      <h3>Sign Up</h3>
                      <Input id="signup" type="text" placeholder="Username" name="username" onChange={handleChanges} />
                      <Input id="signup" type="password" placeholder=" Password" name="Password" onChange={handleChanges} />
                      <Button type="submit">Sign Up</Button>
                      {/* <div>Already a member Login <aHere</div> */}
                  </Form>
             </Div>
         </Container>
    )
}

const mapStatetoProps = state => {
    return state;
}

export default connect(mapStatetoProps, {getSignedUp})(SignUpForm);

