import ShowcaseContainer from "@/components/showcase/showcase-container";
import generateShowcases from "@/lib/showcase";

export default function Showcase(){

    return(
        <>
            <ShowcaseContainer showcases={generateShowcases()} index={0}/>
        </>
    );
}