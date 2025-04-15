import { ShowcaseItem } from "@/interfaces/showcase-item";
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
    onNext: ()=>void;
    onPrevious: ()=>void;
}

function ShowcaseNavigationPanel({onNext, onPrevious, currentIndex, maxIndex}: ShowcaseNavigationProps){

    return(
        <div className="showcase-navigation-panel">
        
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
            <ShowcaseNavigationPanel currentIndex={currentIndex} maxIndex={showcases.length-1} onNext={()=>onNextClick()} onPrevious={()=>onPreviousClick()} />
            <div className="showcase">
                <ShowcaseControlPanel item={showcases[currentIndex]} />
                <ShowcaseDisplay item={showcases[currentIndex]} />
            </div>
        </div>
    );
}