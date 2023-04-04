import React from "react";
import { useState } from "react";

export const List =() =>{
    const [content, setContent] = useState([])
    const [inputValue, setInputValue] = useState("");

    const removeHandler = (removeIndex) => {
        const removeItem = content.filter((item,index) => {
            return removeIndex!== index;
        });
        setContent(removeItem);
    }


    return (
        <div>
            <div>
                <form onSubmit={(event) => {
                    event.preventDefault()
                    const temp = [inputValue, ...content];
                    setContent(temp);
                    setInputValue('')
                }}>
                    <input 
                        type="text"
                        placeholder="Type here..."
                        value={inputValue}
                        onChange={e => setInputValue(e.target.value)}
                        required 
                    />
                    <input type="submit" value="Submit"/>
                {
                    content.map((item, index)) 
                }
                </form>
            </div>
        </div>
    )
}
