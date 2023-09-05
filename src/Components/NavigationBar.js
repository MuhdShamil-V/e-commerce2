import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { HiMiniShoppingCart } from 'react-icons/hi2';
import { BiLogOutCircle } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import { myContext } from './Context';
import { BsPersonLinesFill } from 'react-icons/bs';
import { RiAdminFill } from 'react-icons/ri';



function NavBar() {
  const navigate = useNavigate();

  const { login, setLogin, setCart } = useContext(myContext);

  const myCart = () => {
    if (login) {
      navigate('/mycart');
    } else {
      alert('Please Login');
      navigate('/login');
    }
  };

  const handleLogout = () => {
    if(login){
    setLogin(false);
    setCart([])
    alert('logged out successfully')
    }else{
      alert("please log in")
      navigate('/login')
    }
  };

  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary fixed-top">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">SKECHERS</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link as={Link} to='/men'>Men</Nav.Link>
            <Nav.Link as={Link} to='/women'>Women</Nav.Link>
            <Nav.Link as={Link} to="/collection">Collection</Nav.Link>
           
          </Nav>
          <Nav.Link onClick={myCart} style={{ fontSize: '24px' }}>
            <HiMiniShoppingCart />
          </Nav.Link>
          <Nav>

            <Nav.Link to="#" onClick={handleLogout}>
              {login ?<BiLogOutCircle/>:null}
            </Nav.Link>
            
            <Nav.Link as={Link} to = '/login'><BsPersonLinesFill /></Nav.Link>

            <Nav.Link as={Link} to = "/adminlogin">
              <RiAdminFill />
            </Nav.Link>

          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
    <br></br>
    <br></br>
    </>
  );
}

export default NavBar;
