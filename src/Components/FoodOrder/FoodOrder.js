import React, { useState } from "react";
import Royxat from "../Royxatlar/Ro'yxat";
import "../FoodOrder/foodOrder.scss";


// bu menyuni ikonkalari
import burger from "../img/burger.png"
import pitsa from "../img/pitsa.png"
import sendvich from "../img/sendvich.jpg"
import asia from "../img/asia fod.png"
import vilka from "../img/vilka.png"

// bu menuni ichidagi restarantlarni rasimlari
import pitsa2 from "../img/pitsakotta.png"
import kfs from "../img/kfs.png";
import burger1 from "../img/burger1.png";
import burger2 from "../img/burger2.png";
import pitsa3 from "../img/Pitsa3.png";




const FoodOrder = (props) => {

    const [name, setName] = useState("");

    return (
        <>  
     
        <div className="red-container">
                <div className="bonda">
                    <div className="bond px-5">
                        <h1>{props.data.title}</h1>
                        <p>{props.data.text}</p>
                        <p>{props.data.text2}</p> 
                        <div>
                            <input type="text" className="form-control juk my-2" placeholder="Restorant yoki Taom nomi" name="" id="" />
                        </div>
                    </div>
                </div>  
            </div> 
        <div className="container-fluid">
               <h4>{props.data.text3}</h4>
            <div className="container8-fluid">
                <div className="royxat_commponent">
                    <div className="royxatlar_content">
                        <div className="royxat2">
                                <div className="royxatlar_container_card1">
                                    <div>
                                        <button onClick={() => setName("burger")} type="radio" className="activ-fluid"><img className="img-fluid" src={burger} />Burger</button>
                                    </div>
                                </div>          
                        </div>
                    </div>
                        <div className="royxatlar_content">
                            <div className="royxat2">
                                    <div className="royxatlar_container_card1">
                                        <div>
                                            <button  onClick={() => setName("pitsa")} type="radio" className="activ-fluid"><img className="img-fluid" src={pitsa} />Pitsa</button>
                                        </div>
                                    </div>          
                            </div>
                        </div>
                        <div className="royxatlar_content">
                            <div className="royxat2">
                                    <div className="royxatlar_container_card1">
                                        <div>
                                            <button onClick={() => setName("sendivich")} type="radio" className="activ-fluid"><img className="img-fluid" src={sendvich} />Sandwich</button>
                                        </div>
                                    </div>          
                            </div>
                        </div>
                        <div className="royxatlar_content">
                            <div className="royxat2">
                                    <div className="royxatlar_container_card1">
                                        <div>
                                            <button onClick={() => setName("asia")} type="radio" className="activ-fluid"><img className="img-fluid" src={asia} />Asia food</button>
                                        </div>
                                    </div>          
                            </div>
                        </div>
                        <div className="royxatlar_content">
                            <div className="royxat2">
                                    <div className="royxatlar_container_card1">
                                        <div>
                                            <button onClick={() => setName("setmenu")} type="radio" className="activ-fluid"><img className="img-fluid" src={vilka} />Set Menu</button>
                                        </div>
                                    </div>          
                            </div>
                        </div>
                </div>

            </div>

        </div>    

        
        
        <div className="royxat_com2">
                 {
                        name === 'burger'? 
                        (<Royxat 
                        ranking={pitsa2}
                        Plaza="Blaze Pizza"
                        time="11.00 AM - 10.00 PM" 
                        /> ):

                        name === 'pitsa'?
                        ( <Royxat 
                        ranking={kfs}
                        Plaza='KFC Restaurant'
                        time="11.00 AM - 10.00 PM" 
                        />): 

                        name === 'sendivich'?
                        ( <Royxat 
                        ranking={burger1}
                        Plaza="Royel Burger"
                        time="11.00 AM - 10.00 PM" 
                        />): 

                        name === 'asia'?
                        ( <Royxat 
                          ranking={burger2}
                        Plaza="Star Food"
                        time="11.00 AM - 10.00 PM" 
                        />): 

                        name === 'setmenu'?
                        (<Royxat 
                        ranking={pitsa3}
                        Plaza="Pizza Ranch"
                        time="11.00 AM - 10.00 PM" 
                         />
                       ): null
                    }    
               </div>
        </>
    )
}
export default FoodOrder;