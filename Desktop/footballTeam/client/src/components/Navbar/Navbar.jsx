import { Link } from "react-router-dom"
import style from "./Navbar.module.css"
export default function Navbar() {
    return (
        // <div>
        //     <div>
        //         <h2>Coach app</h2>
        //     </div>
        //     <div>
        //     <Link to="/home">Lineups</Link>
        //     <Link to= "/createTeam">Create Team</Link>
        //     <Link to= "/articles">Articles</Link>
        //     <Link to="/about">About</Link>
        //     </div>
        // </div>
        <nav className="navbar navbar-expand-lg bg-light" id="nav">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Dt world</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/home" className="nav-link active" aria-current="page">Lineups</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/createTeam" className="nav-link" >Create Team</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/articles" className="nav-link">Articles</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">About</Link>
                        </li>
                    </ul>
                    {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                </div>
            </div>
        </nav >

    )
}