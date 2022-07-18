import BottomContent from "./BottomContent"
import "./Library.css"
import Sidenav from "./Sidenav"
// import hotlinebling from "../img/hotlinebling.png"

export default function Library () {
    return (
        <div className="Libary">
            <div className="container">
            <div className="header">
                <p className="welcomeHome">Library</p>
                <input className="inputBar" placeholder="Search Jazify..."/>
            </div>
            <div className="mainPageContent">
                <div className="pageContentItem">
                    <img className="pageContentImage" src="https://upload.wikimedia.org/wikipedia/commons/c/c9/Drake_-_Hotline_Bling.png"></img>
                    <p className="songTitle">Hotline Bling</p>
                    <p className="artistName">Drake</p>
                </div>
                <div className="pageContentItem">
                    <img className="pageContentImage" src="https://m.media-amazon.com/images/I/7164ajA6eJS._SL1200_.jpg"></img>
                    <p className="songTitle">College Dropout</p>
                    <p className="artistName">Kanye West</p>
                </div>
                <div className="pageContentItem">
                    <img className="pageContentImage" src="https://m.media-amazon.com/images/I/A1gZc70vUIL._SL1500_.jpg"></img>
                    <p className="songTitle">InnerSpeaker</p>
                    <p className="artistName">Tame Impala</p>
                </div>
                <div className="pageContentItem">
                    <img className="pageContentImage" src="https://m.media-amazon.com/images/I/91r5cRb6ntL._SX425_.jpg"></img>
                    <p className="songTitle">Person Pitch</p>
                    <p className="artistName">Panda Bear</p>
                </div>
                <div className="pageContentItem">
                    <img className="pageContentImage" src="https://i.discogs.com/IbpNW0hqwHUPAcuwDyxIOhG6xnedktJ0VgVEq96h_OY/rs:fit/g:sm/q:90/h:496/w:500/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE0MDEz/ODAtMTI4NzQyOTky/Ny5qcGVn.jpeg"></img>
                    <p className="songTitle">Hatful Of Hollow</p>
                    <p className="artistName">The Smiths</p>
                </div>
                <div className="pageContentItem">
                    <img className="pageContentImage" src="http://s3.amazonaws.com/quietus_production/images/articles/12879/Talking_Heads-Speaking_In_Tongues__1983_-Frontal_1374490245.jpg"></img>
                    <p className="songTitle">Speaking In Tongues</p>
                    <p className="artistName">Talkig Heads</p>
                </div>
                <div className="pageContentItem">
                    <img className="pageContentImage" src="https://m.media-amazon.com/images/I/61yver5nJSL._SL1200_.jpg"></img>
                    <p className="songTitle">Because The Internet</p>
                    <p className="artistName">Childish Gambino</p>
                </div>
                <div className="pageContentItem">
                    <img className="pageContentImage" src="https://images.theconversation.com/files/168828/original/file-20170510-21596-13cqs18.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"></img>
                    <p className="songTitle">Sgt Pepper's Lonely Hearts Club Band</p>
                    <p className="artistName">The Beatles</p>
                </div>
            </div>
            </div>

        </div>
    )
}