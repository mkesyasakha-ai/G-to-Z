/* ============================================
   script.js — FIXED VERSION (search bekerja)
   ============================================ */

/* ============================
   DATABASE KOMODITAS
   ============================ */
const items = [
  {
    name: "Bunga Turi",
    img: "images/bunga turi.jpeg",
    category: "Sayur",
    desc: "Bunga tanaman turi yang kaya serat dan antioksidan.",
    detail: {
      manfaat: "Menurunkan peradangan, kaya vitamin C, baik untuk pencernaan.",
      risiko: "Hindari konsumsi berlebihan bagi penderita gangguan lambung.",
      gizi: "Serat, vitamin C, kalsium."
    }
  },

  {
    name: "Genjer",
    img: "images/genjer.jpeg",
    category: "Sayur",
    desc: "Sayuran rawa dengan tekstur lembut dan rasa khas.",
    detail: {
      manfaat: "Membantu memenuhi kebutuhan serat dan mineral.",
      risiko: "Pastikan dimasak matang untuk menghindari parasit air.",
      gizi: "Serat, zat besi, kalsium."
    }
  },

  {
    name: "Jengkol",
    img: "images/jengkol.jpeg",
    category: "Protein Nabati",
    desc: "Biji khas Indonesia dengan rasa kuat dan aromatik.",
    detail: {
      manfaat: "Kaya protein dan antioksidan, baik untuk stamina.",
      risiko: "Bisa menyebabkan jengkolan bagi yang sensitif.",
      gizi: "Protein, kalium, vitamin B kompleks."
    }
  },

  {
    name: "Manggis",
    img: "images/manggis.jpeg",
    category: "Buah",
    desc: "Buah tropis dengan daging putih manis dan kulit kaya xanthone.",
    detail: {
      manfaat: "Antioksidan tinggi, meningkatkan imunitas.",
      risiko: "Kulitnya tidak untuk dimakan langsung.",
      gizi: "Vitamin C, serat, xanthone."
    }
  },

  {
    name: "Matoa",
    img: "images/matoa.jpeg",
    category: "Buah",
    desc: "Buah khas Papua dengan rasa perpaduan kelengkeng dan rambutan.",
    detail: {
      manfaat: "Baik untuk imun dan sumber energi instan.",
      risiko: "Kandungan gula cukup tinggi — konsumsi seimbang.",
      gizi: "Vitamin C, glukosa alami."
    }
  },

  {
    name: "Pakis",
    img: "images/pakis.jpeg",
    category: "Sayur",
    desc: "Sayur hutan dengan rasa lembut dan kaya nutrisi.",
    detail: {
      manfaat: "Kaya antioksidan, baik untuk kesehatan kulit dan darah.",
      risiko: "Wajib dimasak matang untuk menghilangkan toksin alami.",
      gizi: "Vitamin A, C, mangan, serat."
    }
  },

  {
    name: "Petai",
    img: "images/petai.jpeg",
    category: "Protein Nabati",
    desc: "Biji beraroma kuat yang kaya mineral dan antioksidan.",
    detail: {
      manfaat: "Mengontrol gula darah, baik untuk ginjal dan pencernaan.",
      risiko: "Aromanya kuat dan bisa menempel lama.",
      gizi: "Protein, zat besi, kalium."
    }
  },

  {
    name: "Rambutan",
    img: "images/rambutan.jpeg",
    category: "Buah",
    desc: "Buah tropis manis dengan tekstur juicy.",
    detail: {
      manfaat: "Menghidrasi tubuh dan meningkatkan imun.",
      risiko: "Gula cukup tinggi, batasi konsumsi berlebihan.",
      gizi: "Vitamin C, zat besi, serat."
    }
  },

  {
    name: "Sagu",
    img: "images/sagu.jpeg",
    category: "Karbohidrat",
    desc: "Bahan pangan pokok dari Papua yang menjadi sumber energi cepat.",
    detail: {
      manfaat: "Rendah alergi dan mudah dicerna.",
      risiko: "Kurang nutrisi jika dikonsumsi tanpa lauk pendamping.",
      gizi: "Karbohidrat sederhana, sedikit protein."
    }
  }
];


/* ============================
   ELEMENT UTAMA
   ============================ */
const grid = document.getElementById("grid");
// const searchInput = document.getElementById("search");
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modalBody");
const closeModal = document.getElementById("closeModal");


/* ============================
   REVEAL ANIMATION
   ============================ */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      revealObserver.unobserve(entry.target);
    }
  });
});

function observeReveal() {
  document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));
}


/* ============================
   RENDER GRID
   ============================ */
function createCard(item) {
  return `
    <div class="card reveal">
      <div class="card-media">
        <img src="${item.img}" loading="lazy" alt="${item.name}">
      </div>
      <span class="badge">${item.category}</span>
      <h3>${item.name}</h3>
      <p>${item.desc}</p>
      <div class="card-actions">
        <button class="btn-small primary" onclick='openDetail(${JSON.stringify(item)})'>
          Detail
        </button>
      </div>
    </div>`;
}

function renderGrid(list = items) {
  grid.innerHTML = list.map(item => createCard(item)).join("");
  observeReveal();
}


/* ============================
   MODAL
   ============================ */
function openDetail(item) {
  modalBody.innerHTML = `
    <div class="m-img">
      <img src="${item.img}" alt="${item.name}">
    </div>
    <div>
      <h2>${item.name}</h2>
      <div class="kv"><strong>Manfaat:</strong><br>${item.detail.manfaat}</div>
      <div class="kv"><strong>Risiko:</strong><br>${item.detail.risiko}</div>
      <div class="kv"><strong>Gizi:</strong><br>${item.detail.gizi}</div>
    </div>
  `;
  modal.classList.add("show");
}

closeModal.onclick = () => modal.classList.remove("show");
modal.onclick = e => { if (e.target === modal) modal.classList.remove("show"); };


/* ============================
   SEARCH BAR (FIXED)
   ============================ */
// searchInput.addEventListener("input", () => {
//   const q = searchInput.value.toLowerCase();

//   const filtered = items.filter(item =>
//     item.name.toLowerCase().includes(q) ||
//     item.category.toLowerCase().includes(q) ||
//     item.desc.toLowerCase().includes(q)
//   );

//   renderGrid(filtered);
// });


/* ============================
   PARALLAX
   ============================ */
document.addEventListener("scroll", () => {
  const bg = document.querySelector(".about-bg");
  if (bg) bg.style.transform = `translateY(${window.scrollY * 0.25}px)`;
});


/* ============================
   SMOOTH SCROLL
   ============================ */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth" });
  });
});


/* ============================
   INIT
   ============================ */
renderGrid();
observeReveal();


/* ============================
   LOADING SCREEN (FIXED)
   ============================ */
window.addEventListener("load", () => {
  const loader = document.getElementById("loader"); // FIX!!!
  if (!loader) return;

  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.transition = "0.6s ease";
    setTimeout(() => loader.style.display = "none", 600);
  }, 1000);
});
