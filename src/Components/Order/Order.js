import React from "react";
import "../Order/order.scss";
import { NavLink } from "react-router-dom";

const Order = () => {
    let buttonName = 'BAND QILISH'
    let buttonName2 = 'Zakaz Berish'
    
    return (
        <>
        <header>
            <div className="food">
                <div className="container-fluid">
                    <div className="btn input ">
                        <input type="radio" className="btn-check" name="options-outlined" id="success-outlined" autoComplete="off"/>
                        <NavLink className="Play-store" to="/bron"><label className="btn app btn-outline-success" for="success-outlined">{buttonName}</label></NavLink> 

                        <input type="radio" className="btn-check" name="options-outlined" id="danger-outlined" autoComplete="off" />
                        <NavLink className="App-store" to="/FoodOrder"><label className="btn app btn-outline-primary" for="danger-outlined">{buttonName2}</label></NavLink>  
                    </div>
                </div>
            </div>   
        </header>
           
        </>
    )
}
export default Order;