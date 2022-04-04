import React, {useState} from "react";
import {Link } from "react-router-dom";
import arrow_product from "../img/arrow_product.svg";

// import burger from "../img/burger.png"

import "../Royxatlar/royxat.scss";

const Royxat = ({ranking,Plaza,time}) => {
  


    return (
        <>
           <div className="container-fluid">
              <div className="cap">
                     <div className="sux1">
                         <div className="modal-fluid">
                              <div className="modal_content">
                                        <div className="modal_img">
                                             <img className="img-fluid" src={ranking} alt="" />
                                        </div>
                                        <div className="modal_text py-3">
                                        <p>{Plaza}</p>
                                        <div className="product_info">
                                             <p className="time">{time}</p>
                                             <Link to='/menyuRes'><button><img src={arrow_product} alt="" /></button></Link>
                                        </div>
                                   </div>
                              </div>  
                              </div>
                         </div>
                         
                  <div className="sux1">
                   <div className="modal-fluid">
                        <div className="modal_content">
                               <div className="modal_img">
                                    <img className="img-fluid" src={ranking} alt="" />
                               </div>
                              <div className="modal_text py-3">
                                 <p>{Plaza}</p>
                                 <div className="product_info">
                                    <p className="time">{time}</p>
                                    <Link to='/menyuRes'><button><img src={arrow_product} alt="" /></button></Link>
                                  </div>
                             </div>
                        </div>  
                    </div>
                 </div>
                  <div className="sux1">
                   <div className="modal-fluid">
                        <div className="modal_content">
                               <div className="modal_img">
                                    <img className="img-fluid" src={ranking} alt="" />
                               </div>
                              <div className="modal_text py-3">
                                 <p>{Plaza}</p>
                                 <div className="product_info">
                                     <p className="time">{time}</p>
                                     <Link to='/menyuRes'><button><img src={arrow_product} alt="" /></button></Link>
                                 </div>
                             </div>
                        </div>  
                    </div>
                 </div>
                  <div className="sux1">
                   <div className="modal-fluid">
                        <div className="modal_content">
                               <div className="modal_img">
                                    <img className="img-fluid" src={ranking} alt="" />
                               </div>
                              <div className="modal_text py-3">
                                 <p>{Plaza}</p>
                                 <div className="product_info">
                                      <p className="time">{time}</p>
                                      <Link to='/menyuRes'><button><img src={arrow_product} alt="" /></button></Link>
                                 </div>
                             </div>
                        </div>  
                    </div>
                 </div>
                  <div className="sux1">
                   <div className="modal-fluid">
                        <div className="modal_content">
                               <div className="modal_img">
                                    <img className="img-fluid" src={ranking} alt="" />
                               </div>
                              <div className="modal_text py-3">
                                 <p>{Plaza}</p>
                                 <div className="product_info">
                                      <p className="time">{time}</p>
                                      <Link to='/menyuRes'><button><img src={arrow_product} alt="" /></button></Link>   
                                 </div>
                             </div>
                        </div>  
                    </div>
                 </div>
                  <div className="sux1">
                   <div className="modal-fluid">
                        <div className="modal_content">
                               <div className="modal_img">
                                    <img className="img-fluid" src={ranking} alt="" />
                               </div>
                              <div className="modal_text py-3">
                                 <p>{Plaza}</p>
                                 <div className="product_info">
                                     <p className="time">{time}</p>
                                     <Link to='/menyuRes'><button><img src={arrow_product} alt="" /></button></Link>
                                 </div>
                             </div>
                        </div>  
                    </div>
                 </div>
                 
              </div>     
           </div>
        </>
    )
}
export default Royxat;