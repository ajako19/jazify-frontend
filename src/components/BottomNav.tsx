import "./Bottomnav.css"
import { useNavigate } from "react-router-dom"

export default function Bottomnav() {

    const navigate = useNavigate();

    return (
        <div className="bn_container">

        <div className="bottomnav">
        <div className="sideNavButtons" onClick={() => {navigate("/")}}>Home</div>
        <div></div>
        <div className="sideNavButtons" onClick={() => {navigate("/likedsongs")}}>Liked Songs</div>
            {/* <a className="sideNavButtons" href="#">Library</a>
            <a className="sideNavButtons" href="#">Liked Songs</a> */}
        </div>

        </div>
    )
}
