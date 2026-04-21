function capitalizeFunc(str){
    if(typeof(str) === "string"){
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    } else return "String input only";
}

export { capitalizeFunc };