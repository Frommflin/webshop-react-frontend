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

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const onUsernameChange = (name) => {
    setUser({
      ...user,
      username: name,
    });
    const error = name == "" ? "error" : "";
    setErrors({ ...errors, username: error });
  };
  const onPasswordChange = (pwd) => {
    setUser({
      ...user,
      password: pwd,
    });

    const error = pwd == "" ? "error" : "";
    setErrors({ ...errors, password: error });
  };

  return (
    <form className={styles.form}>
      <Heading text="Logga in" type="h2" />
      <InputField
        label="Användarnamn"
        inputId="username"
        type="text"
        placeholder="Användarnamn"
        validationClass={errors.username}
        onChange={(e) => onUsernameChange(e.target.value)}
      />
      <InputField
        label="Lösenord"
        inputId="pwd"
        type="password"
        placeholder="******"
        validationClass={errors.password}
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
