import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useNavigate } from 'react-router-dom';
import appleLogo from "../../img/appleNav.png";

function NavBar() {
  var expand = false;
  const navigate = useNavigate();
  return (
    <>
        <Navbar key={expand} style={{backgroundColor:"#000"}} variant='dark' expand={expand}>
          <Container fluid>
            <img src={appleLogo} style={{width:"50px"}} alt={"logo"}/>
            {/* <Navbar.Brand href="#">iPhone store</Navbar.Brand> */}
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} style={{color:"#000"}}/>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Links
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link onClick={()=>{
                    navigate("/subscribe");
                  }}>Subscribe</Nav.Link>
                  <Nav.Link
                  onClick={()=>{
                    navigate("/my/subscription");
                  }}
                  >Check my subscription</Nav.Link>
                  <Nav.Link
                  onClick={()=>{
                    navigate("/admin/login");
                  }}
                  >Admin login</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </>
  );
}

export default NavBar;