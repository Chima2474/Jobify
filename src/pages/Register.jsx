import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Wrapper from "../assets/wrappers/RegisterPage";
import { Logo, Formrow } from "../Components";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser } from "../Features/User/userSlice";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const { user, isLoading } = useSelector((store) => store.user);

  const initialState = {
    name: "",
    email: "",
    password: "",
    isMember: true,
  };
  const [values, setValues] = useState(initialState);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [user]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      toast.error("please fill all field of the form");
      return;
    }
    if (isMember) {
      dispatch(loginUser({ email, password }));
      return;
    }
    dispatch(registerUser({ email, name, password }));
  };
  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={handleSubmit}>
        <Logo />
        {values.isMember ? <h3>Login</h3> : <h3>Register</h3>}

        {!values.isMember && (
          <Formrow
            type={"text"}
            name="name"
            labelText={"name"}
            value={values.name}
            handleChange={handleChange}
          />
        )}
        <Formrow
          type={"email"}
          name="email"
          labelText={"email"}
          value={values.email}
          handleChange={handleChange}
        />
        <Formrow
          type={"password"}
          name="password"
          labelText={"password"}
          value={values.password}
          handleChange={handleChange}
        />
        <button type="submit" className="btn btn-block">
          submit
        </button>
        <p>
          {values.isMember ? "Not a member " : "Already a member"}
          <button type="button" onClick={toggleMember} className="member-btn">
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
