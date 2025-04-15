import { ReactNode } from "react";

type showcaseEventHandler = () => void;

interface ShowcaseItem{
    displayPanel: ReactNode;
    controlPanel: ReactNode;
    eventTargets: ReactNode[];
    inputs: ReactNode[];
    eventHandlers: showcaseEventHandler[];
    description: string;
    title: string;
    imageURL: string;
}