import React, { useState } from "react";
import styles from "./LoginForm.module.css";
import Heading from "../Heading/Heading.atom";
import InputField from "../InputField/InputField.molecule";
import Button from "../Button/Button.atom";

const LoginForm = ({ onSubmit }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const onUsernameChange = (name) => {
    setUser({
      ...user,
      username: name,
    });
  };
  const onPasswordChange = (pwd) => {
    setUser({
      ...user,
      password: pwd,
    });
  };

  return (
    <form className={styles.form}>
      <Heading text="Logga in" type="h2" />
      <InputField
        label="Användarnamn"
        inputId="username"
        type="text"
        placeholder="Användarnamn"
        onChange={(e) => onUsernameChange(e.target.value)}
      />
      <InputField
        label="Lösenord"
        inputId="pwd"
        type="password"
        placeholder="Lösenord"
        onChange={(e) => onPasswordChange(e.target.value)}
      />
      <Button
        label="Logga in"
        styling={{ width: "fit-content" }}
        onClick={(e) => {
          e.preventDefault();
          onSubmit(user);
        }}
      />
    </form>
  );
};

export default LoginForm;
