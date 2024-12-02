
import React from "react";
// import useState:
import { useState } from "react";
// import react icons from npmjs: 
import { FaTrashAlt } from "react-icons/fa";

function Content(){

    const [items, setItem] = useState(
        [
            {
                id: 1,
                check: true,
                item: "Wake Up in morning"
            },
            {
                id: 2,
                check: true,
                item: "Practice coding"
            },
            {
                id: 3,
                check: false,
                item: "Play Cricket"
            },

        ]
    )

    function handleCheck(ids){
        const listItems = items.map((eachItem1) => 
            eachItem1.id === ids ? {...eachItem1, check: !eachItem1.check} : eachItem1  // Here, '{...eachitem1, check: !eachItem1.check}' eachitem1 is joined to the changing object value because we need to join the other two object values in the changing array.
        )
        setItem(listItems);
    }

    function handleDelete(deleteId){
        
    }
   
    return(
        <main>
            <ul>
                { items.map((eachItem) => (
                    <li className="item" key={eachItem.id}>  {/* We must give key in tag whenever we use array*/}
                        <input type = "checkbox" onChange={() => handleCheck(eachItem.id)} checked = {eachItem.check} />
                        <label>{eachItem.item}</label>
                        <FaTrashAlt role="button" onClick={() => handleDelete(eachItem.id)}/>
                    </li>
                ))}
            </ul>
        </main>
    )

}

export default Content;

