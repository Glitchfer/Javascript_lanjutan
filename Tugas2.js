/*
	1. Buat variabel dengan data array berupa list nama
	2. Buat penyaringan data berdasarkan huruf/ kata yang diinputkan
	3. Saring lagi data tersebut berdasarkan banyaknya data yg ingin ditampilkan
	4. tampilkan data dengan cara biasa, bila sudah benar maka lanjut.
	5. bungkus poin 1 - 4 kedalam sebuah function dengan 3 parameter
	6. deskripsikan parameter pertama sebagai nilai dari proses penyaringan pertama
	7. deskripsikan parameter kedua sebagai nilai dari proses penyaringan kedua
	8. deskripsikan parameter ketiga sebagai nilai dari fungsi callback
	9. callback proses penyaringan akhir untuk hasil yang ingin ditampilkan
	10. buat function tambahan sebagai tempat penyimpanan callbacknya
	11. sesuaikan proses pemanggilan berdasarkan nilai dari parameter 1, 2, 3.

*/

////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
console.log('Tugas No.2')
console.log('Version 1')


function cekName(name, lim, callback){
		const words = ['Abigail', 'Alexandra', 'Alison',
			'Amanda', 'Angela', 'Bella',
			'Carol', 'Caroline', 'Carolyn',
			'Deirdre', 'Diana', 'Elizabeth',
			'Ella', 'Faith', 'Olivia', 'Penelope'
		];
		
			const filt = words.filter(function(x){
			return x.includes(name);
		}); 
			const batas = filt.slice(0,lim);
			
			

	callback(batas);
}


function tampilkan(x){
	console.log(x);
}

cekName('a', 3, tampilkan);




////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
console.log('\n');
console.log('Version 2');

function saringNama(filtAwal, filtAkhir, callback){
		const listNama = [
					'Abigail', 'Alexandra', 'Alison',
					'Amanda', 'Angela', 'Bella',
					'Carol', 'Caroline', 'Carolyn',
					'Deirdre', 'Diana', 'Elizabeth',
					'Ella', 'Faith', 'Olivia', 'Penelope'
					];
		const saring = listNama.filter(function(a){
					return a.includes(filtAwal);
					}); 

		//var panjang = saring.length;	
		//var jumIndex = panjang - 1;
		var indexList = [];

		for (nilaiAwal = 0; nilaiAwal <= filtAkhir-1; nilaiAwal++) {
	
				indexList[nilaiAwal] = saring[nilaiAwal];
		}
	
	callback(indexList);
}

function hasil(z){
	console.log(z);
}

saringNama('n', 4, hasil);







console.log('\n');
//Hiraukan yang ada dibawah ini...!!!


/*
////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
console.log('\n');
console.log('Version 3');

function saringNama(filtAwal, filtAkhir, callback){
		const listNama = [
					'Abigail', 'Alexandra', 'Alison',
					'Amanda', 'Angela', 'Bella',
					'Carol', 'Caroline', 'Carolyn',
					'Deirdre', 'Diana', 'Elizabeth',
					'Ella', 'Faith', 'Olivia', 'Penelope'
					];
		const saring = listNama.filter(function(a){
					return a.includes(filtAwal);
					}); 

		//var panjang = saring.length;	
		//var jumIndex = panjang - 1;
		var indexList = [];

		for (nilaiAwal = 0; nilaiAwal <= filtAkhir-1; nilaiAwal++) {
	
				indexList[nilaiAwal] = saring[nilaiAwal];
		}
	
	callback(indexList);
}

function hasil(z){
	alert("nih hasilnya: \n"+z);
}

saringNama(prompt('mau difilter pake huruf apa ?'), Number(prompt("berapa banyak data yang mau ditampilkan ?")), hasil);






////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

console.log('\n');
console.log('version tanpa function');

const words = [
			'Abigail', 'Alexandra', 'Alison',
			'Amanda', 'Angela', 'Bella',
			'Carol', 'Caroline', 'Carolyn',
			'Deirdre', 'Diana', 'Elizabeth',
			'Ella', 'Faith', 'Olivia', 'Penelope'
			];
const filt = words.filter(function(x){
			return x.includes("n");
			});
var panjang = filt.length;	
var jumIndex = panjang - 1;
var indexList = [];

for (nilaiAwal = 0; nilaiAwal <= 5-1; nilaiAwal++) {
	
		indexList[nilaiAwal] = filt[nilaiAwal];
		
}

console.log(indexList);
console.log(panjang);


console.log('\n');
*/


