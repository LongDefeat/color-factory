import React from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import "./Color.css"

function Color ({ colors }){
    const { color } = useParams();
    console.log(colors[color]);
    const navigate = useNavigate();
    if(!colors[color]){
        navigate("/colors");
    }
    return (
        <div className="Color" style= {{backgroundColor: colors[color]}}>
            <p>Believe it or not, this is {color}</p>
            <p>
                Want a different color? <Link to="/">Go Back</Link>
            </p>
        </div>
    )
}

export default Color;