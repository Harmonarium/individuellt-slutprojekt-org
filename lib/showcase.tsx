"use client"
import { JSONShowcaseItem, showcaseEventHandler, ShowcaseItem } from "@/interfaces/showcase-item";
import { fetchJSONShowcases } from "@/server_actions/json-actions";
import { ReactElement } from "react";
import JsxParser from "react-jsx-parser";

function generateExampleShowcase(startColor:string, description:string, title:string, index:number):ShowcaseItem{
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
        inputs: [document.getElementById(ip01.props.id)!, document.getElementById(ip02.props.id)!, document.getElementById(ip03.props.id)!],
        eventHandlers: [eH01,eH02,eH03],
        eventTargets: [document.getElementById(et01.props.id)!],
        controlPanel: <div id={`cp0${index}`} className="control-panel">{ip01}{ip02}{ip03}</div>,
        displayPanel: <div id={`dp0${index}`} className="display-panel">{et01}</div>
    }
    return showcase;
};

export function generateExampleShowcases():ShowcaseItem[]{
    let showcases:ShowcaseItem[] = [
        generateExampleShowcase('red', 'Change the color, starts on red.', 'Change Color(red)',1),
        generateExampleShowcase('blue', 'Change the color, starts on blue.', 'Change Color(blue)',2),
        generateExampleShowcase('yellow', 'Change the color, starts on yellow.', 'Change Color(yellow)',3)
    ];
    return showcases;
}

export function generateShowcaseFromJSON(jItem:JSONShowcaseItem):ShowcaseItem{
    const ets:HTMLElement[] = [];
    const ehs:showcaseEventHandler[] = [];
    const ips:HTMLElement[] = [];
    jItem.eventTargetIDs.map((id)=>{
        const et= document.getElementById(id);
        if(et){
            ets.push(et);
        } 
    })
    jItem.inputIDs.map((id)=>{
        const ip= document.getElementById(id);
        if(ip){
            ips.push(ip);
        } 
    })
    const eHandlers: {[key:string]:showcaseEventHandler}= {

    }
    jItem.eventHandlers.map((ev,index)=>{
        eHandlers[`eH0${index+1}`] = new Function(ev.function.arguments, ev.function.body) as showcaseEventHandler;
    })
    

    let sItem:ShowcaseItem = {
        title:jItem.title,
        description: jItem.description,
        imageURL: jItem.imageURL,
        displayPanel: <JsxParser jsx={jItem.displayPanel} />, 
        controlPanel: <JsxParser jsx={jItem.controlPanel} bindings={eHandlers}/>,
        eventTargets: ets,
        eventHandlers:ehs,
        inputs: ips,
    }

    return sItem;
}
