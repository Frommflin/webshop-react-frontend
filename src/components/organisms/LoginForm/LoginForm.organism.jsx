import React, { useState } from "react";
import styles from "./LoginForm.module.css";
import InputField from "@/components/molecules/InputField/InputField.molecule";
import Heading from "@/components/atoms/Heading/Heading.atom";
import Button from "@/components/atoms/Button/Button.atom";

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
        placeholder="******"
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
