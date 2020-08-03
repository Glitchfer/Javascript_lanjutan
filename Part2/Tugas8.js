                /*          Program pemesanan makanan       */
                /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                /* Algoritma pemrograman 

                1. Mulai
                2. Buat variabel (promo) yang mengizinkan user untuk menggunakan promo
                3. Buat variabel (code) kosong untuk mengembalikan nilai voucher yang nanti diinputkan
                4. buat kondisi pemakaian promo
                   4.1. jika promo digunakan tampilkan pesan untuk memasukkan kode voucher,
                        yang akan disimpan didalam variabel code.
                   4.2. jika promo tidak digunakan otomatis variabel code tidak terisi / null, dan tidak ada potongan harga
                5. sesuaikan argument terhadap masing-masing parameter yang akan digunakan
                   5.1. masukkan number untuk parameter ke-1, 
                   5.2. masukkan variabel code untuk parameter ke-2, 
                   5.3. masukkan number untuk parameter ke-3, 
                   5.4. masukkan true/false untuk parameter ke-4,  
                6. Buat fungsi dengan nama arkFood
                7. Berikan 4 parameter yaitu, harga, voucher, jarak & pajak
                8. Buat 4 variabel kosong didalam function sebagai wadah 
                   untuk mengembalikan biaya antar, total pajak, potongan harga, dan jumlah diskon
                9. buat proses perhitungan diskon, yang hasilnya akan disimpan kedalam variabel potongan harga
                10. buat proses perhitungan biaya antar, yang hasilnya akan disimpan kedalam variabel biayaAntar
                11. buat proses perhitungan pajak, yang hasilnya akan disimpan kedalam variabel total pajak
                12. Tampilkan hasil
                13. Selesai
                */
                /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


                const promo = confirm('Mau pakai promo?');
                let code;

                if (promo) {
                    code = prompt("Masukkan kode voucher!")
                } else {
                    code;
                }
                console.log(code);

                arkFood(51000, code, 5, true);

                function arkFood(harga, voucher, jarak, pajak) {

                    let biayaAntar;
                    let totPajak;
                    let potongan;
                    let disc;

                    // menghitung diskon
                    if (voucher === "ARKAFOOD5") {
                        alert("Discount sebanyak 50%, Maksimal potongan sebesar Rp.50.000");
                        if (harga < 50000) {
                            potongan = 0;
                            alert('Voucher tidak dapat digunakan, Minimal pembelian harus mencapai Rp.50.000')
                        } else {
                            disc = harga * (50 / 100);
                            if (disc < 50000) {
                                potongan = disc;
                            } else {
                                potongan = 50000;
                            }
                        }
                    } else if (voucher === "DITRAKTIRDEMY") {
                        alert("Discount sebanyak 60%, Maksimal potongan sebesar Rp.30.000");
                        if (harga > 25000) {
                            disc = harga * (60 / 100);
                            if (disc < 30000) {
                                potongan = disc;
                            } else {
                                potongan = 30000;
                            }
                        } else {
                            potongan = 0;
                            alert('Voucher tidak dapat digunakan, Minimal pembelian harus mencapai Rp.25.000')
                        }
                    } else if (voucher === undefined) {
                        potongan = 0;
                    } else {
                        potongan = 0;
                        alert("Maaf, Voucher yang anda masukkan tidak tersedia!")
                    }


                    // menghitung biaya antar
                    if (jarak <= 2) {
                        biayaAntar = 5000;
                    } else {
                        biayaAntar = 5000 + ((jarak - 2) * 3000);
                    }


                    // menghitung jumlah pajak        
                    if (pajak) {
                        totPajak = harga * (5 / 100);
                    } else {
                        totPajak = 0;
                    }

                    const total = (harga + biayaAntar + totPajak) - potongan;

                    return console.log(`Harga : Rp.${harga} \nPotongan : Rp.${potongan} \nBiaya antar : Rp.${biayaAntar} \nPajak : Rp.${totPajak} \nSub total : Rp.${total}`);
                }