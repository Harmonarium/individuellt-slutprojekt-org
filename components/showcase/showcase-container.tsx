"use client"

import { ShowcaseItem } from "@/interfaces/showcase-item";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


function ShowcaseDisplay({item}:{item:ShowcaseItem}){

    return(
        <div className="showcase-display">
        
        </div>
    );
}

function ShowcaseControlPanel({item}:{item:ShowcaseItem}){

    return(
        <div className="showcase-control-panel">
            
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
            <button onClick={()=>router.push('/home')}>Back</button>
            <h2>{title}</h2>
            <button onClick={onNext}>Next</button>
            <button onClick={onPrevious}>Previous</button>
        </div>
    );
}

export default function ShowcaseContainer({showcases, index = 0}:{showcases:ShowcaseItem[], index:number}){
    const [currentIndex, setCurrentIndex] = useState(0);
    
    function onNextClick(){if(currentIndex<(showcases.length-1))setCurrentIndex(currentIndex+1);}
    function onPreviousClick(){if(currentIndex>0)setCurrentIndex(currentIndex-1);};
    
    useEffect(()=>{
        setCurrentIndex(index);
    },[]);
    useEffect(()=>{

    },[currentIndex]);

    return(
        <div className="ShowcaseContainer">
            <ShowcaseNavigationPanel currentIndex={currentIndex} maxIndex={showcases.length-1} title={showcases[currentIndex].title} onNext={()=>onNextClick()} onPrevious={()=>onPreviousClick()} />
            <div className="showcase">
                <ShowcaseControlPanel item={showcases[currentIndex]} />
                <ShowcaseDisplay item={showcases[currentIndex]} />
            </div>
        </div>
    );
}