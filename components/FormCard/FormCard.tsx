import React from "react";
import { LoginForm } from "..";


const FormCard = props => {
  return (
    <div className="form-card border">
      <div className="header text-center p-3 text-light">Get started today!</div>
      <div>
        <LoginForm />
      </div>
    </div>
  );
};

export { FormCard };
