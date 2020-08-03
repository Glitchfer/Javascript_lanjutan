///////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////--Text Palindrome--//////////////////////////////////////////////////////////////////

let repeat = true;   
while (repeat) {
    
    let text1 = prompt("Masukkan text!").toLowerCase();

    let text2 = text1.split("").reverse().join("");

    if (text2 === text1) {
        console.log('Text = Palindrom');
        alert('Text = Palindrom');
    } else {
        console.log('Text = Bukan Palindrom');
        alert('Text = Bukan Palindrom');
    }

repeat = confirm("Lagi?");
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////--Reverse Word--//////////////////////////////////////////////////////////////////
console.log("\n");
let kalimat = {
    n1: "Aku",
    n2: "Belajar",
    n3: "Programming"
}
console.log(kalimat.n3, kalimat.n2, kalimat.n1);