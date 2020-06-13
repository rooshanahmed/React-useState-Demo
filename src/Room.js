import React, { useState } from 'react';
import './Room.css';


const Room = () => {
    let [isLit , setLit] = useState("OFF");

return (
    <div className={`room ${isLit}`}>
        <p className="light">Lights are {isLit} !!!</p>
        <button className="on" onClick={() => {setLit(isLit = "ON")}}>
            Turn On
        </button>
        <button className="off" onClick={() => {setLit(isLit = "OFF")}}>
            Turn Off
        </button>

        <br />
        <button className="red" onClick={() =>{
            if (isLit === "ON" || isLit === "RED" || isLit === "GREEN" || isLit === "BLUE"){
            setLit(isLit = "RED")
            } else {alert("Switch on the lights first")}
        }}>Red Light</button>
        <button className="green" onClick={() =>{
            if (isLit === "ON" || isLit === "RED" || isLit === "GREEN" || isLit === "BLUE"){
            setLit(isLit = "GREEN")
            } else {alert("Switch on the lights first")}
        }}>Green Light</button>
        <button className="blue" onClick={() =>{
            if (isLit === "ON" || isLit === "RED" || isLit === "GREEN" || isLit === "BLUE"){
            setLit(isLit = "BLUE")
            } else {alert("Switch on the lights first")}
        }}>Blue Light</button>
    </div>
);
}

export default Room;