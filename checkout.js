document.addEventListener("DOMContentLoaded", function () {
  // ===================== BACK TO TOP =====================
  const backToTopBtn = document.getElementById("backToTop");

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 200) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  });

  backToTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // ===================== ALAMAT =====================
  let alamatTerisi = false;

  const showPopupButton = document.getElementById("btn-create");
  const showPopupEdit = document.getElementById("btn-edit");

  showPopupButton.addEventListener("click", function () {
    if (!alamatTerisi) {
      alert("Silakan lengkapi alamat pengiriman terlebih dahulu.");
      return;
    }

    const background = document.querySelector("#popup-success");
    const popupSuccess = document.querySelector("#detail-success");
    background.style.display = "flex";
    popupSuccess.style.display = "flex";
    popupSuccess.style.animation = "slide-down 0.3s ease-in-out";
  });

  showPopupEdit.addEventListener("click", function () {
    const background = document.querySelector("#popup-edit");
    const popupEdit = document.querySelector("#detail-edit");
    background.style.display = "flex";
    popupEdit.style.display = "flex";
    popupEdit.style.animation = "slide-down 0.3s ease-in-out";
  });

  // ===================== METODE PEMBAYARAN =====================
  const buttons = document.querySelectorAll(".con-btn-payment button");
  const paymentOptionsContainer = document.getElementById("paymentOptions");

  class CardPayment {
    constructor(methods, imageSrc, name) {
      this.methods = methods;
      this.imageSrc = imageSrc;
      this.name = name;
      this.element = this.createCard();
    }

    createCard() {
      const card = document.createElement("div");
      card.classList.add("card-payment");
      card.style.display = "none";

      const imgContainer = document.createElement("div");
      imgContainer.classList.add("img-payment");

      const img = document.createElement("img");
      img.src = this.imageSrc;
      imgContainer.appendChild(img);

      const p = document.createElement("p");
      p.textContent = this.name;

      card.appendChild(imgContainer);
      card.appendChild(p);
      paymentOptionsContainer.appendChild(card);

      card.addEventListener("click", () => {
        updateSelectedPayment(this.methods[0], this.imageSrc, this.name);
      });

      return card;
    }

    show() {
      this.element.style.display = "flex";
    }

    hide() {
      this.element.style.display = "none";
    }
  }

  const cardPayments = [
    new CardPayment(["COD"], "./assets/option-payment/cod.png", "COD"),
    new CardPayment(
      ["TransferBank"],
      "./assets/option-payment/bri.png",
      "Bank BRI"
    ),
    new CardPayment(
      ["TransferBank"],
      "./assets/option-payment/bni.png",
      "Bank BNI"
    ),
    new CardPayment(
      ["TransferBank"],
      "./assets/option-payment/bca.png",
      "Bank BCA"
    ),
    new CardPayment(["EMoney"], "./assets/option-payment/gopay.png", "GOPAY"),
    new CardPayment(["EMoney"], "./assets/option-payment/dana.png", "DANA"),
    new CardPayment(["EMoney"], "./assets/option-payment/ovo.png", "OVO"),
    new CardPayment(
      ["KartuKredit"],
      "./assets/option-payment/bca.png",
      "Bank BCA"
    ),
    new CardPayment(
      ["KartuKredit"],
      "./assets/option-payment/bni.png",
      "Bank BNI"
    ),
    new CardPayment(
      ["KartuKredit"],
      "./assets/option-payment/bri.png",
      "Bank BRI"
    ),
  ];

  function showPaymentOptions(selectedMethod) {
    cardPayments.forEach((card) => {
      if (card.methods.includes(selectedMethod)) {
        card.show();
      } else {
        card.hide();
      }
    });
  }

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      buttons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      const selectedMethod = this.getAttribute("data-method");
      showPaymentOptions(selectedMethod);
    });
  });

  const activeButton = document.querySelector(".con-btn-payment .active");
  if (activeButton) {
    const activeMethod = activeButton.getAttribute("data-method");
    showPaymentOptions(activeMethod);
  }

  // ===================== POPUP FUNCTIONS =====================

  // Menyimpan alamat dari input user
  window.saveAddress = function () {
    const nama = document.getElementById("input-nama").value.trim();
    const nomor = document.getElementById("input-hp").value.trim();
    const alamat = document.getElementById("input-alamat").value.trim();

    if (!nama || !nomor || !alamat) {
      alert("Harap isi semua kolom alamat.");
      return;
    }

    document.getElementById(
      "buyer-info"
    ).textContent = `Nama : ${nama} | Nomor Hp : ${nomor}`;
    document.getElementById("location-info").textContent = `Lokasi : ${alamat}`;
    alamatTerisi = true;

    closePopupEdit();
  };

  // Menutup popup edit (tanpa menyimpan)
  window.closePopupEdit = function () {
    const background = document.querySelector("#popup-edit");
    const popup = document.querySelector("#detail-edit");
    popup.style.animation = "slide-up 0.3s ease-in-out";
    setTimeout(() => {
      background.style.display = "none";
      popup.style.display = "none";
    }, 300);
  };

  // Menutup popup sukses lalu redirect
  window.closePopup = function () {
    const background = document.querySelector("#popup-success");
    const popupSuccess = document.querySelector("#detail-success");
    popupSuccess.style.animation = "slide-up 0.3s ease-in-out";

    setTimeout(() => {
      background.style.display = "none";
      popupSuccess.style.display = "none";
      window.location.href = "index.html";
    }, 300);
  };
});

function updateSelectedPayment(method, imageSrc, label) {
  const container = document.querySelector(".fix-card-payment");

  // Ganti gambar
  container.querySelector("img").src = imageSrc;

  // Ganti teks nama metode
  container.querySelector("p").textContent = label;
}
