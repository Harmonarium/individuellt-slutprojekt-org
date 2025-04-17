import { ShowcaseItem, JSONShowcaseItem } from "@/interfaces/showcase-item";
import { generateShowcaseFromJSON } from "./showcase";
import { fetchJSONShowcases } from "@/server_actions/json-actions";

export async function generateShowcasesFromJSON():Promise<ShowcaseItem[]>{
    const JSONshowcases:JSONShowcaseItem[] = await fetchJSONShowcases();
    const showcases:ShowcaseItem[]=[];
    for(const jsi of JSONshowcases){
        showcases.push(generateShowcaseFromJSON(jsi));
    }
    return showcases;
}