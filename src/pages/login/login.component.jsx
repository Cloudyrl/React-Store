import React, { useState,useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import registerUser from "../../strapi/registerUser";
import loginUser from "../../strapi/loginUser";
import { UserContext } from "../../context/user";
import "./login.styles.scss";

const Login = () => {
  const history = useHistory();
  const {login,alert,showAlert} = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("default");
  const [isMember, setIsMember] = useState(true);

  let isEmpty = !email || !password || !username || alert.show;

  const toggleMember = () => {
    setIsMember((prevMember) => {
      let isMember = !prevMember;
      isMember ? setUsername("default") : setUsername("");
      return isMember;
    });
  };

  const handleSubmit = async (e) => {
    showAlert({
      msg:'accessing user data. please wait...'
    })
    e.preventDefault();
    let response;
    if (isMember) {
      response = await loginUser({ email, password });
    } else {
      response = await registerUser({ email, password, username });
    }

    if (response) {
      const {jwt:token,user:{username}} = response.data;
      const user = {username,token};
      login(user);
      showAlert({
        msg:`you are logged in ${username}`
      })
      history.push('/shop');
    } else {
      showAlert({msg:'There was an error. please try again',type:'danger'})
    }
  };

  return (
    <div className="login-container">
      <h1>{isMember ? "Sign in" : "Register"}</h1>
      <Form>
        {!isMember && (
          <Form.Group controlId="Username">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
        )}

        <Form.Group controlId="Email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="Password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        {isEmpty && <p className="empty">Please fill out all fields</p>}
          <Button
            className="btn-primary"
            type="submit"
            onClick={handleSubmit}
            disabled={isEmpty}
            block
          >
            Submit
          </Button>
        <p className="toggle">
          {isMember ? "Need to register?" : "Already a member?"}
          <button type="button" onClick={toggleMember}>
            click here
          </button>
        </p>
      </Form>
    </div>
  );
};

export default Login;