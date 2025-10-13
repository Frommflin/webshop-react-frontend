import Heading from "@/components/atoms/Heading/Heading.atom";
import HelperText from "@/components/atoms/HelperText/HelperText.atom";
import InputField from "@/components/molecules/InputField/InputField.molecule";
import React, { useState } from "react";
import styles from "./RegisterForm.module.css";
import Button from "@/components/atoms/Button/Button.atom";

const RegisterForm = ({ onSubmit }) => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const onUsernameChange = (input) => {
    setUser({
      ...user,
      username: input,
    });
  };
  const onEmailChange = (input) => {
    setUser({
      ...user,
      email: input,
    });
  };
  const onPasswordChange = (input) => {
    setUser({
      ...user,
      password: input,
    });
  };
  const checkPasswordMatch = (input) => {
    const check = input === user.password ? null : "Lösenorden måste matcha";
    setError(check);
  };

  return (
    <form className={styles.form}>
      <Heading type="h2" text="Registrera nytt konto" />
      <InputField
        label="Användarnamn"
        inputId="usrname"
        type="text"
        placeholder="Användarnamn"
        onChange={(e) => onUsernameChange(e.target.value)}
      />
      <InputField
        label="E-mail"
        inputId="useremail"
        type="email"
        placeholder="example@example.com"
        onChange={(e) => onEmailChange(e.target.value)}
      />
      <InputField
        label="Lösenord"
        inputId="pwd"
        type="password"
        placeholder="******"
        onChange={(e) => onPasswordChange(e.target.value)}
      />
      <InputField
        label="Bekräfta lösenord"
        inputId="confirmpwd"
        type="password"
        placeholder="******"
        onChange={(e) => checkPasswordMatch(e.target.value)}
      />
      {error && (
        <HelperText
          text={error}
          variant="error"
          styling={{ borderRadius: ".5rem" }}
        />
      )}
      <Button
        label="Skapa konto"
        styling={{
          width: "fit-content",
        }}
        onClick={(e) => {
          e.preventDefault();
          onSubmit(user);
        }}
      />
    </form>
  );
};

export default RegisterForm;
