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

export function NavList({children, className}:{children:ReactNode, className:string | undefined}){
    return(
        <ul className={className ?? ""}>
            {children}
        </ul>
    );
}

export function GlobalHeader(){

}