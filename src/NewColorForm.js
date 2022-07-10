import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import "./NewColorForm.css"

function NewColorForm({addColor}) {
    const [form, updateForm] = useState({name: "", hex: "#ffffff"});
    const history = useNavigate();

    function handleChange(e){
        e.persist();
        updateForm(f => ({
            ...f,
            [e.target.value]: e.target.value
        }))
    }

    function handleSubmit(e){
        e.preventDefault();
        addColor({ [form.name]: form.hex });
        history.push("/colors")
    }

    const {hex, name} = form;

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
                    value={name}
                    onChange={handleChange}
                                        />
                </div>
                <div>
                    <label htmlFor="hex">Color Value: </label>
                    <input 
                    type="color"
                    name="hex"
                    id="hex"
                    value={hex}
                    onChange={handleChange}
                                        />
                </div>
                <input type="Submit" value="Add this color"/>
            </form>
        </div>
    )
}

export default NewColorForm;