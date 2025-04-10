const navbarHTML = `
<div class="navbar">
    <img onclick="changePage('index.html')" class="header" src="Resources/Header.png" alt="" />
    <ul>
      <li onclick="changePage('index.html')">Home</li>
      <li onclick="changePage('agents.html')">Agents</li>
      <li onclick="changePage('maps.html')">Maps</li>
      <li onclick="changePage('news.html')">News</li>
      <li onclick="changePage('report.html')">Report Bug</li>
    </ul>
    <div class="bar" onclick="clickHamburger()"></div>
</div>

<div class="navbar-side hide">
    <img class="header" src="Resources/Header.png" alt="" />
    <ul>
      <li class="close" onclick="clickHamburger()">Back</li>
      <li onclick="changePage('index.html')">Home</li>
      <li onclick="changePage('agents.html')">Agents</li>
      <li onclick="changePage('maps.html')">Maps</li>
      <li onclick="changePage('news.html')">News</li>
      <li onclick="changePage('report.html')">Report Bug</li>
    </ul>
</div>
`;

function loadNavbar() {
    document.getElementById("navbar-container").innerHTML = navbarHTML;
}

document.addEventListener("DOMContentLoaded", loadNavbar);


function clickHamburger(){
    let navbar = document.querySelector(".navbar-side");
    if(navbar.classList.contains("hide")){
        navbar.classList.remove("hide");
    }else{
        navbar.classList.add("hide");
    }
}