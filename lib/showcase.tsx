"use client"
import { JSONShowcaseItem, showcaseEventHandler, ShowcaseItem, UnmountedShowcaseItem } from "@/interfaces/showcase-item";
import { fetchJSONShowcases } from "@/server_actions/json-actions";
import { ReactElement } from "react";
import JsxParser from "react-jsx-parser";

function generateExampleShowcase(startColor:string, description:string, title:string, index:number):ShowcaseItem{
    let et01:ReactElement<HTMLDivElement>=<div id={`dp0${index}_et01`} style={{backgroundColor:startColor}} className={`showcase-box bg-${startColor}-400 w-20 h-20`}></div>;
    let eH01=()=>{
        let et=document.getElementById(`dp0${index}_et01`);
        if(et){
            et.style.backgroundColor="yellow";    
        }
            
    }
    let eH02=()=>{
        let et=document.getElementById(`dp0${index}_et01`);
        if(et){
            et.style.backgroundColor="blue";    
        }
            
    }
    let eH03=()=>{
        let et=document.getElementById(`dp0${index}_et01`);
        if(et){
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

function replaceTokens(s:string, numberOfTokens:number, itemIndex:number):string{
    for (let x = 0; x<numberOfTokens; x++){
        s=s.replaceAll(`%et${x+1}%`,`dp_${itemIndex+1}_et${x+1}`);
    }
    return s;
}

export function generateShowcaseFromJSON(jItem:JSONShowcaseItem, itemIndex:number):UnmountedShowcaseItem{
    const cPanel = <JsxParser jsx={jItem.controlPanel} />
    const dPanel = <JsxParser jsx={jItem.displayPanel} />

    const ets:HTMLElement[] = [];
    const ehs:showcaseEventHandler[] = [];
    const ips:HTMLElement[] = [];

    let sItem:UnmountedShowcaseItem = {
        title: jItem.title,
        JSONFunctions: jItem.eventHandlers,
        inputIDs: jItem.inputIDs,
        eventTargetIDs: jItem.eventTargetIDs,
        description: jItem.description,
        imageURL: jItem.imageURL,
        displayPanel: dPanel, 
        controlPanel: cPanel,
        eventTargets: ets,
        eventHandlers: ehs,
        inputs: ips,
        initialized: false,
    }

    return sItem;
}

export function initializeShowcaseitem(item:UnmountedShowcaseItem, itemIndex:number){
    
    item.eventTargetIDs.map((id, index)=>{
        const et = document.getElementById(id);
        if(et){
            et.id=`dp_${itemIndex+1}_et${index+1}`;
            item.eventTargets.push(et);
        } 
    })

    item.inputIDs.map((id, index)=>{
        const ip = document.getElementById(id);
        if(ip){
            ip.id = `cp_${itemIndex+1}_ip${index+1}`;
            item.inputs.push(ip);
        } 
    })

    item.JSONFunctions.map((ev,ind)=>{
        const fBody = ev.function.body;
        const updatedFBody =  replaceTokens(fBody, item.eventTargets.length, itemIndex);

        const eh = (Function(updatedFBody) as showcaseEventHandler);
        document.getElementById((item.inputs[Number(ev.function.inputIndex)]).id)?.addEventListener('click',eh);
        item.eventHandlers.push(eh);
        
    })

}
