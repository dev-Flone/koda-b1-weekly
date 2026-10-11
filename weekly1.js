import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

// Daftar Pizza
const pizza = [
  {
    name: "Margherita Classic",
    description:
      "Saus tomat premium, mozzarella, daun basil segar, dan sedikit olive oil.",
    harga: 75000,
  },
  {
    name: "Pepperoni Supreme",
    description:
      "Pepperoni sapi melimpah, mozzarella, saus tomat khas, dan oregano.",
    harga: 95000,
  },
  {
    name: "BBQ Chicken Blast",
    description:
      "Dada ayam panggang, saus BBQ, bawang bombay, paprika, dan mozzarella.",
    harga: 98000,
  },
  {
    name: "Meat Lovers",
    description:
      "Pepperoni, smoked beef, sosis sapi, daging cincang, dan keju mozzarella ekstra.",
    harga: 110000,
  },
  {
    name: "Mushroom Truffle Delight",
    description:
      "Jamur champignon, jamur kancing, saus krim truffle, dan parmesan.",
    harga: 105000,
  },
  {
    name: "Hawaiian Paradise",
    description:
      "Ham sapi, potongan nanas manis, mozzarella, dan saus tomat spesial.",
    harga: 90000,
  },
  {
    name: "Spicy Volcano",
    description:
      "Ayam pedas, cabai merah, jalapeño, paprika, dan saus sambal spesial.",
    harga: 99000,
  },
  {
    name: "Veggie Garden",
    description:
      "Jamur, paprika, bawang bombay, tomat ceri, zaitun hitam, dan mozzarella.",
    harga: 85000,
  },
  {
    name: "Cheese Overload",
    description:
      "Kombinasi mozzarella, cheddar, parmesan, dan cream cheese dengan saus putih.",
    harga: 100000,
  },
  {
    name: "Rendang Fusion Pizza",
    description:
      "Daging rendang khas Indonesia, bawang merah, cabai hijau, mozzarella, dan saus rendang spesial.",
    harga: 115000,
  },
];

const rl = readline.createInterface({ input, output });

/* V1
// Create Input with await

async function main() {
  try {
    // While pilihan untuk mengulang program
    program: while (true) {
      // Print Menu
      for (let i = 0; i < pizza.length; i++) {
        console.log(
          `${i + 1}. ${pizza[i].name} - Rp.${pizza[i].harga.toLocaleString("id-ID")}`,
        );
      }

      // Input Pizza
      let pilihan, namaPizza, hargaPizza;

      // While Loop untuk mengulang program jika input tidak valid
      while (true) {
        pilihan = Number(await rl.question("Pilih Pizza (1-10): "));

        switch (pilihan) {
          case 1:
            namaPizza = pizza[0].name;
            hargaPizza = pizza[0].harga;
            break;
          case 2:
            namaPizza = pizza[1].name;
            hargaPizza = pizza[1].harga;
            break;
          case 3:
            namaPizza = pizza[2].name;
            hargaPizza = pizza[2].harga;
            break;
          case 4:
            namaPizza = pizza[3].name;
            hargaPizza = pizza[3].harga;
            break;
          case 5:
            namaPizza = pizza[4].name;
            hargaPizza = pizza[4].harga;
            break;
          case 6:
            namaPizza = pizza[5].name;
            hargaPizza = pizza[5].harga;
            break;
          case 7:
            namaPizza = pizza[6].name;
            hargaPizza = pizza[6].harga;
            break;
          case 8:
            namaPizza = pizza[7].name;
            hargaPizza = pizza[7].harga;
            break;
          case 9:
            namaPizza = pizza[8].name;
            hargaPizza = pizza[8].harga;
            break;
          case 10:
            namaPizza = pizza[9].name;
            hargaPizza = pizza[9].harga;
            break;
          default:
            console.log("Pizza tidak tersedia. Silahkan pilih angka 1 - 10.");
            // Continue untuk mengulang looping
            continue;
        }
        // Menghentikan looping jika input sudah valid
        break;
      }

      // Input jumlah
      let jumlah;

      // Loop untuk mengulang input jumlah jika tidak valid
      while (true) {
        jumlah = Number(await rl.question("Berapa banyak? "));

        if (Number.isInteger(jumlah) && jumlah > 0) {
          break;
        }
        console.log("Jumlah harus bilangan positif");
      }

      const total = hargaPizza * jumlah;

      // Ringkasan Pesanan
      console.log();
      console.log("======================================");
      console.log(`Pizza : ${namaPizza}`);
      console.log(`Harga : Rp.${hargaPizza.toLocaleString("id-ID")}`);
      console.log(`Jumlah : ${jumlah}`);
      console.log(`Total : Rp.${total.toLocaleString("id-ID")}`);
      console.log("======================================");

      // Konfirmasi Pesanan
      while (true) {
        let confirm = await rl.question("Apakah pesanan sudah benar? (Y/N)");
        confirm = confirm.toLowerCase().trim();

        if (confirm === "y") {
          console.log();
          console.log("Pesanan Berhasil");
          console.log(`Anda memesan ${jumlah} ${namaPizza}`);
          console.log(`Total pembayaran: Rp.${total.toLocaleString("id-ID")}`);
        } else if (confirm === "n") {
          console.log("Pesanan dibatalkan");
          // Mengulang program jika pesanan dibatalkan
          continue program;
        } else {
          console.log("Masukan Y atau N");
          continue;
        }
        // Menghentikan looping konfirmasi
        break;
      }
      // Menghentikan looping program
      break program;
    }
  } catch (err) {
    console.error("Terjadi Kesalahan: ", err);
  }
  rl.close();
}

main();
*/

/* V2
async function tampilkanMenu() {
  console.log("======================================");
  console.log("MENU");
  console.log("======================================");
  for (let i = 0; i < pizza.length; i++) {
    console.log(
      `${i + 1}. ${pizza[i].name} - Rp.${pizza[i].harga.toLocaleString("id-ID")}`,
    );
  }
}

async function pilihanPizza() {
  while (true) {
    const pilihan = Number(await rl.question("Pilih Pizza (1 - 10): "));

    if (!Number.isInteger(pilihan) || pilihan < 1 || pilihan > pizza.length) {
      console.log("Masukkan angka 1 - 10 ");
      continue;
    }
    return pizza[pilihan - 1];
  }
}

async function jumlahPizza() {
  while (true) {
    const jumlah = Number(await rl.question("Berapa banyak? "));

    if (Number.isInteger(jumlah) && jumlah > 0) {
      return jumlah;
    }
    console.log("Jumlah harus bilangan diatas 0 ");
  }
}

async function konfirmasiPesanan() {
  while (true) {
    const konfirmasi = (await rl.question("Konfirmasi Pesanan? (Y/N) "))
      .trim()
      .toLowerCase();

    if (konfirmasi === "y") return true;
    if (konfirmasi === "n") return false;

    console.log("Masukkan Y atau N. ");
  }
}

async function main() {
  // While loop untuk mengulang program jika pesanan dibatalkan
  while (true) {
    await tampilkanMenu();

    const pesanan = await pilihanPizza();
    const jumlah = await jumlahPizza();
    const total = pesanan.harga * jumlah;

    console.log("======================================");
    console.log(`Pizza: ${pesanan.name}`);
    console.log(`Harga: ${pesanan.harga}`);
    console.log(`Jumlah: ${jumlah}`);
    console.log(`Total: Rp.${total.toLocaleString("id-ID")}`);

    const konfirmasi = await konfirmasiPesanan();

    if (konfirmasi) {
      console.log("======================================");
      console.log("Pesanan Berhasil.");
      break;
    } else {
      console.log("======================================");
      console.log("Pesanan dibatalkan.");
      continue;
    }
  }
}

main()
  .catch((err) => {
    console.error("Terjadi kesalahan: ", err);
  })
  .finally(() => {
    rl.close();
  });
*/

// V3
const keranjang = [];

function menuUtama() {
  console.log("\n======================================");
  console.log("          PIZZA ORDERING APP          ");
  console.log("======================================");
  console.log("1. Pesan Pizza");
  console.log("2. Lihat Keranjang");
  console.log("3. Checkout");
  console.log("4. Keluar");
  console.log("======================================");
}

async function jumlahPizza() {
  while (true) {
    const jumlah = Number(
      await rl.question("Berapa banyak pizza yang ingin dipesan? "),
    );

    if (Number.isInteger(jumlah) && jumlah > 0) {
      return jumlah;
    }
    console.log("Jumlah harus berupa bilangan diatas 0. ");
  }
}

function menuPizza() {
  console.log("\n========== MENU PESAN PIZZA ===========");

  for (let i = 0; i < pizza.length; i++) {
    console.log(
      `${i + 1}. ${pizza[i].name} - Rp.${pizza[i].harga.toLocaleString("id-ID")}`,
    );
    console.log(`${pizza[i].description}\n`);
  }
  console.log("======================================");
}

async function pilihanPizza() {
  while (true) {
    const pilihan = Number(
      await rl.question(`Pilih Pizza (1 - ${pizza.length}): `),
    );

    if (!Number.isInteger(pilihan) || pilihan < 1 || pilihan > pizza.length) {
      console.log(`Pilihan tidak valid. Masukkan angka 1 - ${pizza.length} `);
      continue;
    }
    return pizza[pilihan - 1];
  }
}

const hitungTotalKeranjang = function () {
  let total = 0;

  for (let i = 0; i < keranjang.length; i++) {
    total += keranjang[i].subTotal;
  }
  return total;
};

const hitungSubTotal = (harga, jumlah) => harga * jumlah;

function tampilkanHasil(total, callback) {
  callback(total);
}

function prosesPembayaran(total) {
  return new Promise((resolve, reject) => {
    console.log("Memproses Pembayaran...");

    setTimeout(() => {
      const berhasil = Math.random() >= 0.3;

      if (berhasil) {
        resolve(total);
      } else {
        reject(new Error("Transaksi ditolak. Silahkan coba lagi."));
      }
    }, 2000);
  });
}

// 1. Pesan Pizza Menu
async function pesanPizza() {
  menuPizza();

  // Menjalankan dan menunggu fungsi pilihanPizza() dan jumlahPizaa() memberikan return
  const pesanan = await pilihanPizza();
  const jumlah = await jumlahPizza();

  const itemLama = keranjang.find((item) => item.name === pesanan.name);
  let itemBaru;

  if (itemLama) {
    itemLama.jumlah += jumlah;
    itemLama.subTotal = hitungSubTotal(itemLama.harga, itemLama.jumlah);

    itemBaru = itemLama;
  } else {
    const item = {
      name: pesanan.name,
      harga: pesanan.harga,
      jumlah: jumlah,
      subTotal: hitungSubTotal(pesanan.harga, jumlah),
    };

    keranjang.push(item);
    itemBaru = item;
  }

  console.log("\n===== PESANAN DITAMBAHKAN =======");
  console.log(`Nama: ${pesanan.name}`);
  console.log(`Harga: Rp.${pesanan.harga.toLocaleString("id-ID")}`);
  console.log(`Jumlah: ${jumlah}`);
  console.log(
    `Subtotal: ${hitungSubTotal(pesanan.harga, jumlah).toLocaleString("id-ID")}`,
  );
  console.log("====================================");
}

// 2. Lihat Keranjang Menu
function lihatKeranjang() {
  console.log("\n========= KERANJANG PESANAN ===========");

  if (keranjang.length === 0) {
    console.log("Keranjang masih kosong.");
    console.log("==========================");
    return;
  }

  for (let i = 0; i < keranjang.length; i++) {
    const item = keranjang[i];

    console.log(`${i + 1}. ${item.name}`);
    console.log(`Harga: Rp.${item.harga.toLocaleString("id-ID")}`);
    console.log(`Jumlah: ${item.jumlah}`);
    console.log(`Subtotal: Rp.${item.subTotal.toLocaleString("id-ID")}\n`);
  }

  const total = hitungTotalKeranjang();

  tampilkanHasil(total, (nilaiTotal) => {
    console.log(`Total Pembayaran: Rp.${nilaiTotal.toLocaleString("id-ID")}`);
  });
}

// 3. Checkout Menu
async function checkout() {
  if (keranjang.length === 0) {
    console.log(
      "Keranjang masih kosong. Silahkan pesan Pizza terlebih dahulu.",
    );
    return;
  }

  const total = hitungTotalKeranjang();

  console.log("\n======= CHECKOUT =======");
  console.log(`Total Pembayaran: Rp.${total.toLocaleString("id-ID")}`);

  const konfirmasi = (
    await rl.question("Lanjutkan Pembayaran? (Y/N) ")
  ).toLowerCase();

  if (konfirmasi !== "y") {
    console.log("Pembayaran dibatalkan");
    return;
  }

  try {
    const hasilPembayaran = await prosesPembayaran(total);

    console.log("======= PEMBAYARAN BERHASIL =======");
    console.log(`Total dibayar: Rp.${hasilPembayaran.toLocaleString("id-ID")}`);

    keranjang.length = 0;
  } catch (err) {
    console.log("Pembayaran Gagal: ", err.message);
  }
}

// Fungsi Utama
async function main() {
  let program = true;

  while (program) {
    menuUtama();

    const pilihan = Number(await rl.question("Pilih Menu (1 - 4): "));

    if (!Number.isInteger(pilihan) || pilihan < 1 || pilihan > 4) {
      console.log("Pilihan tidak valid. Masukkan angka 1 - 4.\n");
      continue;
    }

    switch (pilihan) {
      case 1:
        await pesanPizza();
        break;
      case 2:
        lihatKeranjang();
        break;
      case 3:
        await checkout();
        break;
      case 4:
        console.log("Terimakasih sudah berkunjung");
        program = false;
        break;
    }
  }
}

// Menjalankan Program, menangkap error, dan menutup input
main()
  .catch((err) => {
    console.log("Terjadi Kesalahan.", err);
  })
  .finally(() => {
    rl.close();
  });
