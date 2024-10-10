import React from "react";
import Body from "../../components/body/body";

interface LoginFormProps {
  children?: React.ReactNode;
}

const LoginForm: React.FC<LoginFormProps> = ({ children }) => {
  return <Body>{children}</Body>;
};
export default LoginForm;
