import React, { useContext, useEffect, useState } from "react";
import Input from "../components/Input";
import styled from "styled-components";
import Logo from "../components/Logo";
import { Link,useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { handleCloseToast, handleOpenToast } from "../redux/toast/toastSlice";
import { registerUser,loginUser } from "../redux/users/userSlice";
import { getUserFromLocalStorage } from "../utils/locatStorage";
const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Wrapper = styled.main`
  display: grid;
  align-items: center;
  justify-items: center;
  text-align: center;

  .btn {
    width: 100%;
    padding: 0.5rem;
  }
`;

const Register = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { openToast } = useSelector((state) => state.toast);
  const {isLoading , user} = useSelector((state) => state.user);
  const [form, setForm] = useState(initialState);
  console.log(openToast);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, password, email, isMember } = form;
    if (!email || !password || (!isMember && !name)) {
      dispatch(
        handleOpenToast({ text: "please all the values", type: "danger" })
      );
      setTimeout(() => {
        dispatch(handleCloseToast());
      }, 3000);
      return;
    }
    if (!isMember) {
      dispatch(registerUser({ email:email, password:password, name:name }));
    } else {
      dispatch(loginUser({email:email,password:password}))
    }
  };
  const toggleMember=()=>{
    setForm({...form,isMember:!form.isMember})
  }
  useEffect(()=>{
    if(user){
      setTimeout(()=>{navigate('/')},2000)
    }
  },[user])
  return (
    <Wrapper className="container full-page">
      <form onSubmit={handleSubmit} className="form">
        <Logo />
        <h3>{form.isMember ? "Login" : "Register"}</h3>
        {form.isMember ? (
          ""
        ) : (
          <Input
            name="name"
            type="text"
            labelText="Name"
            handleChange={handleChange}
            value={form.name}
          />
        )}

        <Input
          name="email"
          type="email"
          labelText="Email"
          handleChange={handleChange}
          value={form.email}
        />
        <Input
          name="password"
          type="password"
          labelText="Password"
          handleChange={handleChange}
          value={form.password}
        />
        <button type="submit" className="btn">
          {isLoading ?<p>...loading</p>:form.isMember ? "Login" : "Register"}
        
        </button>
        <p>
          <span  onClick={toggleMember}>
            
            Go To 
            {form.isMember ? (
              <Link to="/register">Register </Link>
            ) : (
              <Link to="/register">Login </Link>
            )}
          </span>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
