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
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password1: "",
    password2: "",
  });

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

    const validation = input == "" ? "error" : "";
    setErrors({ ...errors, username: validation });
  };
  const onEmailChange = (input) => {
    setUser({
      ...user,
      email: input,
    });

    const validation = input == "" ? "error" : "";
    setErrors({ ...errors, email: validation });
  };
  const onPasswordChange = (input) => {
    setPwd(input);

    const validation = input == "" ? "error" : "";
    setErrors({ ...errors, password1: validation });
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

    const validation = input == "" ? "error" : "";
    setErrors({ ...errors, password2: validation });
  };

  return (
    <form className={styles.form}>
      <Heading type="h2" text="Registrera nytt konto" />
      <InputField
        label="Användarnamn *"
        inputId="username"
        type="text"
        placeholder="Användarnamn"
        validationClass={errors.username}
        onChange={(e) => onUsernameChange(e.target.value)}
      />
      <InputField
        label="E-mail *"
        inputId="useremail"
        type="email"
        placeholder="example@example.com"
        validationClass={errors.email}
        onChange={(e) => onEmailChange(e.target.value)}
      />
      <InputField
        label="Lösenord *"
        inputId="pwd"
        type="password"
        placeholder="******"
        validationClass={errors.password1}
        onChange={(e) => onPasswordChange(e.target.value)}
      />
      <InputField
        label="Bekräfta lösenord *"
        inputId="confirmpwd"
        type="password"
        placeholder="******"
        validationClass={errors.password2}
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
