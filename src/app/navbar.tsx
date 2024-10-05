import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import "./globals.css";

const MyNavbar = () => {
  return (
    <Navbar className="bg-white shadow-sm py-3 fixed w-full z-10">
      <Container className="flex justify-between items-center mx-auto max-w-screen-xl px-4">
        <Navbar.Brand href="#home" className="flex items-center space-x-2">
          <svg className="h-8 w-8 text-black" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-2xl font-bold text-black">NeuroTalent</span>
        </Navbar.Brand>
        <Nav className="flex items-center space-x-4">
          <Nav.Link href="#features" className="text-black hover:text-gray-600">Features</Nav.Link>
          <Nav.Link href="#faq" className="text-black hover:text-gray-600">FAQ</Nav.Link>
          <Nav.Link href="/dashboard" className="text-black hover:text-gray-600">Dashboard</Nav.Link>
        </Nav>
        <div className="flex items-center space-x-4">
          <button className="border border-gray-300 text-black px-3 py-1 rounded hover:bg-gray-100">Log In</button>
          <button className="bg-black text-white px-3 py-1 rounded hover:bg-gray-800">Sign Up</button>
        </div>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;