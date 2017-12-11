import React from "react";
import { Button, Icon } from "antd";

const AuthButton = ({ isAuth, handleClick, isLoading }) => {
  return (
    <Button type="primary" onClick={handleClick} loading={isLoading} disabled={isLoading}>
      {isAuth ? "logout " : "login "}
      {isAuth ? <Icon type="logout" /> : <Icon type="login" />}
    </Button>
  );
};

export default AuthButton;
