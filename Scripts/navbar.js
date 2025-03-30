function loadNavbar() {
    fetch("Components/navbar.html")
        .then(response => response.text())
        .then(html => {
            document.getElementById("navbar-container").innerHTML = html;
        })
        .catch(error => console.error("Error loading navbar:", error));
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