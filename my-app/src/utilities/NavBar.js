import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LoginButton from './LoginButton';
import LogOut from './LogOut';
import {useAuth0} from "@auth0/auth0-react";


function NavbarTop() {
  
  const {isAuthenticated} = useAuth0();
  //console.log(isAuthenticated);
  return (
    <>
      <Navbar bg="dark" variant="dark" >
        <Container>
          <Navbar.Brand href="/">Generic PC Reviewing </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>
          <Nav className="ms-5">
            <LoginButton></LoginButton>
          </Nav>
          {isAuthenticated ? <Nav>
            <LogOut></LogOut>
          </Nav> : <></>}  
          
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarTop;