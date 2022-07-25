import { Link } from "react-router-dom"
import style from "./Navbar.module.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbars() {
    return (
        <>
            <Navbar fixed="top" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#">
                        Dt Wrold
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link ><Link to="/home" className={style.links}>Lineups</Link></Nav.Link>
                        <Nav.Link ><Link to= "/createTeam" className={style.links}>Create Team</Link> </Nav.Link>
                        <Nav.Link ><Link to= "/articles" className={style.links}>Articles</Link></Nav.Link>
                        <Nav.Link ><Link to="/about" className={style.links}>About</Link></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default Navbars;