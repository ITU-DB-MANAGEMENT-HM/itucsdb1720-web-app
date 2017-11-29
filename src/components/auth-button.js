import React from "react";
import { Button, Icon } from "antd";

const AuthButton = ({ isAuth, handleClick }) => {
  return (
    <Button type="primary" onClick={handleClick}>
      {isAuth ? "logout " : "login "}
      {isAuth ? <Icon type="logout" /> : <Icon type="login" />}
    </Button>
  );
};

export default AuthButton;
