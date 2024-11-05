export const api_key ="AIzaSyAZkYhAxsPBrr1283ADY45SBq79PwR5Qag";

export const textConventor = (text)=>{

    if 
    ( text >= 1000000){
        text = text / 1000000
     
        return (`${Math.floor(text)}m
            ` )
    
    }


else if  (text >= 1000){
        text = text / 1000
 
        return (`${Math.floor(text)}k
            ` )
       
}
else if  (text == 0){
   

    return ("")
   
}
 else {
    return(text)
}

}
