import React, {useState} from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';
import "./styles.css"
import {connect} from "react-redux"
import {getLoggedIn} from '../../actions/loginandsign'

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
const Button = styled.button`
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

    const[userCredentials, setUserCredentials] = useState({username:'', password:''})

  const handleChange = e => {
    setUserCredentials(
      {
        ...userCredentials,
        [e.target.name]: e.target.value
      }
    )
  }
    
    
    const onSubmit = e => {
    e.preventDefault();
    props.getLoggedIn(userCredentials)
    props.history.push("/workout");

}

    return(
        <Main>
            <Container>
                <Form onSubmit={onSubmit}>
                      <h3>Log In to Your Account</h3>
                      <label ><h4>Username</h4></label>
                      <Input  type="text" placeholder=" Enter Username" name="username"  value={userCredentials.username} onChange={handleChange}/>
                      <Input  type="password" placeholder=" Password" name="password" value={userCredentials.password} onChange={handleChange}/>
                      <Button type="submit">Log in</Button>
                      <Link to="/signup">Sign Up</Link>
                  </Form>
             </Container>
        </Main>
    )
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, { getLoggedIn })(LoginForm);