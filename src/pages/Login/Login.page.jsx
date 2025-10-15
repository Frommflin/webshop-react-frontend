import Card from "@/components/atoms/Card/Card.atom";
import LoginForm from "@/components/organisms/LoginForm/LoginForm.organism";
import React from "react";

const Login = () => {
  const handleSubmit = (userData) => {
    alert("Login clicked");
  };
  return (
    <Card classnames="formCard">
      <LoginForm onSubmit={handleSubmit} />
    </Card>
  );
};

export default Login;
