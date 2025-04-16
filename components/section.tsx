import { ReactNode } from "react";
import SubHeading from "./sub-heading";

interface SectionProps{
    title ?: string;
    children ?: ReactNode;
    className? : string;
}

export default function Section({title, children, className} : SectionProps){
    const tit= title ?? "";
    console.log("title: " + title);
    if (title){
        return ( 
            <section className={className+" section"}>
                <SubHeading content={tit}/>
                <div className="section-content">
                    {children}    
                </div>
                
            </section>
        );
    }
    else{
    return(
        <section className={className}>
            {children}
        </section>
    );
    }
}