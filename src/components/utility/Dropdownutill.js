export const dropDownArray= function (optionObject , key) {
    return optionObject[key].map((optionArray)=>{
        return optionArray;
    });
    
}
 export const radioArray = function(radioObject , key){
    return radioObject[key].map((radioArray)=>{
        return radioArray;
    })
 }