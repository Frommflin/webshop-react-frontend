import Heading from "@/components/atoms/Heading/Heading.atom";
import HelperText from "@/components/atoms/HelperText/HelperText.atom";
import InputField from "@/components/molecules/InputField/InputField.molecule";
import React, { useEffect, useState } from "react";
import styles from "./RegisterForm.module.css";
import Button from "@/components/atoms/Button/Button.atom";

const RegisterForm = ({ onSubmit }) => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [pwd, setPwd] = useState("");
  const [error, setError] = useState(null);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    let validForm =
      user.username != "" && user.email != "" && user.password != ""
        ? false
        : true;
    setIsDisabled(validForm);
  }, [user]);

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
    setPwd(input);
  };
  const checkPasswordMatch = (input) => {
    if (input === pwd) {
      setError(null);
      setUser({
        ...user,
        password: input,
      });
    } else {
      setError("Lösenorden måste matcha");
      setUser({
        ...user,
        password: "",
      });
    }
  };

  return (
    <form className={styles.form}>
      <Heading type="h2" text="Registrera nytt konto" />
      <InputField
        label="Användarnamn *"
        inputId="usrname"
        type="text"
        placeholder="Användarnamn"
        onChange={(e) => onUsernameChange(e.target.value)}
      />
      <InputField
        label="E-mail *"
        inputId="useremail"
        type="email"
        placeholder="example@example.com"
        onChange={(e) => onEmailChange(e.target.value)}
      />
      <InputField
        label="Lösenord *"
        inputId="pwd"
        type="password"
        placeholder="******"
        onChange={(e) => onPasswordChange(e.target.value)}
      />
      <InputField
        label="Bekräfta lösenord *"
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
        isDisabled={isDisabled}
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
