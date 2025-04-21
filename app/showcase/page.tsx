"use client"
import ShowcaseContainer from "@/components/showcase/showcase-container";
import { ShowcaseItem, UnmountedShowcaseItem } from "@/interfaces/showcase-item";
import { generateExampleShowcases, initializeShowcaseitem} from "@/lib/showcase";
import { useState, useEffect } from "react";
import { generateShowcasesFromJSON } from "@/lib/showcase-generator";

export default function Showcase(){
    const [index, setIndex] = useState(0);
    const [showcases, setShowcases] = useState<ShowcaseItem[] | UnmountedShowcaseItem[]>([])
    const fetchShowcases = async ()=> {
        const shc = await generateShowcasesFromJSON();
        setShowcases(shc);
    };
    useEffect(()=>{
        fetchShowcases();
    },[]);
    useEffect(()=>{
        const sitem = showcases[index];
        if(sitem && "initialized" in sitem && !sitem.initialized){
            initializeShowcaseitem(sitem, index);
        }
    },[showcases])
    
    return(
        <>
            <ShowcaseContainer showcases={showcases} index={index}/>
        </>
    );
}