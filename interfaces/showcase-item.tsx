import { ReactNode } from "react";

export type showcaseEventHandler = () => void;

export interface JSONfunction{
    function: {
        arguments:string;
        body:string;
        inputIndex:string,
        targetIndex:string,
        type:string,
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

export interface UnmountedShowcaseItem extends ShowcaseItem{
    JSONFunctions: JSONfunction[];
    inputIDs: string[];
    eventTargetIDs: string[];
    initialized: boolean;
}

export interface ShowcaseItem{
    displayPanel: ReactNode;
    controlPanel: ReactNode;
    eventTargets: HTMLElement[];
    inputs: HTMLElement[];
    eventHandlers: showcaseEventHandler[];
    description: string;
    title: string;
    imageURL: string;
}