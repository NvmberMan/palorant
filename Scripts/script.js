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
      "Fast, agile, and deadly. Jett is the perfect choice for players who love to play aggressively. Use her core abilities to outsmart opponents and strike with unexpected speed.",
    fun_fact:
      "Jett hails from South Korea and is known for her stylish playstyle.",
  },
  {
    name: "Raze",
    description:
      "A demolition expert full of surprises! Raze brings excitement to every fight with her grenades and rockets that obliterate enemies. Don’t let her get too close unless you’re ready for a blast.",
    fun_fact:
      "Raze is from Brazil and is known as the most explosive Agent on the battlefield.",
  },
  {
    name: "Sage",
    description:
      "A team protector who can turn the tide. With healing abilities and barrier walls, Sage is a valuable asset every team wants on their side.",
    fun_fact:
      "Sage is from China and is skilled in the ancient art of healing.",
  },
  {
    name: "Phoenix",
    description:
      "Playing with fire is no problem for Phoenix. He can burn enemies, heal himself, and return to the fight in style. Confident players will find a perfect match in him.",
    fun_fact:
      "Phoenix is from the UK and brings a charismatic presence to the battlefield.",
  },
  {
    name: "Cypher",
    description:
      "An unrivaled spy master. With his traps and surveillance camera, Cypher controls the battlefield from the shadows. No enemy can hide from his watchful eyes.",
    fun_fact:
      "Cypher is from Morocco and always keeps his true identity a secret.",
  },
  {
    name: "Omen",
    description:
      "A shadow that always lurks. Omen is a mysterious Agent capable of teleporting and confusing his enemies. If he vanishes from sight, prepare for a sudden strike.",
    fun_fact:
      "Omen’s true identity remains a mystery—even to the other Agents.",
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
      "A disaster at a local kingdom facility threatens to engulf the whole neighborhood. Stop at your favorite food truck then fight across the city in this traditional three lane map.",
    type: "Three lane",
    features: ["Traditional layout", "Urban setting"],
    theme: "City, urban",
  },
  {
    name: "Lotus",
    description:
      "A mysterious structure housing an astral conduit radiates with ancient power. Great stone doors provide a variety of movement opportunities and unlock the paths to three mysterious sites.",
    type: "Three sites",
    features: ["Rotating stone doors", "Ancient temple"],
    theme: "Mystic, ancient ruins",
  },
  {
    name: "Pearl",
    description:
      "Attackers push down into the Defenders on this two-site map set in a vibrant, underwater city. Pearl is a geo-driven map with no mechanics. Take the fight through a compact mid or the longer range wings in our first map set in Omega Earth.",
    type: "Two sites",
    features: ["No special mechanics", "Underwater city"],
    theme: "Futuristic, underwater",
  },
  {
    name: "Fracture",
    description:
      "A top secret research facility split apart by a failed radianite experiment. With defender options as divided as the map, the choice is yours: meet the attackers on their own turf or batten down the hatches to weather the assault.",
    type: "Two sites",
    features: ["Split defender spawns", "Ziplines"],
    theme: "High-tech, experimental",
  },
  {
    name: "Breeze",
    description:
      "Take in the sights of historic ruins or seaside caves on this tropical paradise. But bring some cover. You’ll need them for the wide open spaces and long range engagements. Watch your flanks and this will be a Breeze.",
    type: "Two sites",
    features: ["Wide open areas", "Long range combat"],
    theme: "Tropical, ruins",
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
            <div class="item" onclick="detailNews(${i})">
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

function detailNews(index) {
  let newsPreview = document.getElementById("news-preview");
  let image = document.getElementById("news-preview-img");
  let title = document.getElementById("news-preview-title");
  let description = document.getElementById("news-preview-description");

  newsPreview.classList.remove("hidden");

  title.innerHTML = news2[index].title;
  description.innerHTML = news2[index].description;
  image.src = `Resources/News/image-${index}.png`;
}

function closeNews() {
  let newsPreview = document.getElementById("news-preview");
  newsPreview.classList.add("hidden");
}
