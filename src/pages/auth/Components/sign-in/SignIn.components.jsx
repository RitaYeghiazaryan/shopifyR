import axios from "axios";
import { useState } from "react";
import Button from "src/Component/Button/Button.component";
//BASE COMPONENTS
import Input from "src/Component/Input/input.component.jsx";

//STYLES
import styles from './SignIn.module.scss'

const SignIn = () => {
  const [inputState, setInputSatate] = useState({});

  const handleInput = (event) => {
    const { value, name } = event.target;
    setInputSatate({ ...inputState, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  const result=  await axios.post("auth/login", inputState)
    console.log("submit")
    console.log(result)
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h1>I already have an account</h1>
      <p>Sign in with your email and password</p>
      <Input
        name="email"
        label="Email"
        onChange={handleInput}
        value={inputState.email}
        required
      />
      <Input
        name="password"
        type="password"
        label="Password"
        onChange={handleInput}
        value={inputState.password}
        required
      />
      <Button type="submit">SignIn</Button>
    </form>
    
  );
  }

export default SignIn;
