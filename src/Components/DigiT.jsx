import React, { useState } from "react";
import './DigiT.css';


const Time = () => {
    let time = new Date().toLocaleTimeString();

const [set, setTime] = useState(time);
const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setTime(time);
};
setInterval(UpdateTime, 1000);

    return (
        <>
        <div className="DigiT">
            <h1>{set}</h1>
        </div>

        </>
    );
}
export default Time;