import React from "react";
import telegram from "../img/telegram.jpg"
import "../Footer/foter.scss";
import CostumLink from "../CostumLink/CostumLink";

// 1const setActive = ({ isActive }) => isActive ? 'active-link' : '';  (linklani bunaqa qb ishlatsaxam bo'ladi)
{/* 2<NavLink to="/" style={({isActive}) => ({color: isActive ? 'var(--color-active)' : 'rgba(255, 255, 255, 0.413)'})} */}

const Footer = (props, title,text,text2) => {
    return (
        <>
        <div className="container2-fluid">
               <div className="KA1  text-center py-3">
                       <div className="tezkor">
                           <h5>{props.text}</h5>
                           <p>{props.text2}</p>
                           <a href="http://t.me/YemakBot" className="FooterBot">
                              <img className="img-fluid" src={telegram} alt="" />
                              <span>MyRestorantBot</span>
                           </a>
                       </div>
                    <div className="col-md-2">
                        <ul>
                             <li>
                                <CostumLink to="/">Bosh Saxifa</CostumLink>     
                             </li>
                             <li>
                                <CostumLink  to="/bizhaqimizda">Biz haqimizda</CostumLink>     
                             </li>    
                             <li>
                                <CostumLink  to="/hamkor">Hamkorlar</CostumLink>     
                             </li>        
                        </ul>    
                    </div>
                    <div className="col-md-3">
                        <ul>
                             <li>
                                <CostumLink to="/foydalanish">Foydalanish Shartlari</CostumLink>     
                             </li>
                             <li>
                                <CostumLink  to="/boglanish">Bog'lanish</CostumLink>     
                             </li>    
                             <li>
                                <CostumLink  to="/prducts">prducts</CostumLink>     
                             </li>        
                        </ul>    
                    </div>
                    {/* <div className="col-md-2">
                        <ul>
                             <li>
                                <CostumLink to="/">Order</CostumLink>     
                             </li>
                             <li>
                                <CostumLink  to="/prducts">prducts</CostumLink>     
                             </li>    
                             <li>
                                <CostumLink  to="/prducts">prducts</CostumLink>     
                             </li>        
                        </ul>    
                    </div> */}
                    {/* <div className="col-md-2">
                        <ul>
                             <li>
                                <CostumLink to="/">Order</CostumLink>     
                             </li>
                             <li>
                                <CostumLink  to="/prducts">prducts</CostumLink>     
                             </li>    
                             <li>
                                <CostumLink  to="/prducts">prducts</CostumLink>     
                             </li>        
                        </ul>    
                    </div> */}
                </div>    
         </div>
         <div className="counter-fluid">
            <div className="li">
               <div className="kan">
                  <p>{props.title}</p>
               </div>
            </div>
         </div>
        </>
    )
}
export default Footer;