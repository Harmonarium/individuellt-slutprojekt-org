import SampleProjects from "@/components/sections/sample-projects";
import PresentationSection from "@/components/sections/presentation-section";
import ShowcaseSection from "@/components/sections/showcase-section";

export default function LandingPage(){
    return(
        <>
            <main>
                <PresentationSection />
                <ShowcaseSection />
                <SampleProjects />
            </main>    
        </>
    );
}