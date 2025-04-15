import Section from "../section";
import Image from "next/image";
import { fetchPresentationContent, fetchBackgroundContent, fetchPresentationImageURL } from "@/server_actions/server-actions";

export default async function PresentationSection(){
    const pres = fetchPresentationContent();
    const back = fetchBackgroundContent();
    const iurl = await fetchPresentationImageURL();
    return(
        <Section title="Presentation" className="presentation-section">
            <div className="top-row">
                <Image className="bg-zinc-300" src={iurl} alt='me' width={100} height={175}/>
                <article className="presentation-article">
                    <h3>My presentation</h3>
                    <p>{pres}</p>
                </article>
            </div>  
            <article className="background-article">
                <h3>My background</h3>
                <p>{back}</p>
            </article>
        </Section>
    );
}