"use client"

import ShowcaseContainer from "@/components/showcase/showcase-container";
import { ShowcaseItem } from "@/interfaces/showcase-item";
import { ReactElement } from "react";

function generateShowcases():ShowcaseItem[]{
    let showcases:ShowcaseItem[] = [];
    let et01:ReactElement<HTMLDivElement>=<div id="dp01_et01" className="showcase-box bg-blue-400 w-200 h-200"></div>;
    const eH01=()=>{et01.props.classList.replace("bg-blue-400","bg-amber-400")}
    let ip01=<input id="cp01_ip01" className="showcase-input-button" type="button" onClick={eH01}>Change Color</input>;

    let showcase:ShowcaseItem = {
        title:"test",
        imageURL:"/vercel.svg",
        description:"Testshowcase. Press button to change color",
        inputs: [ip01],
        eventHandlers: [eH01],
        eventTargets: [et01],
        controlPanel: <div id="cp01" className="control-panel"></div>,
        displayPanel: <div id="dp01" className="display-panel"></div>
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