import Link from "next/link";
import Section from "../section";
import Image from "next/image";

interface SampleProject{
    title:string;
    description:string;
    projectUrl:string;
    githubUrl:string;
    imageUrl:string
}

function SampleProjectListItem({item}:{item:SampleProject}){

    return(
        <li className="sample-project-list-item">
            <Image src={item.imageUrl} alt={item.title} width={100} height={100}/>
            <div className="sample-project-text">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
            </div>
            <Link href={item.projectUrl}><button className="sample-project-button">Take me there!</button></Link>
            <Link href={item.githubUrl}><Image className="sample-project-social-media-image" src="/github.png" alt="github link" width={100} height={100}/></Link>
        </li>
    );
}

function SampleProjectList({projects}:{projects:SampleProject[]}){
    return(
        <ul className="sample-project-list">
            {projects.map((sp, index)=><SampleProjectListItem item={sp} key={index}/>)}
        </ul>
    )
}


export default function SampleProjects(){
    let projects:SampleProject[]=generateProjects();

    function generateProjects():SampleProject[]{
        let proj:SampleProject[]=[];
        
        for(let x=0;x<3; x++){
            proj[x]={
                title:"Sample Project"+(x+1),
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                projectUrl:"http://www.github.com/",
                githubUrl:"http://www.github.com/",
                imageUrl:"/vercel.svg"
            };
        }

        return proj;
    }

    return(
        <Section className="sample-projects" title="Sample Projects">
            <SampleProjectList projects={projects} />
        </Section>
    );
}