let totalArray = [];
let genap = [];
let ganjil = [];
let jumlah = 0;

for (let i = 0; i <= 100; i++) {
  totalArray.push(i);
  if (i % 2 == 0) {
    genap.push(i);
  } else {
    ganjil.push(i);
  }
}
for (let i = 0; i < totalArray.length; i++) {
  jumlah += totalArray[i];
}

let bilTerkecil = Math.min(...totalArray);
let bilTerbesar = Math.max(...totalArray);
let rataRata = jumlah / totalArray.length;
let perbandingan = bilTerbesar > bilTerkecil;

console.log(perbandingan);
