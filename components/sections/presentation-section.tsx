import Section from "../section";
import Image from "next/image";

export default function PresentationSection(){

    return(
        <Section title="Presentation" className="presentation-section">
            <Image className="bg-zinc-300" src='/vercel.svg' alt='me' width={100} height={175}/>
            <article className="presentation-article">My presentation</article>
            <article className="background-article">My background</article>
        </Section>
    );
}