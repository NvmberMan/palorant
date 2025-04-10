const agents = [
  {
    name: "Fade",
    role: "Initiator",
    description:
      "Fade, a bounty hunter from Turkey, unleashes the power of their nightmares to steal enemy secrets. Like terror itself, she hunts her targets, exposes their deepest fears, and then destroys them in the darkness.",
    imgUrl: "Resources/Agents/Fade.png",
  },
  {
    name: "Chamber",
    role: "Sentinel",
    description:
      "Chamber, a weapons designer from France, dresses sharply and carries powerful weapons. With his custom guns, he can hold areas, shoot enemies from a distance, and always has a backup plan for every situation.",
    imgUrl: "Resources/Agents/Chamber.png",
  },
  {
    name: "Cypher",
    role: "Sentinel",
    description:
      "Cypher, an information broker from Morocco, is a one-man surveillance network, tracking every enemy move. No secret is safe. No maneuver goes unseen. Cypher is always watching.",
    imgUrl: "Resources/Agents/Cypher.png",
  },
  {
    name: "Breach",
    role: "Initiator",
    description:
      "Breach, a bionic warrior from Sweden, fires powerful kinetic blasts to aggressively break through enemy territory. The damage and disruption he causes ensure that the fight is never fair.",
    imgUrl: "Resources/Agents/Breach.png",
  },
  {
    name: "Jett",
    role: "Duelist",
    description:
      "Representing her home country, South Korea, Jett’s agile fighting style and swift evasions allow her to take risks others can’t. She moves around every battle, striking down enemies before they even realize what’s happening.",
    imgUrl: "Resources/Agents/Jett.png",
  },
  {
    name: "Brimstone",
    role: "Controller",
    description:
      "Joining from the U.S., Brimstone’s orbital arsenal ensures his squad always has the advantage. His ability to deliver precise and safe support makes him an unmatched battlefield commander.",
    imgUrl: "Resources/Agents/Brimstone.png",
  },
  {
    name: "Neon",
    role: "Duelist",
    description:
      "Neon, an agent from the Philippines, dashes forward at incredible speed, unleashing bioelectric surges as fast as her body generates them. She sprints to catch enemies off guard, then strikes faster than lightning.",
    imgUrl: "Resources/Agents/Neon.png",
  },
  {
    name: "Sova",
    role: "Initiator",
    description:
      "Born from the eternal winter of Russia’s tundra, Sova tracks, finds, and eliminates enemies with ruthless efficiency and precision. His custom bow and incredible scouting abilities ensure that even if you run, you cannot hide.",
    imgUrl: "Resources/Agents/Sova.png",
  },
  {
    name: "Harbor",
    role: "Controller",
    description:
      "Hailing from India's coast, Harbor storms the field wielding ancient technology with dominion over water. He unleashes frothing rapids and crushing waves to shield his allies, or pummel those that oppose him.",
    imgUrl: "Resources/Agents/Harbor.png",
  },
  {
    name: "Kay/o",
    alias: "Kayo",
    role: "Initiator",
    description:
      "KAY/O is a machine of war built for a single purpose: neutralizing radiants. His power to Suppress enemy abilities dismantles his opponents' capacity to fight back, securing him and his allies the ultimate edge.",
    imgUrl: "Resources/Agents/Kayo.png",
  },
  {
    name: "Phoenix",
    role: "Duelist",
    description:
      "Hailing from the U.K., Phoenix’s star power shines through in his fighting style, igniting the battlefield with flash and flare. Whether he’s got backup or not, he’ll rush into a fight on his own terms.",
    imgUrl: "Resources/Agents/Phoenix.png",
  },
  {
    name: "Astra",
    role: "Controller",
    description:
      "Ghanaian Agent Astra harnesses the energies of the cosmos to reshape battlefields to her whim. With full command of her astral form and a talent for deep strategic foresight, she’s always eons ahead of her enemy’s next move.",
    imgUrl: "Resources/Agents/Astra.png",
  },
];

const news = [
  {
    name: "Jett",
    description:
      "Cepat, lincah, dan mematikan. Jett adalah pilihan tepat bagi mereka yang suka bermain agresif. Gunakan kemampuan dasarnya untuk mengelabui lawan dan serang dengan kecepatan yang tak terduga.",
    fun_fact:
      "Jett berasal dari Korea Selatan dan terkenal dengan gaya bermain yang stylish.",
  },
  {
    name: "Raze",
    description:
      "Ahli ledakan yang penuh kejutan! Raze membawa keceriaan di setiap pertarungan dengan granat dan roket yang menghancurkan lawan. Jangan biarkan dia mendekat jika tidak ingin terkena serangan dahsyatnya.",
    fun_fact:
      "Raze berasal dari Brasil dan dikenal sebagai agen paling eksplosif di medan perang.",
  },
  {
    name: "Sage",
    description:
      "Pelindung tim yang bisa membalikkan keadaan. Dengan kemampuan penyembuhan dan dinding penghalang, Sage adalah aset berharga yang selalu dicari oleh tim mana pun.",
    fun_fact:
      "Sage berasal dari China dan memiliki keahlian dalam seni penyembuhan kuno.",
  },
  {
    name: "Phoenix",
    description:
      "Bermain dengan api bukan masalah bagi Phoenix. Dia bisa membakar lawan, menyembuhkan dirinya sendiri, dan kembali ke pertempuran dengan gaya. Pemain yang percaya diri akan sangat cocok dengannya.",
    fun_fact:
      "Phoenix berasal dari Inggris dan memiliki kepribadian yang karismatik di medan tempur.",
  },
  {
    name: "Cypher",
    description:
      "Ahli mata-mata yang tak tertandingi. Dengan perangkat dan kamera pengintainya, Cypher bisa mengendalikan medan perang dari bayang-bayang. Tidak ada musuh yang bisa bersembunyi darinya.",
    fun_fact:
      "Cypher berasal dari Maroko dan selalu menyembunyikan identitas aslinya.",
  },
  {
    name: "Omen",
    description:
      "Bayangan yang selalu mengintai. Omen adalah agen misterius yang mampu berteleportasi dan membingungkan musuhnya. Jika dia menghilang dari pandangan, bersiaplah untuk serangan mendadak.",
    fun_fact:
      "Identitas asli Omen tetap menjadi misteri, bahkan bagi para agen lainnya.",
  },
];

const news2 = [
  {
    date: "April 1, 2025",
    title: "Special Ramadan Event Has Started!",
    description:
      "Celebrate the holy month of Ramadan with Palorant! Collect tokens.",
    language: "en",
  },
  {
    date: "April 1, 2025",
    title: "April Fools: Smite 2 Reveal",
    description: "On September 23, 2020, history was made. We released the...",
    language: "en",
  },
  {
    date: "March 28, 2025",
    title: "A Spectrum of Colors: Waylay Art from the Community",
    description:
      "Hey folks, it's Ash and I’m back again with some lovely community...",
    language: "en",
  },
  {
    date: "March 24, 2025",
    title: "Red Bull Partners with VCT EMEA in Multiyear Deal",
    description:
      "VCT EMEA and Red Bull will continue their longstanding partnership for...",
    language: "en",
  },
  {
    date: "March 21, 2025",
    title: "Riot Games Boosts Nordic Esports with The Gathering",
    description:
      "More prizes, more action, and more fun —Riot Games is making The Gathering...",
    language: "en",
  },
  {
    date: "March 19, 2025",
    title: "Masters Toronto: Live Audience and Ticket Sale Information",
    description:
      "We’re excited to announce that tickets for VALORANT Masters...",
    language: "en",
  },
  {
    date: "March 18, 2025",
    title: "VALORANT Patch Notes 10.05",
    description:
      "Hey, everyone. It’s ya boi Kenny here—back with a small but mighty patch 10.05.",
    language: "en",
  },
  {
    date: "March 10, 2025",
    title: "VCT EMEA Stage 1 2025 Primer: Format and Key Dates",
    description: "Get ready as the road to Masters Toronto starts here.",
    language: "en",
  },
  {
    date: "March 4, 2025",
    title: "VALORANT Patch Notes 10.04",
    description:
      "New Duelist: Waylay, major updates to various Agents, new map rotation, updates to Ascent, and more.",
    language: "en",
  },
];

const maps = [
  {
    name: "Sunset",
    description:
      "Sebuah bencana di fasilitas kerajaan lokal mengancam akan melahap seluruh lingkungan. Berhenti sejenak di truk makanan favoritmu lalu bertarunglah melintasi kota dalam peta tiga jalur tradisional ini.",
    type: "Tiga jalur",
    features: [],
    theme: "Kota, tradisional",
  },
  {
    name: "Lotus",
    description:
      "Struktur kuno dengan saluran astral yang memancarkan kekuatan misterius. Pintu batu raksasa membuka jalur unik menuju tiga situs berbeda yang siap dijelajahi dalam pertempuran taktis.",
    type: "Tiga situs",
    features: ["Pintu batu yang berputar", "Struktur kuno"],
    theme: "Mistik, kuil kuno",
  },
  {
    name: "Pearl",
    description:
      "Peta dua situs yang terletak di kota bawah laut penuh warna. Tanpa mekanik tambahan, Pearl mengandalkan jalur sempit dan terbuka untuk pertarungan yang cepat dan intens.",
    type: "Dua situs",
    features: ["Tanpa mekanik khusus", "Kota bawah laut"],
    theme: "Futuristik, bawah laut",
  },
  {
    name: "Fracture",
    description:
      "Fasilitas eksperimen yang terbelah akibat insiden radianite. Peta ini memiliki pertahanan dari dua sisi, memungkinkan pendekatan strategis yang berbeda bagi kedua tim.",
    type: "Dua situs",
    features: ["Spawn bertahan terpisah", "Ziplines"],
    theme: "Teknologi tinggi, eksperimen",
  },
  {
    name: "Breeze",
    description:
      "Sebuah pulau tropis yang menghadirkan medan luas dan terbuka. Dengan pemandangan reruntuhan dan gua pantai, Breeze cocok untuk duel jarak jauh dan rotasi cepat.",
    type: "Dua situs",
    features: ["Area terbuka luas", "Pertempuran jarak jauh"],
    theme: "Tropis, reruntuhan",
  },
];

function onStart() {
  let agentContainer = document.getElementById("card-container");
  let newsContainer = document.getElementById("news-container");
  let mapsContainer = document.getElementById("maps-grid");
  let news2Container = document.getElementById("news-grid");

  console.log("dsf");
  if (agentContainer) {
    agents.forEach((element) => {
      let agentName = element.alias != null ? element.alias : element.name;
      agentContainer.innerHTML += `
                <div class="card card-${agentName}" onclick="clickCard('${agentName}')">
                    <div class="header">${element.name}</div>
                    <div class="role">${element.role}</div>
                    <div class="background">
                        <img src="${element.imgUrl}" alt="${agentName}">
                        <p class="hide">${element.description}</p>
                    </div>
                </div>
            `;
    });
  }

  if (newsContainer) {
    news.forEach((element) => {
      newsContainer.innerHTML += `
                <div class="card">
                    <h1>NEW ${element.name.toUpperCase()}!</h1>
                    <p>${element.description} <br/> <br/>
                        📌 Fun Fact: ${element.fun_fact}
                    </p>
                    <img src="Resources/Agents/${element.name}.png" alt="">
                </div>
            `;
    });
  }

  if (mapsContainer) {
    let i = 0;
    maps.forEach((element) => {
      mapsContainer.innerHTML += `
            <div class="item">
              <img src="Resources/Maps/image-${i++}.png" alt="" />
              <div class="right">
                <div class="text">
                  <h1>${element.name}</h1>
                  <p>
                    ${element.description}
                  </p>
                </div>
                <div class="images">
                  <img src="Resources/Maps/image-${i++}.png" alt="">
                  <img src="Resources/Maps/image-${i++}.png" alt="">
                  <img src="Resources/Maps/image-${i++}.png" alt="">
                  <img src="Resources/Maps/image-${i++}.png" alt="">
                </div>
              </div>
            </div>
            `;
    });
  }

  if (news2Container) {
    let i = 0;
    news2.forEach((element) => {
      news2Container.innerHTML += `
            <div class="item">
              <div class="image">
                <img src="Resources/News/image-${i++}.png" alt="">
                <h3>📅 ${element.date}</h3>
              </div>
              <div class="text">
                <h4>${element.title}</h4>
                <p>${element.description}</p>
              </div>
            </div>
            `;
    });
  }
}

onStart();

function clickCard(name) {
  let cardImg = document.querySelector(`.card.card-${name} .background img`);
  let cardP = document.querySelector(`.card.card-${name} .background p`);

  if (cardImg.classList.contains("hide")) {
    cardImg.classList.remove("hide");
    cardP.classList.add("hide");
  } else {
    cardImg.classList.add("hide");
    cardP.classList.remove("hide");
  }
}

function changePage(url, newTab = false) {
  if (newTab == true) {
    window.open(url);
  } else {
    window.location = url;
  }
}

const slider = document.querySelector(".banner-container");
const sliderContainer = document.querySelector(".boxs");
const items = document.querySelectorAll(".boxs img");

if (slider) {
  let scrollAmount = 0;
  let itemWidth = items[0].offsetWidth + 10;
  let totalWidth = itemWidth * items.length;
  let containerWidth = sliderContainer.offsetWidth;

  function autoScroll() {
    scrollAmount += 5;

    if (scrollAmount >= totalWidth - containerWidth) {
      setTimeout(() => {
        scrollAmount = 0;
      }, 0);
    }

    slider.style.transform = `translateX(-${scrollAmount}px)`;
    requestAnimationFrame(autoScroll);
  }

  autoScroll();
}

document.getElementById("report-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const server = document.getElementById("server").value.trim();
  const message = document.getElementById("message").value.trim();
  const checkbox = document.getElementById("check").checked;
  const errorDiv = document.getElementById("error-message");

  const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let errorText = "";

  if (!username) {
    errorText = "Username harus diisi.";
  } else if (!email) {
    errorText = "Email harus diisi.";
  } else if (!emailFormat.test(email)) {
    errorText = "Format email tidak valid.";
  } else if (!server) {
    errorText = "Server harus diisi.";
  } else if (!message) {
    errorText = "Deskripsi bug harus diisi.";
  } else if (!checkbox) {
    errorText = "Anda harus menyetujui pengiriman email lanjutan.";
  }

  if (errorText) {
    errorDiv.classList.remove("hide");
    errorDiv.innerHTML = errorText;
    errorDiv.scrollIntoView({ behavior: "smooth", block: "center" });
  } else {
    errorDiv.innerHTML = "";
    alert("Laporan berhasil dikirim!");
  }
});
