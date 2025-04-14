import SampleProjects from "@/components/sections/sample-projects";
import PresentationSection from "@/components/sections/presentation-section";
import ShowcaseSection from "@/components/sections/showcase-section";
import { fetchPresentationContent } from "@/server_actions/server-actions";

export default function LandingPage(){
    function generateShowcase(){}
    console.log(process.env.DATABASE_URL);
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