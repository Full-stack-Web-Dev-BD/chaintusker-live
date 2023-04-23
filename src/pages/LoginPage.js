import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Footer } from "../components/Footer";
import { NavbarTop } from "../components/NavbarTop";
import { useNavigate } from "react-router-dom";
import icon from "../assets/logo-icon.png";
import { useDispatch, useSelector } from "react-redux";
import { loginStart } from "../features/login/loginSlice";
import { useEffect } from "react";

export const LoginPage = () => {
  const navigate = useNavigate();
  const loginStatus = useSelector((state) => state.login.status);
  const dispatch = useDispatch();

  useEffect(() => {
    if (loginStatus === "success") {
      navigate("/platform");
    }
  }, [loginStatus]);

  // form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.loginEmail.value;
    dispatch(loginStart({ email }));
    }

  return (
    <>
      <NavbarTop />
      <Container className="bg-custom text-center loginWrapper shadow-lg">
        <img src={icon} alt="" />
        <h3 className="mb-0">Welcome back</h3>
        <small>Connect your wallet to start using the platform</small>
        <Form className="mt-3" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="loginEmail">
            <Form.Control
              className="bg-primary text-light rounded- p-3 border-0 fw-bold fs-5 shadow"
              type="email"
              placeholder="email@domain.com"
              disabled={loginStatus === "loading"}
            />
          </Form.Group>
          <Button
            className="rounded-5 px-5 py-3 mt-3 border-0 fs-5 shadow"
            variant="primary"
            type="submit"
            disabled={loginStatus === "loading"}
          >
            {loginStatus === "loading" ? "Loading..." : "Login"}
          </Button>
        </Form>
      </Container>
      <Footer />
    </>
  );
};
