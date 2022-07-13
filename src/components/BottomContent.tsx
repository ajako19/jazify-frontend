import {BiRewind, BiFastForward, BiPause, BiLibrary} from 'react-icons/bi'
import {AiFillHome, AiFillHeart} from 'react-icons/ai'
import "./BottomContent.css"

export default function BottomContent () {
    return (
        <div className="bottomContent">
        <div className="musicPlayer">
            <BiRewind className="musicPlayerButtons"/>
            <BiPause className="musicPlayerButtons"/>
            <BiFastForward className="musicPlayerButtons"/>
        </div>
        <div className="timeBarWrap">
            <div className="timeBar">&nbsp;</div>
        </div>
        <div className="navigation">
            <a className='navButtonA' href="#">
            <AiFillHome className="navButton"/>
            </a>
            <a className='navButtonA' href="#">
            <AiFillHeart className="navButton"/>    
            </a>
            <a className='navButtonA' href="#">
            <BiLibrary className="navButton"/>
            </a>
        </div>
    </div>
    )
}