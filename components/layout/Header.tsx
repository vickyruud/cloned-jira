import { Navbar, Container, Button, NavbarBrand } from "react-bootstrap";
import Link from "next/link";

const Header = () => {
  return (
    <Navbar>
      <Container>
        <NavbarBrand>Project Management</NavbarBrand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as <a href="#login">Looney Luna</a>
          </Navbar.Text>
          <Link href="/" passHref>
            <Button>Log Out</Button>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
