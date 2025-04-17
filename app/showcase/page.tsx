"use client"
import ShowcaseContainer from "@/components/showcase/showcase-container";
import { ShowcaseItem } from "@/interfaces/showcase-item";
import { generateExampleShowcases} from "@/lib/showcase";
import { useState, useEffect } from "react";
import { generateShowcasesFromJSON } from "@/lib/showcase-generator";

export default function Showcase(){
    const [showcases, setShowcases] = useState<ShowcaseItem[]>([])
    const fetchShowcases = async ()=> {
        const shc = await generateShowcasesFromJSON();
        setShowcases(shc);
    };
    useEffect(()=>{
        fetchShowcases();
    },[]);
    
    return(
        <>
            <ShowcaseContainer showcases={showcases} index={0}/>
        </>
    );
}