import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Input from "../../components/Input";
import { updateUser } from "../../redux/users/userSlice";

const Wrapper = styled.main`
width:100%;
  background:var(--white);
  padding:2rem;
  .form-center{
    display:grid;
    column-gap:1rem;
    grid-template-columns:1fr 1fr 1fr;
  }
  .btn{
    height:max-content;
    margin-top:35px;
  }
  @media (max-width:800px){
    margin-top:40px;
    .form-center{

    grid-template-columns:1fr ;
    }
  }
`;

const Profile = () => {

  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.user);
  const [userData, setUserData] = useState(user ? user : null);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser(userData))
  };
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <h3>Profile</h3>
        <div className="form-center">
          <Input
            type="text"
            labelText="Name"
            name="name"
            value={userData.name}
            handleChange={handleChange}
          />
          <Input
            type="text"
            labelText="Last Name"
            name="lastName"
            value={userData.lastName}
            handleChange={handleChange}
          />
          <Input
            type="email"
            labelText="Email"
            name="email"
            value={userData.email}
            handleChange={handleChange}
          />
          <Input
            type="text"
            labelText="Location"
            name="location"
            value={userData.location}
            handleChange={handleChange}
          />
          <button type="submit" className="btn btn-block">
            submit
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default Profile;
