import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import registerUser from '../../strapi/registerUser';
import loginUser from '../../strapi/loginUser';
import "./login.styles.scss";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("default");
  const [isMember, setIsMember] = useState(true);

  let isEmpty = !email || !password || !username;

  const toggleMember = () => {
    setIsMember(prevMember =>{
      let isMember = !prevMember
      isMember?setUsername('default'):setUsername('')
      return isMember;
    })
  };

  const handleSubmit = async e => {
    // alert
    e.preventDefault();
    let response;
    console.log('hola')
    if(isMember){
      response = await loginUser({email,password})
    }else{
      response = await registerUser({email,password,username})
    }

    if(response){
      console.log(response)
    }else{
      // show alert
    }
  };

  return (
    <div className="login-container">
      <h1>{isMember ? "Sign in" : "Register"}</h1>
      <Form>
        {!isMember && (
          <Form.Group controlId="Username">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Username" onChange={e=> setUsername(e.target.value)}/>
          </Form.Group>
        )}

        <Form.Group controlId="Email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={e=> setEmail(e.target.value)}/>
        </Form.Group>

        <Form.Group controlId="Password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={e=> setPassword(e.target.value)}/>
        </Form.Group>

        {isEmpty && <p className="empty">Please fill out all fields</p>}

        {!isEmpty && (
          <Button className="btn-primary" type="submit" onClick={handleSubmit} block>
            Submit
          </Button>
        )}
        <p className="toggle">
        {isMember ? "Need to register?": "Already a member?"}
        <button type="button" onClick={toggleMember}>click here</button>
        </p>
      </Form>
    </div>
  );
};

export default Login;
