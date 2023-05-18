import { Link } from "react-router-dom";
import Logo from "../../assets/img-logos/Logo.svg";
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./nav.css";


const Navi = () => {

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };
  return (
    <>
      <Navbar expand="lg" className="container-md navbar">
        <Navbar.Brand >
          <div className="logo-nav">
            <img src={Logo} alt="Logo for the restaurant" />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto navlinks">
            <Nav.Item>
              <li>
                <Link to="/">Home</Link>
              </li>
            </Nav.Item>
            <Nav.Item>
              <li>
                <Link to="/#about" onClick={handleClick('about')}>About</Link>
              </li>
            </Nav.Item>
            <Nav.Item>
              <li>
                <Link to="/#menu" onClick={handleClick('menu')}>Menu</Link>
              </li>
            </Nav.Item>
            <Nav.Item>
              <li>
                <Link to="/reservations">Reservations</Link>
              </li>
            </Nav.Item>
            <Nav.Item>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>

  );
};

export default Navi;
