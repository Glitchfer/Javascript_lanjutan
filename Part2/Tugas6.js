//////////////////////////////////////--TUGAS 3--///////////////////////////////////////////////////////////////////////////

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(respon => respon.json())
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

const url = "https://jsonplaceholder.typicode.com/users";
fetch(url)
   .then(respon => respon.json())
   .then(data => {
      console.log("\n");

      data.map((user) => {
         console.log(user.name);
      });
   })
   .catch(function (error) {
      console.log(error)
   });

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Fetch dengan async await

const data = ambilData("https://jsonplaceholder.typicode.com/users")
   .then(lanjutkan)
   .catch(periksa);

async function ambilData(url) {

   const respon = await fetch(url);
   const data = await respon.json();
   return data;
}

function lanjutkan(data) {
   data.map((user) => {
      console.log(user.name);
   });
}

function periksa(err) {
   console.log("Data Error ", err);
}








//          HIRAUKAN YANG ADA DIBAWAH INI..!!
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// untuk menampilkan nama-nama dengan urutan list di halaman browsernya (bukan di console)
/*
note: 
1. gunakan index.html sebagai halamannya
2. tambahkan 2 elemen dibagian body (h1 & ul), dan tuliskan seperti berikut:
3. h1= <h1>Users<h1>
4. ul= <ul id='users'></ul>
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function createNode(element) {
//    return document.createElement(element);
// }
// function appendNode(parent, element) {
//    return parent.appendChild(element);
// }

// const ul = document.querySelector('#users');   <------ (#users) akan terkoneksi ke ul id="users" di html
// const link = "https://jsonplaceholder.typicode.com/users";

// fetch(link)
//    .then(respon => respon.json())
//    .then(data => {

//       data.map((user) => {

//          let li = createNode('li'),
//             span = createNode('span');

//          span.innerText = `${user.name}`;

//          appendNode(li, span);
//          appendNode(ul, li);
//       });

//    })
//    .catch(function (error) {
//       console.log(error)
//    });