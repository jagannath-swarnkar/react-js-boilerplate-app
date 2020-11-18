export const updateCounter = (type, payload) =>{
    if(!payload === undefined){
        return {type, payload}
    }else{
        console.log("Error in counter action: (payload)",payload);
        return
    }
}