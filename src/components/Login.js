import React, { useState } from "react";
import { connect } from "react-redux";
import { actionLogin } from "../redux/actions/actionLogin";

import Form from "./Form";

const Login = (props) => {
  const [user, setUser] = useState({ email: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { actionLogin, history } = props;
    actionLogin(user);
    history.push("./");
  };

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col col-md-8 offset-md-2 col-lg-4 offset-lg-4">
            <div className="text-center mb-4">
              <h1 className="h3 mb-3 font-weight-normal">Bienvenido</h1>
            </div>
            <Form onSubmit={handleSubmit} onChange={handleChange} />
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (store) => ({
  userLoged: store.loginUser,
});

const mapDispatchToProps = {
  actionLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
