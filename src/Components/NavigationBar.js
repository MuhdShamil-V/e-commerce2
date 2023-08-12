import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { HiMiniShoppingCart } from 'react-icons/hi2';
import { Link, useNavigate } from 'react-router-dom';
import { myContext } from './Context';
import { BsPersonLinesFill } from 'react-icons/bs';

function NavBar() {
  const navigate = useNavigate();

  const { login } = useContext(myContext);

  const myCart = () => {
    if (login) {
      navigate('/mycart');
    } else {
      alert('Please Login');
      navigate('/login');
    }
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary fixed-top">
      <Container fluid>
        <Navbar.Brand href="/">SKECHERS</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link as={Link} to='/men'>Men</Nav.Link>
            <Nav.Link href="/women">Women</Nav.Link>
            <Nav.Link href="/collection">Collection</Nav.Link>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Nav.Link onClick={myCart} style={{ fontSize: '24px' }}>
            <HiMiniShoppingCart />
          </Nav.Link>
          <Nav>
            <Nav.Link as={Link} to= '/login'><BsPersonLinesFill /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
