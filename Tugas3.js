/*
1. buat function dengan parameter 
	nilaiAwal = number,
	nilai Akhir = number,
	dataArray = array  <---- data harus lebih dari 5
2. buat kondisi dimana cek dataArray.length => 5, 
	if false = "data array kurang",
	if true = lanjut proses
3. buat kondisi ngecek nilaiAkir > nilaiAwal,
	if false = "nilai akhir harus lebih besar dari nilai awal"
	if true = lanjut proses 
4. membandingka setiap data didalam data array terhadap nilai awal dan nilai akhir
	dimana data array > nilai awal dan data array < nilai akhir
5. menampilkan output array yang memenuhi kondisi di no.4.

*/

////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
console.log('Tugas No.3')


function arrayBanding(nilaiAwal, nilaiAkhir, dataArray){

	if(dataArray.length <= 5){
		return console.log('Data array kurang WOiii!');
	} else {
		if (nilaiAkhir <= nilaiAwal){
			return console.log("Yeeehhh, nilai akhir kekecilan!");
		} else {
			
			const filt = dataArray.filter(function(x){
				return x > nilaiAwal && x < nilaiAkhir;
			});
			const urutKan = filt.sort(function(a,b){
				return a-b;
			});
			console.log("Output:\n" + urutKan); 
		}
	}

}
arrayBanding(5, 20, [2, 25, 4, 14, 17, 30, 8]);











