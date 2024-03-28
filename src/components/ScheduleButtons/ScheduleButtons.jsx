import React from "react";
import Dropdown from "../Dropdown/Dropdown";

const buttonStyles = [
    { id: 1, borderColor: "#50cf99",array:["Ambala"," Krukshetra", "Sirsa ","Karnal", "Sonipat", "Hisar"]},
    { id: 2, borderColor: "#7ee57a",array:["Udupi","Chikmagalur","Tumkur","Kolar","Bangalore Rural","Dharwad"] },
    { id: 3, borderColor: "#247c8c",array:["Latur"]},
    { id: 4, borderColor: "#4c8c5c",array:["Palghar", "Latur", "Baramati", "Ratnagiri - Sindhudurg", "Kolhapur"] },
    { id: 5, borderColor: "#97c19f",array:["Aska","Jagatsinghpur","Nabarangapur","Koraput","Puri"] },
    { id: 6, borderColor: "#3b4240",array:["Bikaner"," Jhunjhunun"," Alwar"," Jodhpur"," Sikar"] },
    { id: 7, borderColor: "black",array:["Ambala"] },
];


const ButtonFunction=()=>{
    const handleButtonClick=()=>{

    }
}

const ScheduleButtons = ({handleClick}) => {
     

    return (

            
<div className="main_container" style={{marginLeft:"5rem",marginBottom:"40rem"}}>
            <div
            className=" schedule_container"
                    style={{ border: `1px solid gray`,position:"relative" }}
                >
                    <div className="topbtn" >Phase 1-7</div>
                    {buttonStyles.map((style, index) => (
                        <button
                            
                            onClick={()=>handleClick(style.borderColor,style.array)}
                            key={index}
                            className="sc_btns"
                            style={{
                                
                                background: `${style.borderColor}`,
                                borderRadius: "10px",
                                paddingLeft: "10px",
                               

                            }}
                        >
                            <div
                                style={{
                                    border: `2px solid ${style.borderColor}`,
                                    background: "white",
                                    borderRadius: "10px",
                                }}
                            >
                                <span>Phase{index + 1}</span>
                                <span>April{index + 1}</span>
                            </div>
                        </button>
                    ))}
                    <button className="res_btn">
                        <span>Result</span>
                        <span>April 8</span>
                    </button>
                    </div>
                   
            </div>
    
    );
};
//assadasa
export default ScheduleButtons;
