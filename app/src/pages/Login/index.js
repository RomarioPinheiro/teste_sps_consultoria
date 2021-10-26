import React, { useState } from "react";
import "./login.css";

import { MdEmail, MdLock } from "react-icons/md";
import { HiEye, HiEyeOff } from "react-icons/hi";

import { useHistory } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setShow(!show);
  };
  const history = useHistory();
  const handleClick2 = (e) => {
    history.push("/Repositories");
  };

  return (
    <div className="login">
      <div className="login-logo">
        <img
          src="https://spsconsultoria.com.br/wp-content/uploads/2021/05/SPSConsultoria_Logo.png"
          alt="Login"
        ></img>
      </div>
      <div className="login-right">
        <h1>LOGIN</h1>
        <div className="login-loginInputEmail">
          <MdEmail />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="login-loginInputPassword">
          <MdLock />
          <input
            placeholder="Senha"
            type={show ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="login-eye">
            {show ? (
              <HiEye size={20} onClick={handleClick} />
            ) : (
              <HiEyeOff size={20} onClick={handleClick} />
            )}
          </div>
        </div>

        <button type="submit" onClick={handleClick2}>
          Entrar
        </button>
        <h4> Criar uma conta!</h4>
        <button type="submit">Cadastrar</button>
      </div>
    </div>
  );
}
export default Login;
