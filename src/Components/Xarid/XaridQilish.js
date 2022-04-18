import React,{useState} from "react";
import './xarid.scss';
// import burgerg from "../src/Components/img/burgerMenu.png"
import burgerg from "../img/burgerMenu.png"

const Xarid = () => {
  const [button, setButton] = useState(0);

    return (
        <>
           <div className="container9-fluid">
               <div className="das">
                    <div className="img">
                            <img src={burgerg} alt="" />
                    </div>
                    <div className="product_steak">
                        <p>Steak fries</p>
                    </div>
                    <div className="product_obmen">
                        <p>Obmen</p>
                        <div className="product_radio1">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label className="form-check-label" htmlfor="flexRadioDefault1">
                                 <span>Стандарт</span>  
                            </label>
                            <hr />
                        </div>
                        <div className="product_radio2">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                               <label className="form-check-label" htmlfor="flexRadioDefault2">
                                 <span>Bigger</span>
                               </label>
                              <hr />
                        </div>
                        <div className="product_increment1">
                            <div className="product_increment2">
                                     <button onClick={() => setButton(button -1)} className="btn btn-danger">-</button>
                                    <button onClick={() => setButton(button +1)} className="btn btn-danger">+</button>
                                    <span>кол-во: {button}</span>
                            </div>
                            <span>12000</span>
                        </div>
                        <button type="submit" className="btm btn-primary">Добавить в корзину</button>
                    </div>
               </div>
           </div>
        </>
    )
}

export default Xarid;