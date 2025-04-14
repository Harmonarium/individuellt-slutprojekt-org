import { supabase } from "./supabase";

export async function fetchPresentationContent(){
    let {data, error} = await supabase.from('Presentation').select('Content(text)').eq('section_name','Presentation');
    if(error){
        console.log("Error: ", error);
    }
    else{
        if(data!=null){
            console.log(data);
            let obj=data[0];
            let content=obj.Content;
            let text=content.text;
            console.log(text);
            return text;
        }
        
    }
    
    
}