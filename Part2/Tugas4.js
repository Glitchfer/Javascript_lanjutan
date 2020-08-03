/////////////////////////////////////--TUGAS 1--/////////////////////////////////////////////////////////////////////////////
/*          DATA AWAL       */

const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', "selasa", 'rabu', 'kamis', 'jumat'];
            let cek = dataDay.find((item) => {
                return item === day;
            })
            if (cek) {
                resolve(cek);
            } else {
                reject(new Error(`Hari "${day}" bukan hari kerja`));
            }
        }, 3000);
    })
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*              Jawaban Tugas no.1              */

// a. Then Catch
console.log('mulai');

// console.log(cekHariKerja('sabtu')             //<---------------------------  cara untuk menampilkan promisenya ketika pending
//                     .then((respon) => console.log(respon))        //        | agar terlihat berada diantara mulai dan selesai
//                     .catch((respon) => console.log(respon)));     //<-------    

cekHariKerja("minggu")
    .finally(() => console.log('\nBerikut akan ditampilkan hasil dari Tugas pertama:')) //<-----biasanya digunakan untuk menampilkan notice saat proses pending selesai
    .then(responTrue => console.log(`\na. hasil metode Then Catch: \ndata berhasil didapatkan! \nhari "${responTrue}" adalah hari kerja.`))
    .catch(responFalse => console.log(`\na. hasil metode Then Catch:\n${responFalse}`));

//"Then" merupakan suatu fungsi yang digunakan untuk menangkap hasil/output dari "resolve",
//sedangkan "catch" merupakan fungsi yang digunakan untuk menangkap hasil/output dari "reject"

console.log('selesai');
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// b. Try Catch

async function tryCatch(day) {
    try {
        let tangkap = await cekHariKerja(day);
        console.log(`\nb. hasil metode Try Catch: \ndata berhasil didapatkan! \nhari "${tangkap}" adalah hari kerja.`);
    } catch (err) {
        console.log(`\nb. hasil metode Try Catch:\n${err}`);
    }
}

tryCatch("sabtu");

/*  try & catch merupakan method yang digunakan untuk menangkap hasil/output
    dari penggunaan promise yang dibungkus dalam metode async await.
    try = untuk menangkap hasil resolve,
    catch = untuk menangkap hasil reject. 
*/











//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////--HIRAUKAN YANG ADA DIBAWAH INI!!!!--//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Note: Tambahan Promise
/*          Promise.all           */
/*
const film = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            judul: "Upin-ipin",
            sutradara: "Jarjit",
            pemeran: 'kak rose'
        }]);
    }, 1000);
});

const cuaca = new Promise(resolve => {
    setInterval(() => {
        resolve([{
            kota: 'Bandung',
            temp: 26,
            kondisi: 'Mendung'
        }]);
    }, 500);
});

// film.then(respon => console.log(respon));  //-------|
// //                                                  | Cara Biasa untuk memanggil promise
// cuaca.then(respon => console.log(respon)); //-------|

Promise.all([film,cuaca])  //<------------------------- Cara cepat untuk memanggil semua promise sekaligus
     .then(respon => console.log(respon)); //<--------- (bisa begini.1) hasil array berada didalam array
    // .then(respon => {  //<-------------------------|
    //     const [film, cuaca] = respon; //           | 
    //     console.log(film);            //           | (bisa begini.2) hasil dipisah menggunakan spread operator
    //     console.log(cuaca);           //           |
    // });                //<-------------------------|

*/