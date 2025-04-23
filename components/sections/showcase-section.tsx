"use client"

import Image from "next/image";
import Section from "../section";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ShowcaseItem, UnmountedShowcaseItem } from "@/interfaces/showcase-item";
import { generateExampleShowcases } from "@/lib/showcase";
import { generateShowcasesFromJSON } from "@/lib/showcase-generator";


/* interface ShowcaseItem{
    id:number;
    title:string;
    imageUrl:string;
    description:string;
} */

interface ShowcaseListItemProps{
    item: ShowcaseItem | UnmountedShowcaseItem;
}

function ShowcaseListItem({item}:ShowcaseListItemProps){
    const router=useRouter();

    return (
        <li className="showcase-list-item" onClick={()=>router.push('/showcase')}>
            {/* <Image src={item.imageURL} alt={item.title} width={200} height={100} /> */}
            {item.displayPanel}
            <h3>{item.title}</h3>
            <p>{item.description}</p> 
        </li>
    );
}

interface ShowcaseListProps{
    listItems: ShowcaseItem[] | UnmountedShowcaseItem[];
}

function ShowcaseList({listItems}:ShowcaseListProps){

    return (
        <ul className="showcase-list">
            {listItems.map((li, index)=>(<ShowcaseListItem item={li} key={index}/>))}
        </ul>
    );
}

export default function ShowcaseSection(){
    const [showcases, setShowcases] = useState<ShowcaseItem[] | UnmountedShowcaseItem[]>([]);
    useEffect(()=>{
        const genShowcases = async ()=> {
            setShowcases(await generateShowcasesFromJSON());
        };
        genShowcases();
    }, []);

    /* function generateShowcaseItems():ShowcaseItem[]{
        let ims=[];
        for (let x=0;x<10;x++)
            ims[x] = {id:x, title:"Showcase item "+(x+1), imageUrl: "/vercel.svg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
        return ims;
    } */

    /* const items:ShowcaseItem[]=generateShowcaseItems(); */
    
    if (showcases.length>0){
        return (
        <Section className="showcase-section" title="Showcase">
            <ShowcaseList listItems={showcases}/>
            
        </Section>
        );
    }
    else{
        return (<div>loading...</div>);
    }
        
    
}