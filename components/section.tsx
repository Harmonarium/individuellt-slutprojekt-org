import { ReactNode } from "react";
import SubHeading from "./sub-heading";

interface SectionProps{
    title ?: string;
    children ?: ReactNode;
}

export default function Section({title, children} : SectionProps){
    const tit= title || "";
    if (title){
        return (
            <section>{children}</section>
        );
    }
    else{
    return(
        <section>
            <SubHeading content={tit}/>
            {children}
        </section>
    );
    }
}