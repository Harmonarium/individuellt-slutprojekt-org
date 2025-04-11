import Image from "next/image";
import Section from "../section";

interface ShowcaseItem{
    id:number;
    title:string;
    imageUrl:string;
    description:string;
}

interface ShowcaseListItemProps{
    item: ShowcaseItem;
}

function ShowcaseListItem({item}:ShowcaseListItemProps){

    return (
        <li className="showcase-list-item">
            <Image src={item.imageUrl} alt={item.title} width={200} height={100} />
            <h3>{item.title}</h3>
            <p>{item.description}</p> 
        </li>
    );
}

interface ShowcaseListProps{
    listItems: ShowcaseItem[];
}

function ShowcaseList({listItems}:ShowcaseListProps){

    return (
        <ul className="showcase-list">
            {listItems.map((li)=>(<ShowcaseListItem item={li} key={li.id}/>))}
        </ul>
    );
}

export default function ShowcaseSection(){
    function generateShowcaseItems():ShowcaseItem[]{
        let ims=[];
        for (let x=0;x<10;x++)
            ims[x] = {id:x, title:"Showcase item "+x, imageUrl: "/vercel.svg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
        return ims;
    }

    const items:ShowcaseItem[]=generateShowcaseItems();

    return (
        <Section title="Showcase">
            <ShowcaseList listItems={items}/>

        </Section>
    );
}