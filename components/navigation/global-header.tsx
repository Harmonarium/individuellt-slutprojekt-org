import Link from "next/link";
import { ReactNode } from "react";
import GlobalHeading from "../global-heading";
import Image from "next/image";

export function NavItem({children, href}:{children:ReactNode, href:string}){
    return(
        <li className="nav-item">
            <Link href={href}>
                {children}
            </Link>
        </li>
    );
}

export function NavList({children, className}:{children:ReactNode, className?:string | undefined}){
    return(
        <ul className={"navigation-list " + (className ?? "")}>
            {children}
        </ul>
    );
}

export function GlobalHeader(){
    return(
        <header className="global-header">
            <GlobalHeading content="Portfolio Site" />
            <NavList className="global-header-navigation-list">
                <NavItem href="#">About</NavItem>
                <NavItem href="#">Showcase</NavItem>
                <NavItem href="#">Sample Project</NavItem>
            </NavList>
            <NavList className="global-header-external-link-list">
                <NavItem href="http://www.github.com"><Image src="globe.svg" alt="GitHub profile" width={34} height={34}/></NavItem>
                <NavItem href="http://www.linkedin.com"><Image src="file.svg" alt="linkedIn profile" width={34} height={34}/></NavItem>
            </NavList>
        </header>
    );
}