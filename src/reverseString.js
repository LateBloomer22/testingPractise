function reverseStringFunc(str){
    if(typeof(str) === "string"){
        let newStr = "";
        for (let i = str.length; i > 0; i--){
            newStr = newStr + str.charAt(i-1);
        }
        return newStr;
    } else return "String input only"
}

export { reverseStringFunc };