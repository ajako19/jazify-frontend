import "./Sidenav.css"
import { useNavigate } from "react-router-dom"

export default function () {

    const navigate = useNavigate();

    return (
        <div className="sn_container">

        <div className="Sidenav">
        <div className="sideNavButtons" onClick={() => {navigate("/home")}}>Home</div>
        <div className="sideNavButtons" onClick={() => {navigate("/likedsongs")}}>Liked Songs</div>
        <div className="sideNavButtons">Create Playlist</div>
            {/* <a className="sideNavButtons" href="#">Library</a>
            <a className="sideNavButtons" href="#">Liked Songs</a> */}
        </div>

        </div>
    )
}
