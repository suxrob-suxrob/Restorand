import React from "react";
import "../MenyuRestorant/MenyuRes.scss";
import { TestComponent } from "../TestComponent/TestComponent";


const MenyuRestorand = () => {
    return (
        <>
           <div className="navbar-md">
                <TestComponent 
                   title="burger"
                    text='pitsa'
                    tex2="sendivich"
                    text3="hoddoog" 
                    text4="lamon" />

                    {/* <TestComponent 
                    title="koksomsa"
                    text='palov'
                    tex2="chuchvara"
                    text3="tok osh" 
                    text4="bishtex" />   

                    <TestComponent 
                    title="ascasc"
                    text='pitsa'
                    tex2="sendivich"
                    text3="hoddoog" 
                    text4="lamon" />   

                    <TestComponent 
                    title="aaaaaa"
                    text='aaaaaa'
                    tex2="aaaaaa"
                    text3="aaaaaa" 
                    text4="aaaaaa" />   

                    <TestComponent 
                    title="bbbbb"
                    text='bbbbbb'
                    tex2="bbbbbb"
                    text3="bbbbbb" 
                    text4="bbbbbb" />   

                    <TestComponent 
                    title="sssss"
                    text='sssssssss'
                    tex2="ssssssss"
                    text3="sssss" 
                    text4="sssss" />       */}
           </div>
        </>
    )
}
export default MenyuRestorand;