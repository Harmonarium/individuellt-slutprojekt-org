"use client"

import ShowcaseContainer from "@/components/showcase/showcase-container";
import { ShowcaseItem } from "@/interfaces/showcase-item";
import { ReactElement } from "react";

function generateShowcases():ShowcaseItem[]{
    let showcases:ShowcaseItem[] = [];
    let et01:ReactElement<HTMLDivElement>=<div id="dp01_et01" className="showcase-box bg-blue-400 w-20 h-20"></div>;
    const eH01=()=>{
        const et=document.getElementById("dp01_et01");
        if(et){
            /* et.classList.replace("bg-blue-400","bg-zinc-400"); */
            et.style.backgroundColor="yellow";    
        }
            
    }
    const eH02=()=>{
        const et=document.getElementById("dp01_et01");
        if(et){
            /* et.classList.replace("bg-blue-400","bg-zinc-400"); */
            et.style.backgroundColor="blue";    
        }
            
    }
    const eH03=()=>{
        const et=document.getElementById("dp01_et01");
        if(et){
            /* et.classList.replace("bg-blue-400","bg-zinc-400"); */
            et.style.backgroundColor="red";    
        }
            
    }
    let ip01:ReactElement<HTMLInputElement>=<input id="cp01_ip01" className="showcase-input-button" type="button" onClick={eH01} value="Yellow"/>;
    let ip02:ReactElement<HTMLInputElement>=<input id="cp01_ip02" className="showcase-input-button" type="button" onClick={eH02} value="blue"/>;
    let ip03:ReactElement<HTMLInputElement>=<input id="cp01_ip03" className="showcase-input-button" type="button" onClick={eH03} value="red"/>;

    let showcase:ShowcaseItem = {
        title:"test",
        imageURL:"/vercel.svg",
        description:"Testshowcase, press button to change color",
        inputs: [ip01, ip02, ip03],
        eventHandlers: [eH01,eH02,eH03],
        eventTargets: [et01],
        controlPanel: <div id="cp01" className="control-panel">{ip01}{ip02}{ip03}</div>,
        displayPanel: <div id="dp01" className="display-panel">{et01}</div>
    }

    showcases.push(showcase);

    return showcases;
};

export default function Showcase(){

    return(
        <>
            <ShowcaseContainer showcases={generateShowcases()} index={0}/>
        </>
    );
}