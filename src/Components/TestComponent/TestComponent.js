import React,{} from "react";
import { useNavigate } from "react-router-dom";
import "./testComponent.scss";
import Anqara from "../img/Anqara.jpg";
const TestComponent = ({title,text,tex2,text3,text4}) => {
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
                            <a className="navbar-brand">Restoran</a>
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
                  <div className="container-xl">
                        <div className="Restoran_img">
                            <img className="resPage-fluid" src={Anqara} alt="Restoran" />
                       </div>
                </div>
            </nav>
        </>
    );
}
export { TestComponent };