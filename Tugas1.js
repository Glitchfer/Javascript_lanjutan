////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
/*	Beberapa contoh method built-in Function di javascript*/
console.log('Tugas No.1')
console.log('\n');

//1. Concat() 
//digunakan untuk menggabungkan dua atau lebih array.

let nilai = [50, 70, 90];

function tambahData(arr){

return console.log(nilai.concat(arr)); 
}
tambahData([50, 30]);

//2. slice()
//digunakan untuk mengembalikan element didalam array yang dipilih, sebagai array baru.
let hewan = ["Kucing", 'kuda', "Musang", "Kijang", "Undur-undur", "Pacet", "Tomcat"];
let bukanHewan = hewan.slice(4, 7);

console.log(bukanHewan);

//3. toString()
//digunakan untuk mengubah nilai boolean menjadi string

let boolean = false;
let x = boolean.toString();

console.log(boolean, typeof boolean);
console.log(x, typeof x);

//4. abs()
//digunakan untuk merubah semua angka menjadi absolut/positif
let b = -23.333;
console.log(Math.abs(b));


//5. round()
//digunakan untuk membulatkan bilangan desimal ke angka terdekatnya
let e = 3.4678;
console.log(Math.round(e));

//6. floor()
//digunakan untuk pembulatan kebawah
let k = -3.3;
let l = 0.8;
let m = 7.9;
let n = -0.3;

console.log(Math.floor(k), Math.floor(l), Math.floor(m), Math.floor(n));


//7. random()
//digunakan untuk mengembalikan angka acak

const v = Math.floor((Math.random() * 10)+1);
console.log(v);


//8. max()
//digunakan untuk mencari nilai terbesar
let f = Math.max(2, 5, 7, 11, 4, 6, 1, 3, 0, 9, 10, 16, 8, 13);
console.log(f);

//9. min()
//digunakan untuk mencari nilai terkecil
let g = Math.min(2, 5, 7, 11, 4, -1, 6, 1, 3, 0, -4, 9, 10, 16, 8, 13, -2);
console.log(g);

//10. toPrecision
//digunakan untuk memformat angka dengan panjang yang sudah ditentukan(spesifik)

let h = 7.6418333

console.log(h.toPrecision(2));
console.log(h.toPrecision(3));
console.log(h.toPrecision(5));
console.log(h.toPrecision());

//11. toFixed()
//digunakan untuk merubah number menjadi string
let o = 5.5483;
let p = o.toFixed();
let y = o.toFixed(2);
let t = o.toFixed(3);

console.log(p +" = "+ typeof p);
console.log(y +" = "+ typeof y);
console.log(t +" = "+ typeof t);

//12. isNaN()
//digunakan untuk mengecek apakah nilai merupakan NaN (Not-A-Number)
let tes = "";
	cek1 = tes + Number.isNaN(NaN);
	cek2 = tes + Number.isNaN(0/0);

console.log((tes + NaN)+ " = "+ cek1, "\n"+ (tes+(0/0))+ " = " +cek2);

//13. charAt()
//digunakan untuk memanggil karakter didalam string berdasarkan spesifik index

let str = "Hello World";
console.log(str.charAt(6));

//14. repeat()
//digunakan untuk menduplikasi string
let kata = "HOraa!";
console.log(kata.repeat(3));

//15. include()
//digunakan untuk memvalidasi apakah didalam suatu kalimat terdapat kata yang sama 
//seprti kata yang diinputkan, dengan output true / false
let kalimat = "Aku suka belajar bahasa pemrogramman, khususnya javascript"
console.log(kalimat.includes("javascript"));

//16. replace()
//digunakan untuk menggantikan kata didalam string
let qwe = "Arkademy is the best";
console.log(qwe.replace("Arkademy", 'Arqezy'));

//17. split()
//digunakan untuk memisahkan sebuah string kedalam array of substrings, dan menampilkan array baru
let yet = "I feel good";
console.log(yet.split(" "));

//18. toLowerCase()
//digunakan untuk merubah semua string menjadi huruf kecil
let hello = "Hello World";
console.log(hello.toLowerCase());


//19. toUpperCase()
//digunakan untuk merubah semua string menjadi huruf besar
let world = "Hello World";
console.log(world.toUpperCase());


//20. trim()
//digunakan untuk menghilangkan spasi kosong dari kedua arah string
let last = "     Hwllo Woud     "
console.log(last.trim())