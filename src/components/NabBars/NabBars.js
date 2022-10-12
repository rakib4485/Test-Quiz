import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './NabBars.css'

const NabBars = () => {
    return (
        <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand className='nav-brand'><span>Test</span> Quiz</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-links">
            <Link to='/'>Home</Link>
            <Link to='/quiz'>Quiz</Link>
            <Link to='/statistic'>Statistic</Link>
            <Link to='/about'>About</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default NabBars;