import { ShowcaseItem, JSONShowcaseItem } from "@/interfaces/showcase-item";
import { generateShowcaseFromJSON } from "./showcase";
import { fetchJSONShowcases } from "@/server_actions/json-actions";

export async function generateShowcasesFromJSON():Promise<ShowcaseItem[]>{
    const JSONshowcases:JSONShowcaseItem[] = await fetchJSONShowcases();
    const showcases:ShowcaseItem[]=[];
    let index=0;
    for(const jsi of JSONshowcases){
        showcases.push(generateShowcaseFromJSON(jsi,index++));
    }
    return showcases;
}