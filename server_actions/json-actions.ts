import { JSONShowcaseItem } from "@/interfaces/showcase-item";

export async function fetchJSONShowcases():Promise<JSONShowcaseItem[]>{
    const response = await fetch("../data/showcase-items.json");
    const data = await response.json();
    console.log("fetch from json data: " +data);
    const {showcases} = data;
    console.log("showcases: "+(showcases as JSONShowcaseItem[]))
    return showcases;
}