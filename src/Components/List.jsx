import React, { useState } from "react";
import './List.css';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';


const List = () => {
    const [inputList, setinputList] = useState("");
    const [listItem, setitemList] = useState([]);

    const itemEvent = (event) => {
        setinputList(event.target.value)
    };

    const listOfItem = () => {
        setitemList((oldItem) => {
            return [...oldItem, inputList];
        });
        setinputList(" ");
    };
    return (

        <div className="maindiv">
            <div className="centdiv">
                <br/>
                <h1 className="heads">ToDo List</h1>
                <br />
                <input type="text"  placeholder="Add Item" value={inputList} className=""
                    onChange={itemEvent} />
                <Tooltip title="Add" aria-label="add">
                    < Button className="btn" onClick={listOfItem} value={inputList}> <AddIcon/> 
                    </ Button>
                    </Tooltip>
            <ul>
                {listItem.map((itemval) => {
                    return <li>{itemval} </li>;
                })}
            </ul>
        </div>
        </div >

    );
}



export default List;