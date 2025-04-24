"use client"

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Start(){
  
  const rout=useRouter();
  useEffect(()=>{ 
    
    rout.push("/home");
  },[rout])
  

  return(
    <></>
  );
}