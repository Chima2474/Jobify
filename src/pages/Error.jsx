import React from "react";
import { Link } from "react-router-dom";
import notFound from "../assets/images/not-found.svg";
import Wrapper from "../assets/wrappers/ErrorPage";

const Error = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={notFound} alt="not found" />
        <h1>Oop! page not found</h1>
        <p>We can't find what you are looking for</p>
        <Link to="/"> back home</Link>
      </div>
    </Wrapper>
  );
};

export default Error;
