import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import styled from 'styled-components'

const Styles = styled.div`
  .navbar{
    font-family:'Roboto',sans-serif;
    background-color:#161B23;
  }
  .navbar-brand{
    font-size:3rem;
    font-weight:800;
    margin-left:1em;
    color: var(--primary-color);
  }
  .nav-link{
    font-weight:500;
    font-size:1.2rem;
    margin-right:4em;
    color: var(--secondary-color) !important;
  }
  .nav-link:last-child{
    border:1px solid var(--secondary-color);
  }
  .navbar-light .navbar-toggler {
    border-color: rgba(102,252,241,.5) !important;
  }

  @media (max-width: 991px) {
    .navbar-collapse{
      border:1px solid var(--primary-color);
      padding:0 1em;
    }
    .nav-link:last-child{
      border:none;
    }
  }

  button:focus {
    outline:5px auto var(--primary-color);
  }

  .navbar-toggler-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(102,252,241, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E") !important;
  }
`;


export default function Header(props) {
  const { sections } = props;

  const navLinks = sections.map((section,key) => {
    const navHref = `/${section.toLowerCase()}`;
    return <Nav.Link key={key} href={navHref}>{section}</Nav.Link>
  }
  );

  return (
    <Styles>
      <Navbar collapseOnSelect expand="lg" bg="transparent">
        <Navbar.Brand href="#home">HK</Navbar.Brand>
        <Navbar.Toggle  aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            {navLinks}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
}