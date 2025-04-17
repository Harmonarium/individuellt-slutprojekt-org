import ShowcaseContainer from "@/components/showcase/showcase-container";
import {generateExampleShowcases} from "@/lib/showcase";

export default function Showcase(){

    return(
        <>
            <ShowcaseContainer showcases={generateExampleShowcases()} index={0}/>
        </>
    );
}