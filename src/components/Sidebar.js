import React from "react";
import "./sidebar.css"
import {AiFillApple} from "react-icons/ai"
function Sidebar () {

    return(
        <div className="sidebar">
        <button>
            <AiFillApple/>
            <span>Apple</span>
        </button>
        <button>
            <AiFillApple/>
            <span>Apple</span>
        </button>
        <button>
            <AiFillApple/>
            <span>Apple</span>
        </button>

        </div>
    )


}

export default Sidebar