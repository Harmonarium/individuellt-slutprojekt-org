import PresentationSection from "@/components/sections/presentation-section";
import ShowcaseSection from "@/components/sections/showcase-section";

export default function LandingPage(){
    function generateShowcase(){}
    return(
        <>
            <main>
                <PresentationSection />
                <ShowcaseSection />
                <section className="sample-projects">
                    <h2 className="text-center">Sample projects</h2>
                    <ul>
                        <li><div className="p-8 m-4 bg-red-300 border-black-300 border-2 border-solid">sample-project</div></li>
                        <li><div className="p-8 m-4 bg-red-300 border-black-300 border-2">sample-project</div></li>
                        <li><div className="p-8 m-4 bg-red-300 border-black-300 border-2">sample-project</div></li>
                    </ul>
                </section>
            </main>    
        </>
    );
}