import ExampleProjects from "@/components/sections/example-projects";
import PresentationSection from "@/components/sections/presentation-section";
import ShowcaseSection from "@/components/sections/showcase-section";

export default function LandingPage(){
    function generateShowcase(){}
    return(
        <>
            <main>
                <PresentationSection />
                <ShowcaseSection />
                <ExampleProjects />
            </main>    
        </>
    );
}