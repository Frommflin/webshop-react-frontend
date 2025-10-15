import Card from "@/components/atoms/Card/Card.atom";
import RegisterForm from "@/components/organisms/RegisterForm/RegisterForm.organism";
import React from "react";

const Register = () => {
  const handleSubmit = () => {
    alert("Account created!");
  };

  return (
    <Card classnames="formCard">
      <RegisterForm onSubmit={handleSubmit} />
    </Card>
  );
};

export default Register;
