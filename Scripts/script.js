
onStart();

function onStart(){
    let agentContainer = document.getElementById("card-container");
    let newsContainer = document.getElementById("news-container");

    if (agentContainer) {
        fetch("Data/agents.json").then(res => res.json())
        .then((data) => {
            data.forEach(element => {
                let agentName = element.alias != null ? element.alias : element.name
                agentContainer.innerHTML += `
                <div class="card card-${agentName}" onclick="clickCard('${agentName}')">
                    <div class="header">${element.name}</div>
                    <div class="background">
                        <img src="${element.imgUrl}" alt="${agentName}">
                        <p class="hide">${element.description}</p>
                    </div>
                </div>
                `;
            });
        })
        .catch(error => console.error("Error fetching data:", error));

    }

    
    if (newsContainer) {
        fetch("Data/news.json").then(res => res.json())
        .then((data) => {
            data.forEach(element => {

                newsContainer.innerHTML += `
                    <div class="card">
                        <h1>${element.name.toUpperCase()}</h1>
                        <p>${element.description} <br/> <br/>

                            📌 Fun Fact: ${element.fun_fact}
                        </p>
                        <img src="Resources/Agents/${element.name}.png" alt="">
                    </div>
                `;
            });
        })
        .catch(error => console.error("Error fetching data:", error));

    }

}

function clickCard(name){
    let cardImg = document.querySelector(`.card.card-${name} .background img`);
    let cardP = document.querySelector(`.card.card-${name} .background p`);

    if(cardImg.classList.contains("hide")){
        cardImg.classList.remove("hide");
        cardP.classList.add("hide");
    }else{
        cardImg.classList.add("hide");
        cardP.classList.remove("hide");
    }
}

function changePage(url, newTab = false){
    if(newTab == true){
        window.open(url)
    }else{
        window.location = url
    }
}


const slider = document.querySelector('.banner-container');
const sliderContainer = document.querySelector('.boxs');
const items = document.querySelectorAll('.boxs img');


if(slider){
    let scrollAmount = 0;
    let itemWidth = items[0].offsetWidth + 10; // Tambahkan gap antara item
    let totalWidth = itemWidth * items.length; // Total panjang slider
    let containerWidth = sliderContainer.offsetWidth;
    
    function autoScroll() {
      scrollAmount += 5; // Kecepatan scroll
      
      // Cek jika item terakhir sudah di pojok kiri
      if (scrollAmount >= totalWidth - containerWidth) {
        setTimeout(() => {
          scrollAmount = 0; // Reset ke awal
        }, 0); // Tunggu 1 detik sebelum reset
      }
      
      slider.style.transform = `translateX(-${scrollAmount}px)`;
      requestAnimationFrame(autoScroll);
    }
    
    autoScroll();
}
