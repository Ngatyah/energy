import { useState } from "react";
import "./Login.module.css";

const Login = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const emailHandler = (e: any) => {
    setEmail(e.target.value);
    console.log(email);
  };
  const passwordHandler = (e: any) => {
    setPassword(e.target.value);
  };

  const submitHandler = (event: any) => {
    event.preventDefault();

    console.log(event.target.values);

    const loginData = { email: email, password: password };

    console.log(loginData);
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="email">Email</label>
        <input key="email" type="text" value={email} onChange={emailHandler} />
        <label htmlFor="password">Password</label>
        <input
          key="password"
          type="password"
          value={password}
          onChange={passwordHandler}
        />
        <button>ok</button>
      </form>
    </div>
  );
};

export default Login;
