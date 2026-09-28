import { caesarCipher } from "./ciphers.ts";
import copyLogo from "../assets/copy.svg";

const deBtn = document.getElementById('deciphering') as HTMLButtonElement;
const btn = document.getElementById('ciphering') as HTMLButtonElement;
const inp = document.getElementById('inp') as HTMLInputElement;
const keyInp = document.getElementById('numInp') as HTMLInputElement;
const result = document.querySelector('.result') as HTMLParagraphElement;
const copyBtn = document.getElementById('copyBtn') as HTMLButtonElement;

if (copyBtn) {
    (copyBtn.children[0] as HTMLImageElement).src = copyLogo;
}

if (keyInp) {
    keyInp.addEventListener('input', () => {
        let val :string = keyInp.value;
        if ((isNaN(Number(val)))) {
            keyInp.value = '1';
        };
    })
}

if (btn) {
    btn.addEventListener('click', () => {
        let keyVal = Number(keyInp.value);
        let val = inp.value;
        let res = caesarCipher(val, keyVal, 'ciphering');
        result.textContent = res;
    });
}

if (deBtn) {
    deBtn.addEventListener('click', () => {
        let keyVal = Number(keyInp.value);
        let val = inp.value;
        let res = caesarCipher(val, keyVal, 'decipher');
        result.textContent = res;
    });
}

if (copyBtn) {
    copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(result.textContent);
    })
}