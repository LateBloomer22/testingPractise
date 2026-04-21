function ceasarCipher(str, num){
    const charArr = [...str];
    const cipherArr = charArr.map((elem) => {
        const code = elem.charCodeAt(0);
        
        // Uppercase
        if (code >= 65 && code <= 90){
            return String.fromCharCode((code - 65 + num)%26 + 65);
        }

        // Lowercase
        if(code >= 97 && code <= 122){
            return String.fromCharCode((code - 97 + num)%26 + 97);
        }
        return elem;
    });
    return cipherArr.join('');
}

export { ceasarCipher };