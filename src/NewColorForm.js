import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import "./NewColorForm.css"

function NewColorForm({addColor}) {
    const [colorName, setColorName] = useState("");
    const [colorHex, setColorHex] = useState("")
    const navigate = useNavigate();

    function handleColorChange(e){
        setColorName(e.target.value);
    };

    function handleColorHexChange(e){
        setColorHex(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        addColor({ [colorName]: colorHex });
        navigate("/colors");
    }


    return(
        <div className="NewColor">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Color name: </label>
                    <input 
                    name="name"
                    type="text"
                    id="name"
                    placeholder="Enter color name"
                    onChange={handleColorChange}
                    value={colorName}
                    />
                </div>
                <div>
                    <label htmlFor="hex">Color Value: </label>
                    <input 
                    type="color"
                    name="hex"
                    id="hex"
                    onChange={handleColorHexChange}
                    value={colorHex}
                    />
                </div>
                <input type="Submit" value="Add this color" readOnly/>
            </form>
        </div>
    )
}

export default NewColorForm;