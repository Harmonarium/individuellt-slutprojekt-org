import { JSONShowcaseItem } from "@/interfaces/showcase-item";

export async function fetchJSONShowcases():Promise<JSONShowcaseItem[]>{
    const response = await fetch("../data/showcase-items.json");
    const showcases:JSONShowcaseItem[] = await response.json();
    return showcases;
}