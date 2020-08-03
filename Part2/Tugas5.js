//////////////////////////////////////--TUGAS 2--///////////////////////////////////////////////////////////////////////////
/*          DATA AWAL       */

const getmonth = (callback) => {
    setTimeout(() => {
       let error = false;
       let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'Desember'];
       if(!error){
           callback(null, month)
       } else {
           callback(new Error('Sorry Data Not Found', []))
       }
    }, 4000);
}
// contoh pemanggilan
// getmonth((<nama fungsi ke-2>)=>{...})

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*              Jawaban Tugas no.2              */


function tampilkan(isError, data) {
    
    if (isError !== null) {
        
        const mapping = data.map(function(e) {
            console.log(e);
        });
    } else {
      
        function Error(err, kosong) {
            const erro = err;
            const empty = kosong;
            console.log(erro, empty);
        }
        new Error('Sorry Data Not Found', []);
    }
}

getmonth(tampilkan);


/*
note: 
    1. nantinya fungsi kedua memiliki 2 parameter (null & month)
    2. parameter pertamanya digunakan untuk mengecek apakah terdapat error atau tidak (null)
        - 
    3. parameter kedua digunakan untuk menampilkan hasil bulan yang sudah di map (month)
    4.
*/