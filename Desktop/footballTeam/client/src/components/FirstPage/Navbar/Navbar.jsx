import { Link } from "react-router-dom"

export default function Navbar (){
    return (
        <div>
            <div>
                <h2>Coach app</h2>
            </div>
            <div>
            <Link to="/home">Lineups</Link>
            <Link to= "/createTeam">Create Team</Link>
            <Link to= "/articles">Articles</Link>
            <Link to="/about">About</Link>
            </div>
        </div>
    )
}