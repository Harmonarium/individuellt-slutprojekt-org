"use client"

import ShowcaseContainer from "@/components/showcase/showcase-container";
import { ShowcaseItem } from "@/interfaces/showcase-item";
import { ReactElement } from "react";

function generateShowcase(startColor:string, description:string, title:string, index:number):ShowcaseItem{
    let et01:ReactElement<HTMLDivElement>=<div id={`dp0${index}_et01`} style={{backgroundColor:startColor}} className={`showcase-box bg-${startColor}-400 w-20 h-20`}></div>;
    let eH01=()=>{
        let et=document.getElementById(`dp0${index}_et01`);
        if(et){
            /* et.classList.replace("bg-blue-400","bg-zinc-400"); */
            et.style.backgroundColor="yellow";    
        }
            
    }
    let eH02=()=>{
        let et=document.getElementById(`dp0${index}_et01`);
        if(et){
            /* et.classList.replace("bg-blue-400","bg-zinc-400"); */
            et.style.backgroundColor="blue";    
        }
            
    }
    let eH03=()=>{
        let et=document.getElementById(`dp0${index}_et01`);
        if(et){
            /* et.classList.replace("bg-blue-400","bg-zinc-400"); */
            et.style.backgroundColor="red";    
        }
            
    }
    let ip01:ReactElement<HTMLInputElement>=<input id={`cp0${index}_ip01`} className="showcase-input-button" type="button" onClick={eH01} value="Yellow"/>;
    let ip02:ReactElement<HTMLInputElement>=<input id={`cp0${index}_ip02`} className="showcase-input-button" type="button" onClick={eH02} value="blue"/>;
    let ip03:ReactElement<HTMLInputElement>=<input id={`cp0${index}_ip03`} className="showcase-input-button" type="button" onClick={eH03} value="red"/>;

    let showcase:ShowcaseItem = {
        title:title,
        imageURL:"/vercel.svg",
        description:description,
        inputs: [ip01, ip02, ip03],
        eventHandlers: [eH01,eH02,eH03],
        eventTargets: [et01],
        controlPanel: <div id={`cp0${index}`} className="control-panel">{ip01}{ip02}{ip03}</div>,
        displayPanel: <div id={`dp0${index}`} className="display-panel">{et01}</div>
    }
    return showcase;
};

function generateShowcases():ShowcaseItem[]{
    let showcases:ShowcaseItem[] = [
        generateShowcase('red', 'Change the color, starts on red.', 'Change Color(red)',1),
        generateShowcase('blue', 'Change the color, starts on blue.', 'Change Color(blue)',2),
        generateShowcase('yellow', 'Change the color, starts on yellow.', 'Change Color(yellow)',3)
    ];
    return showcases;
}

export default function Showcase(){

    return(
        <>
            <ShowcaseContainer showcases={generateShowcases()} index={0}/>
        </>
    );
}