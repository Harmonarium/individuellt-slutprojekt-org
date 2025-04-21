"use client"

import { ShowcaseItem, UnmountedShowcaseItem } from "@/interfaces/showcase-item";
import { initializeShowcaseitem } from "@/lib/showcase";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


function ShowcaseDisplay({item}:{item:ShowcaseItem}){

    return(
        <div className="showcase-display">
            {item.displayPanel}
        </div>
    );
}

function ShowcaseControlPanel({item}:{item:ShowcaseItem}){

    return(
        <div className="showcase-control-panel">
            <p>{item.description}</p>
            {item.controlPanel}
        </div>
    );
}

interface ShowcaseNavigationProps{
    currentIndex: number;
    maxIndex: number;
    title: string;
    onNext: ()=>void;
    onPrevious: ()=>void;
}

function ShowcaseNavigationPanel({onNext, onPrevious, currentIndex, title = "Example "+currentIndex+1,  maxIndex}: ShowcaseNavigationProps){
    const router=useRouter();
    return(
        <div className="showcase-navigation-panel">
            <button className="text-center align-text-bottom" onClick={()=>router.push('/home')}>Back</button>
            <h2 className="align-middle text-center">{title}</h2>
            <button onClick={onPrevious}>Previous</button>
            <p>0{currentIndex+1}/0{maxIndex}</p>
            <button onClick={onNext}>Next</button>            
        </div>
    );
}

export default function ShowcaseContainer({showcases, index = 0}:{showcases:UnmountedShowcaseItem[] | ShowcaseItem[], index:number}){
    const [currentIndex, setCurrentIndex] = useState(0);
    
    function onNextClick(){if(currentIndex<(showcases.length-1))setCurrentIndex(currentIndex+1);}
    function onPreviousClick(){if(currentIndex>0)setCurrentIndex(currentIndex-1);};
    
    useEffect(()=>{
        setCurrentIndex(index);
    },[]);
    useEffect(()=>{
        const sitem = showcases[currentIndex];
        console.log();
        if(sitem && ("initialized" in sitem) && !sitem.initialized)
        initializeShowcaseitem(sitem, index);
    },[currentIndex]);

    console.log("showcase container, showcases.length = "+showcases.length);

    if(showcases.length>0){
        return(
            <div className="showcase-container">
                <ShowcaseNavigationPanel currentIndex={currentIndex} maxIndex={showcases.length} title={showcases[currentIndex].title} onNext={()=>onNextClick()} onPrevious={()=>onPreviousClick()} />
                <div className="showcase">
                    <ShowcaseControlPanel item={showcases[currentIndex]} />
                    <ShowcaseDisplay item={showcases[currentIndex]} />
                </div>
            </div>
        );
    }
    else{
        return (
            <div className="text-zinc-950 text-9xl">Loading...</div>
        )
    }
}