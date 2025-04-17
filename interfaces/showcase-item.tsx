import { ReactNode } from "react";

export type showcaseEventHandler = () => void;

export interface JSONfunction{
    function: {
        arguments:string;
        body:string;
    }
}

export interface JSONShowcaseItem{
    displayPanel: string;
    controlPanel: string;
    eventTargetIDs: string[];
    inputIDs: string[];
    eventHandlers: JSONfunction[];
    description: string;
    title:string;
    imageURL:string;
}

export interface ShowcaseItem{
    displayPanel: ReactNode;
    controlPanel: ReactNode;
    eventTargets: ReactNode[];
    inputs: ReactNode[];
    eventHandlers: showcaseEventHandler[];
    description: string;
    title: string;
    imageURL: string;
}