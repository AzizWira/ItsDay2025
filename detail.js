// ===================== BACK TO TOP =====================
document.addEventListener("DOMContentLoaded", function () {
  const backToTopBtn = document.getElementById("backToTop");

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 200) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  });

  backToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

// ===================== PERTANYAAN SUPPORT =====================
document.addEventListener("DOMContentLoaded", function () {
  const supportBtn = document.getElementById("supportQuestion");
  if (supportBtn) {
    supportBtn.onclick = function () {
      window.location.href = "supportQuestion2.html";
    };
  }
});

// ===================== LIHAT SELENGKAPNYA =====================
const showMoreBtn = document.getElementById("showMoreBtn");
const informasiProduct = document.querySelector(".informasi-product");

showMoreBtn.addEventListener("click", function () {
  informasiProduct.classList.toggle("show");
  if (informasiProduct.classList.contains("show")) {
    informasiProduct.style.maxHeight = "1000px";
    informasiProduct.style.animation = "fadeIn 0.3s";
    showMoreBtn.textContent = "Tutup Selengkapnya...";
  } else {
    informasiProduct.style.animation = "fadeOut 0.3s";
    setTimeout(function () {
      informasiProduct.style.maxHeight = "0";
      showMoreBtn.textContent = "Lihat Selengkapnya...";
    }, 0);
  }
});

// ===================== PILIH UKURAN =====================
function focusElement(element) {
  const cardSizeElements = document.querySelectorAll(".card-size");
  cardSizeElements.forEach((el) => el.classList.remove("focused"));
  element.classList.add("focused");
}

// ===================== JUMLAH PRODUK =====================
const kurangiButton = document.getElementById("kurangi");
const tambahButton = document.getElementById("tambah");
const jumlahInput = document.getElementById("jumlah");

kurangiButton.addEventListener("click", () => {
  if (jumlahInput.value > 1) {
    jumlahInput.value--;
  }
});

tambahButton.addEventListener("click", () => {
  jumlahInput.value++;
});

jumlahInput.addEventListener("change", () => {
  if (jumlahInput.value < 1) {
    jumlahInput.value = 1;
  }
});

jumlahInput.addEventListener("input", function () {
  this.value = this.value.replace(/[^0-9]/g, "");
});

// ===================== DATA REVIEW & PAGINATION =====================
const cardReviewElements = [
  {
    nama: "Sarah Anderson Johnson",
    rate: 5,
    message:
      "Produknya sangat cantik dan berkualitas tinggi! Motifnya benar-benar unik dan saya senang memiliki tenun Troso ini di koleksi saya.",
    date: "15 Agustus 2023",
    images: ["./assets/best-product/best1.png", "./assets/best-product/best2.png"],
  },
  {
    nama: "Ahmad Al-Mansoori",
    rate: 4,
    message:
      "Saya suka tenun Troso ini. Harganya terjangkau dan hasil tenunnya sangat halus. Hanya saja pengiriman agak lambat.",
    date: "10 Agustus 2023",
    images: ["./assets/best-product/best3.png"],
  },
  {
    nama: "Nina Rodriguez",
    rate: 5,
    message:
      "Tenun Troso ini benar-benar mengagumkan! Saya sangat puas dengan kualitasnya dan pelayanan pelanggan yang ramah.",
    date: "5 Agustus 2023",
    images: [],
  },
  {
    nama: "Rudi Hartanto",
    rate: 4,
    message:
      "Motifnya bagus, tapi saya harap ada lebih banyak pilihan warna yang tersedia. Saya suka kualitas tenunnya.",
    date: "28 Juli 2023",
    images: ["./assets/best-product/best5.png"],
  },
  {
    nama: "Lia Chen",
    rate: 5,
    message:
      "Ini adalah hadiah ulang tahun yang sempurna untuk teman saya. Dia sangat senang dengan tenun Troso ini.",
    date: "20 Juli 2023",
    images: ["./assets/best-product/best6.png", "./assets/best-product/best2.png"],
  },
  {
    nama: "Budi Susanto",
    rate: 5,
    message:
      "Kualitasnya luar biasa. Saya akan merekomendasikan produk ini kepada teman-teman saya.",
    date: "15 Juli 2023",
    images: [],
  },
  {
    nama: "Rina Wang",
    rate: 4,
    message:
      "Saya membeli tenun Troso ini sebagai hadiah pernikahan, dan pasangan saya sangat menyukainya. Terima kasih!",
    date: "10 Juli 2023",
    images: [],
  },
  {
    nama: "Dian Wu",
    rate: 5,
    message:
      "Sangat puas dengan pembelian ini. Motifnya bagus dan proses pengiriman cepat.",
    date: "5 Juli 2023",
    images: ["./assets/best-product/best1.png", "./assets/best-product/best2.png"],
  },
  {
    nama: "Agus Pranoto",
    rate: 4,
    message:
      "Saya senang dengan produknya, tapi saya harap mereka akan menambahkan opsi ukuran yang berbeda.",
    date: "28 Juni 2023",
    images: [],
  },
  {
    nama: "Maya Sari",
    rate: 5,
    message:
      "Saya sudah lama mencari tenun Troso berkualitas, dan saya menemukannya di sini. Sangat direkomendasikan!",
    date: "20 Juni 2023",
    images: ["./assets/best-product/best6.png"],
  },
];

const itemsPerPage = 3;
let currentPage = 1;
const PreviewProduct = document.getElementById("con-card-preview");
const paginationContainer = document.getElementById("pagination");

function renderPage(page) {
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const pageData = cardReviewElements.slice(startIndex, endIndex);

  const cardElementsReview = pageData.map(
    (data) => `
      <div class="card-preview">
        <div class="header-preview">
          <div class="header-preview1">
            <h4>${data.nama}</h4>
            <p><iconify-icon icon="ic:round-star"></iconify-icon>${data.rate}</p>
          </div>
          <div class="header-preview2">
            <div class="date">${data.date}</div>
          </div>
        </div>
        <div class="massage-preview">${data.message}</div>
        ${
          data.images.length > 0
            ? `<div class="con-img-preview">
                ${data.images
                  .map(
                    (image) => `
                      <div class="img-preview">
                        <img src="${image}" alt="" />
                      </div>
                    `
                  )
                  .join("")}
              </div>`
            : ""
        }
      </div>`
  );

  PreviewProduct.innerHTML = cardElementsReview.join("");
}

function changePage(newPage) {
  const totalPages = Math.ceil(cardReviewElements.length / itemsPerPage);

  if (newPage < 1) newPage = 1;
  if (newPage > totalPages) newPage = totalPages;

  currentPage = newPage;
  renderPage(currentPage);
  updatePaginationButtons();
}

function updatePaginationButtons() {
  const buttons = paginationContainer.querySelectorAll(".btn-pagination");
  buttons.forEach((btn) => btn.classList.remove("active"));

  const activeButton = paginationContainer.querySelector(`#page${currentPage}`);
  if (activeButton) {
    activeButton.classList.add("active");
  }
}

function setupPagination() {
  paginationContainer.innerHTML = "";

  const totalPages = Math.ceil(cardReviewElements.length / itemsPerPage);

  const prev = document.createElement("button");
  prev.classList.add("btn-pagination");
  prev.id = "prev-page";
  prev.textContent = "<";
  prev.addEventListener("click", () => changePage(currentPage - 1));
  paginationContainer.appendChild(prev);

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.classList.add("btn-pagination");
    if (i === currentPage) btn.classList.add("active");
    btn.textContent = i;
    btn.id = `page${i}`;
    btn.addEventListener("click", () => changePage(i));
    paginationContainer.appendChild(btn);
  }

  const next = document.createElement("button");
  next.classList.add("btn-pagination");
  next.id = "next-page";
  next.textContent = ">";
  next.addEventListener("click", () => changePage(currentPage + 1));
  paginationContainer.appendChild(next);
}

// Inisialisasi saat halaman dimuat
renderPage(currentPage);
setupPagination();

// ===================== PRODUK LAINNYA =====================
const cardProductLainnyaElements = [
  {
    imgSrc: "./assets/best-product/best1.png",
    title: "Tenun Blanket - Motif Biru",
    price: "199.000",
    rate: 4.8,
    direct: "detailProduk.html",
  },
  {
    imgSrc: "./assets/best-product/best2.png",
    title: "Tenun Bulu - Motif Sage",
    price: "199.000",
    rate: 4.8,
    direct: "detailProduk.html",
  },
  {
    imgSrc: "./assets/best-product/best3.png",
    title: "Tenun Rewoven - Motif Coklat",
    price: "199.000",
    rate: 4.8,
    direct: "detailProduk.html",
  },
  {
    imgSrc: "./assets/best-product/best4.png",
    title: "Tenun Rewoven - Motif Hijau",
    price: "199.000",
    rate: 4.8,
    direct: "detailProduk.html",
  },
];

const LainnyaProduct = document.getElementById("con-product-lainnya");

if (LainnyaProduct) {
  const cardElementsLainnya = cardProductLainnyaElements.map(
    (data) => `
    <div class="card-product-lainnya" onclick="window.location.href = '${data.direct}';">
      <div class="img-lainnya">
        <img src="${data.imgSrc}" alt="">
      </div>
      <div class="desc-lainnya">
        <div class="title-lainnya">
          <h3>${data.title}</h3>
        </div>
        <p class="price">Rp. ${data.price}</p>
        <div class="rate">
          <iconify-icon icon="ic:round-star"></iconify-icon>
          <p>${data.rate}</p>
        </div>
      </div>
    </div>`
  );

  LainnyaProduct.innerHTML = cardElementsLainnya.join("");
}

