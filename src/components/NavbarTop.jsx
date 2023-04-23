import React, { useEffect, useState } from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaInbox, FaBell } from "react-icons/fa";
import whitepaper from "../assets/whitepaper.pdf";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "../features/login/loginSlice";
import { magicMumbai } from "../web3/magic";
import axios from "axios";
import { ChatBaseURL } from "../utls/constant";

export const NavbarTop = () => {
  const dispatch = useDispatch();
  // Fetch login status from redux store
  const loginStatus = useSelector((state) => state.login.status);

  const logoutMagic = async () => {
    try {
      await magicMumbai.user.logout();
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Navbar bg="transparent" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            width="150px"
            height="auto"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link href={whitepaper} target="_blank">
              Whitepaper
            </Nav.Link>
            <Nav.Link as={Link} to="/platform">
              Platform
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button
          className="bg-transparent border-0 text-light px-3 d-none d-md-block"
          as={Link}
          to="/chat"
        >
          <FaInbox />
        </Button>
        <Button className="bg-transparent border-0 text-light px-3">
          <FaBell />
        </Button>

        {loginStatus === "success" ? (
          <div className="btn-group">
            <button
              type="button"
              class="btn btn-secondary dropdown-toggle"
              data-bs-toggle="dropdown"
              data-bs-display="static"
              aria-expanded="false"
              className="bg-transparent border-0 px-1"
              id="dropdown-basic"
            >
              <img
                src="https://images.unsplash.com/photo-1678212352260-5c72115ac9b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                style={{
                  height: "35px",
                  width: "35px",
                  borderRadius: "50%",
                }}
                alt=""
              />
            </button>
            <ul class="dropdown-menu dropdown-menu-end">
              <li>
                <Link to="/profile/1" className="dropdown-item">
                  Profile
                </Link>
              </li>
              <li onClick={logoutMagic}>
                <button className="dropdown-item">Logout</button>
              </li>
            </ul>
          </div>
        ) : (
          <Button as={Link} to="/login" className="px-3">
            Login
          </Button>
        )}
      </Container>
    </Navbar>
  );
};
