import PresentationSection from "@/components/sections/presentation-section";

export default function LandingPage(){
    function generateShowcase(){}
    return(
        <>
            <main>
                <PresentationSection />
                <section className="presentation flex flex-col">
                    <div className="flex m-4 gap-4">
                        <div className="bg-zinc-300 p-10 flex-1">Image</div>
                        <div className="bg-red-600 p-10 flex-3">Presentation</div>  
                    </div>
                    <div className="bg-red-300 p-10 m-4">Background</div>
                </section>
                <section className="showcase">
                    <h2 className="text-center">Showcase</h2>
                    <ul className="flex flex-wrap">
                        <div className="p-10 m-4 bg-red-300">showcase-item</div>
                        <div className="p-10 m-4 bg-red-300">showcase-item</div>
                        <div className="p-10 m-4 bg-red-300">showcase-item</div>
                        <div className="p-10 m-4 bg-red-300">showcase-item</div>
                        <div className="p-10 m-4 bg-red-300">showcase-item</div>
                        <div className="p-10 m-4 bg-red-300">showcase-item</div>
                        <div className="p-10 m-4 bg-red-300">showcase-item</div>
                        <div className="p-10 m-4 bg-red-300">showcase-item</div>
                    </ul>
                </section>
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