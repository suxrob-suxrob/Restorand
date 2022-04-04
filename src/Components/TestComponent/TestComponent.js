import React from "react";

const TestComponent = ({title,text,tex2,text3,text4}) => {
    return (
        <div>
        <h1>TestComponent</h1>
        <div className="container">
                    <div className="Header_navbar">
                             <p>{title}</p>
                             <p>{text}</p>
                             <p>{tex2}</p>
                             <p>{text3}</p>
                             <p>{text4}</p>
                    </div>
               </div>
        </div>
    );
}
export { TestComponent };