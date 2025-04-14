import { supabase } from "./supabase";

export async function fetchPresentationContent(){
    let {data, error} = await supabase.from('Presentation').select('Content(text)').eq('section_name','Presentation');
    if(error){
        console.error("Error: ", error);
    }
    else{
        if(data!=null){
            let obj=data[0];
            let content=obj.Content;
            let text=content.text;
            console.log(text);
            return text;
        }
        
    }
    
    
}

export async function fetchBackgroundContent(){
    let {data, error} = await supabase.from('Presentation').select('Content(text)').eq('section_name','Background');
    if(error){
        console.error("Error: ", error);
    }
    else{
        if(data!=null){
            let obj=data[0];
            let content=obj.Content;
            let text=content.text;
            return text;
        }
            
    }
}

export async function fetchPresentationImageURL(){
    let {data, error} = await supabase.from('Presentation').select('Image(image_url)').eq('section_name','Photo');
    if(error){
        console.error("Error: ", error);
    }
    else{
        if(data){
            let obj=data[0];
            let image=obj.Image;
            let image_url=image.image_url;
            return image_url;
        }
    }
}