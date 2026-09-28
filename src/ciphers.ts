export const caesarCipher = (string: string, key: number, cipherType: string) :string => {
    const str :string = string.toLowerCase()
    let arr :string[] = str.split('');
    key = key % 26;
    const result = arr.map(item => {
        let code :number = item.charCodeAt(0);
        if (code < 97 || code > 122) return item;
        if (cipherType === 'decipher') {
            if (code > 122) code;
            else {
                code -= key;
                if (code < 97) {
                    let editedKey :number = code - 96;
                    code = 122;
                    code += editedKey;
                };
            }
        } else {
            if (code < 97) code;
            else {
                code += key;
                if (code > 122) {
                    let editedKey = code - 122;
                    code = 96;
                    code += editedKey;
                };
            }
        }
        let cipherCode :string = String.fromCharCode(code);
        return cipherCode;
    })
    return result.join('');
}

export const vinerCipher = (string :string, key :number, cipherType :string) :string => {
    const str :string = string.toLowerCase()
    let arr :string[] = str.split('');
    let currentKey :number = key;
    let tepmArr :string[] = [];
    currentKey = currentKey % 26;
    arr.forEach(item => {
        let code = item.charCodeAt(0);
        if (code < 97 || code > 122) {
            tepmArr.push(item);
            return;
        }
        if (cipherType === 'decipher') {
            code -= currentKey;
            if (code > 122) return code;
            else {
                if (code < 97) {
                    let editedKey :number = code - 96;
                    code = 122;
                    code += editedKey;
                };
            }
        } else {
            code += currentKey;
            if (code < 97) return code;
            else {
                if (code > 122) {
                    let editedKey :number = code - 122;
                    code = 96;
                    code += editedKey;
                };
            }
        }
        currentKey += 1;
        let cipherCode :string = String.fromCharCode(code);
        item = cipherCode;
        tepmArr.push(item);
        arr = tepmArr;
    })

    return arr.join('');
}