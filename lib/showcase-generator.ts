import { ShowcaseItem, JSONShowcaseItem, UnmountedShowcaseItem } from "@/interfaces/showcase-item";
import { generateShowcaseFromJSON } from "./showcase";
import { fetchJSONShowcases } from "@/server_actions/json-actions";

export async function generateShowcasesFromJSON():Promise<UnmountedShowcaseItem[]>{
    const JSONshowcases:JSONShowcaseItem[] = await fetchJSONShowcases();
    const unmountedShowcases:UnmountedShowcaseItem[]=[];
    let index=0;
    for(const jsi of JSONshowcases){
        unmountedShowcases.push(generateShowcaseFromJSON(jsi,index++));
    }
    return unmountedShowcases;
}