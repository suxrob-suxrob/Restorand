import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import "./testComponent.scss";
// import { MenuComponent } from "./MenuComponent";
import Anqara from "../img/Anqara.jpg";
import pitsa from "../img/burger1.png"
import gamburger1 from "../img/gamburger1.svg";
import gamburger3 from "../img/gamburger3.svg";
import gamburger4 from "../img/gamburger4.svg";
import gamburger5 from "../img/gamburger5.svg";
import star from "../img/star_full.svg";
import MenuComponent from "../MenyuComponents/MenuComponent";


const TestComponent = (props) => {

    const [menu,setMenu] = useState("");
    const navigate = useNavigate();

    const handleClick = () => {
        setTimeout(() => {
            navigate("/FoodOrder");
            
        }, 1000);
    }
    
    return (
        <>
           <nav className="navbar navbar-light bg-light">
                <div className="container-lg">
                    <div className="container">
                        <div className="nav-content">
                            <a onClick={handleClick} className="navbar-brand">Restoran</a>
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Restoran yoki taom nomi" aria-label="Search"/>
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                            <div className="btnm">
                                <button className="btn btn-danger">Kirish</button>
                            </div>
                        </div>
                    </div>                
                  </div>
                  <div className="Anqara">
                      <img src={Anqara} alt="" />
                      <div className="container-sm">
                          <div className="menyu_restorand">
                              <div className="menyu_content01">
                                    <div className="menyu_content">
                                        <div className="menyu_content1">
                                            <p onClick={() => setMenu("Cheeseburger With Salad")}>nimadir</p>
                                        </div>
                                    </div>
                                    <div className="menyu_content">
                                        <div className="menyu_content1">
                                            <p onClick={() => setMenu("Burger")}>nimadir</p>
                                        </div>
                                    </div>
                                    <div className="menyu_content">
                                        <div className="menyu_content1">
                                            <p onClick={() => setMenu("sendivich")}>nimadir</p>
                                        </div>
                                    </div>
                                    <div className="menyu_content">
                                        <div className="menyu_content1">
                                            <p onClick={() => setMenu("Lavash")}>nimadir</p>
                                        </div>
                                    </div>
                              </div>
                              
                          </div>
                      </div>
                  </div>
            </nav>

            <div className="menu_component"> 
            
                 {
                    menu === 'Cheeseburger With Salad'?
                    ( <MenuComponent 
                     image={gamburger1} 
                     ranking={star}
                     title="Cheeseburger With Salad"
                     price="$15.99"
                     />):
     
                     menu === 'Burger'?
                     (<MenuComponent 
                     image={gamburger3} 
                     ranking={star}
                     title="Cheeseburger With Salad"
                     price="$17.45"
                     />):
     
                     menu === 'sendivich'?
                    ( <MenuComponent 
                     image={gamburger5} 
                     ranking={star}
                     title="Cheeseburger With Salad"
                     price="$10.00"
                     />):
     
                     menu === 'Lavash'?
                    ( <MenuComponent 
                     image={gamburger1} 
                     ranking={star}
                     title="Cheeseburger With Salad"
                     price="$12.85"
                     />):
     
                     menu === 'Cheeseburger With Salad'?
                   (  <MenuComponent 
                     image={gamburger4} 
                     ranking={star}
                     title="Cheeseburger With Salad"
                     price="$14.78"
                     />):
     
                     menu === 'Cheeseburger With Salad'?
                    ( <MenuComponent 
                     image={gamburger4} 
                     ranking={star}
                     title="Cheeseburger With Salad"
                     price="$22.15"
                     />):
     
                     menu === 'Cheeseburger With Salad'?
                     ( <MenuComponent 
                     image={gamburger4} 
                     ranking={star}
                     title="Cheeseburger With Salad"
                     price="$66.00"
                     />):
     
                     menu ==='Cheeseburger With Salad'?
                    (  <MenuComponent 
                     image={gamburger4} 
                     ranking={star}
                     title="Cheeseburger With Salad"
                     price="$13.95"
                     />):
     
                     menu === 'Cheeseburger With Salad'?
                    (  <MenuComponent 
                     image={gamburger4} 
                     ranking={star}
                     title="Cheeseburger With Salad"
                     price="$17.32"
                     />): null
                }
           </div>
        </>
    );
}
export { TestComponent };