import Link from "next/link";
import { ReactNode } from "react";

export function NavItem({children, href}:{children:ReactNode, href:string}){
    return(
        <li className="nav-item">
            <Link href={href}>
                {children}
            </Link>
        </li>
    );
}

export function SiteNavList({children}:{children:ReactNode}){
    return(
        <ul className="site-navigation-list">
            {children}
        </ul>
    );
}

export function ExtNavList(){

}

export function GlobalHeader(){

}